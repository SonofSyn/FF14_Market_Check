import { app, BrowserWindow, ipcMain, ipcRenderer } from "electron";
import { retainersK } from "ff14marketfilter";
import { asyncParse, asyncReadFile, asyncWriteFile, waitFor } from "./async";
import { marketdata } from "./interface";
import { analyseListings, analyseMetrics, analyseRetainers, retrievServerData } from "./query";
// This allows TypeScript to pick up the magic constant that's auto-generated by Forge's Webpack
// plugin that tells the Electron app where to look for the Webpack-bundled app code (depending on
// whether you're running in development or production).
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
    // eslint-disable-line global-require
    app.quit();
}

const createWindow = (): void => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    // and load the index.html of the app.
    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

    // Open the DevTools.
    // mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", async () => {
    createWindow();
    // todo check for data folder structure
    ipcMain.on("start-up", async (event: any, arg: string) => {
        let listingsBuffer = await asyncReadFile("./data/compiledData/listings.json");
        let metricsBuffer = await asyncReadFile("./data/compiledData/metrics.json");
        let retainersBuffer = await asyncReadFile("./data/processed/retainers.json");
        event.reply("metrics", metricsBuffer.toString());
        event.reply("listings", listingsBuffer.toString());
        event.reply("retainer", retainersBuffer.toString());
    });
    ipcMain.on("load", async (event: any, arg: string) => {
        let marketItemData = await retrievServerData();
        let listingData = await analyseListings(marketItemData);
        let metricsData = await analyseMetrics(marketItemData);
        let retainerData = await analyseRetainers(retainersK, listingData);
        event.reply("metrics", JSON.stringify(metricsData));
        event.reply("listings", JSON.stringify(listingData));
        event.reply("retainer", JSON.stringify(retainerData));

        // For Tests
        // await waitFor(40000);
        // let listingsBuffer = await asyncReadFile("./data/compiledData/listings.json");
        // let metricsBuffer = await asyncReadFile("./data/compiledData/metrics.json");
        // let retainersBuffer = await asyncReadFile("./data/processed/retainers.json");
        // event.reply("metrics", metricsBuffer.toString());
        // event.reply("listings", listingsBuffer.toString());
        // event.reply("retainer", retainersBuffer.toString());
    });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
