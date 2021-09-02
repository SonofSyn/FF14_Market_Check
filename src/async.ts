import { promisify } from "util";
import * as fs from "fs";
export let asyncExists = promisify(fs.exists);
export let asyncWriteFile = promisify(fs.writeFile);
export let asyncReadFile = promisify(fs.readFile);
export let asyncMkdir = promisify(fs.mkdir);
export let asyncUnlink = promisify(fs.unlink);
export let asyncStringify = promisify(JSON.stringify);
export let asyncParse = promisify(JSON.parse);
export async function forEachAsync<A, B>(
    data: A[],
    fnc: (a: A, ix: number) => Promise<B>,
    maxParallel: number = 5
): Promise<B[]> {
    let parr = data.length < maxParallel ? data.length : maxParallel;
    let workers: Promise<void>[] = [];
    let back: B[] = [];
    let next = 0;
    for (let i = 0; i < parr; i++) {
        workers.push(
            (async () => {
                while (next < data.length) {
                    let ix = next;
                    let item = data[ix];
                    next++;
                    back.push(await fnc(item, ix));
                }
            })()
        );
    }
    await Promise.all(workers);
    return back;
}

// Funktion um Wartezeit zwischen Googlesuchen zu setzen
//

/**
 *
 *
 * @export      waitFor                            Funktion zum Einfügen von Wartezeiten zwischen Googleaufruf
 * @param       {number} [ms=1000]                 Wartezeit zwischen Aufgreifen von neuen Daten
 * @returns     {Promise<void>}
 */
export async function waitFor(ms: number = 1000): Promise<void> {
    return new Promise((res) => {
        setTimeout(res, ms);
    });
}

// export async function asyncInterval(callback: () => Promise<boolean>, ms: number, triesLeft = 5) {
//     return new Promise<void>((resolve, reject) => {
//         const interval = setInterval(async () => {
//             if (await callback()) {
//                 resolve();
//                 clearInterval(interval);
//             } else if (triesLeft <= 1) {
//                 reject();
//                 clearInterval(interval);
//             }
//             triesLeft--;
//         }, ms);
//     });
// }
