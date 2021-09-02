import * as React from "react";
import * as ReactDOM from "react-dom";
import DefaultPage from "./layout/DefaultPage";
import "./scss/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { dbItemMetrics, dbListingData, dbRetainer, ItemMetrics, ListingData, Retainer } from "../frontendInterface";
import placeHolder from "./../../../assets/placeholder.png";
import crafter from "./../../../assets/crafter/goldsmith.png";
const { ipcRenderer } = window.require("electron");
// import electron from "electron";
// import { ipcRenderer } from "electron";
interface Props {}
interface State {
    id: string;
    metrics: ItemMetrics[];
    retainer: Retainer[];
    listings: ListingData[];
    isLoading: boolean;
}

/**
 * Main React component which handles startup
 *
 * @export
 * @class MainAppWindow
 * @extends {React.Component<Props, State>}
 */
export class MarketCheck extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = MarketCheck.createState(props);
    }
    static createState(props: Props): State {
        return { id: " ", metrics: [], listings: [], retainer: [], isLoading: false };
    }

    private updateID = Date.now();
    setLoading() {
        this.setState({ isLoading: true });
    }

    componentDidMount() {
        ipcRenderer.send("start-up", "ready");
        ipcRenderer.on("retainer", (event: any, arg: any) => {
            let backendRetainer: dbRetainer[] = JSON.parse(arg);
            let retainer: Retainer[] = backendRetainer.map((data, ix) => {
                return {
                    id: ix.toString(),
                    type: "retainer",
                    name: data.name,
                    imgPath: <img src={placeHolder} style={{ width: "50px", height: "50px" }}></img>,
                    crafter: <img src={crafter} style={{ width: "50px", height: "50px" }}></img>,
                    retainerOrder: data.retainerOrder,
                    undercuts: data.undercuts.map((data, ix) => {
                        return {
                            id: ix.toString(),
                            type: "order",
                            pricePerUnit: data.pricePerUnit,
                            total: data.total,
                            quantity: data.quantity,
                            hq: data.hq,
                            retainerName: data.retainerName,
                        };
                    }),
                };
            });
            this.setState({ retainer, id: this.updateID + 1 + "", isLoading: false });
        });
        ipcRenderer.on("listings", (event: any, arg: any) => {
            let backendListing: dbListingData[] = JSON.parse(arg);
            let listings: ListingData[] = backendListing.map((data, ix) => {
                return {
                    id: ix.toString(),
                    gameID: data.id,
                    date: data.date.slice(0, 15),
                    name: data.name,
                    imgPath: <img src={placeHolder} style={{ width: "50px", height: "50px" }}></img>,
                    crafter: <img src={crafter} style={{ width: "50px", height: "50px" }}></img>,
                    orders: data.orders.map((data, ix) => {
                        return {
                            id: ix.toString(),
                            type: "order",
                            pricePerUnit: data.pricePerUnit,
                            total: data.total,
                            quantity: data.quantity,
                            hq: data.hq,
                            retainerName: data.retainerName,
                        };
                    }),
                    type: "listing",
                };
            });
            this.setState({ listings, id: this.updateID + 1 + "", isLoading: false });
        });
        ipcRenderer.on("metrics", (event: any, arg: any) => {
            let backendMetrics: dbItemMetrics[] = JSON.parse(arg);
            let metrics: ItemMetrics[] = backendMetrics.map((data, ix) => {
                return {
                    id: ix.toString(),
                    gameID: data.id,
                    date: data.date.slice(0, 15),
                    name: data.name,
                    imgPath: <img src={placeHolder} style={{ width: "50px", height: "50px" }}></img>,
                    crafter: <img src={crafter} style={{ width: "50px", height: "50px" }}></img>,
                    type: "metrics",
                    amountHQListing: data.amountHQListing,
                    amountNQListings: data.amountNQListings,
                    maxPriceHQ: data.maxPriceHQ,
                    maxPriceNQ: data.maxPriceNQ,
                    minPriceHQ: data.minPriceHQ,
                    minPriceNQ: data.minPriceNQ,
                };
            });
            this.setState({ metrics, id: this.updateID + 1 + "", isLoading: false });
        });
    }

    render() {
        return (
            <>
                <DefaultPage
                    id={this.state.id}
                    metrics={this.state.metrics}
                    listings={this.state.listings}
                    retainer={this.state.retainer}
                    isLoading={this.state.isLoading}
                    setLoading={this.setLoading.bind(this)}
                />
            </>
        );
    }
}

ReactDOM.render(<MarketCheck />, document.getElementById("root"));
