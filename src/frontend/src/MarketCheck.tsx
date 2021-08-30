import * as React from "react";
import * as ReactDOM from "react-dom";
import DefaultPage from "./layout/DefaultPage";
import "./scss/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { eItemMetrics, eListingData, eRetainer, ItemMetrics, ListingData, Retainer } from "../frontendInterface";
const { ipcRenderer } = window.require("electron");
// import electron from "electron";
// import { ipcRenderer } from "electron";
interface Props {}
interface State {
    id: string;
    metrics: ItemMetrics[];
    retainer: Retainer[];
    listings: ListingData[];
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
        return { id: " ", metrics: [], listings: [], retainer: [] };
    }

    componentDidMount() {
        console.log("test");
        ipcRenderer.send("start-up", "ready");

        ipcRenderer.on("retainer", (event: any, arg: any) => {
            let backendRetainer: eRetainer[] = JSON.parse(arg);
            let retainer: Retainer[] = backendRetainer.map((data, ix) => {
                return {
                    id: ix.toString(),
                    type: "retainer",
                    name: data.name,
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
            this.setState({ retainer });
        });
        ipcRenderer.on("listings", (event: any, arg: any) => {
            let backendListing: eListingData[] = JSON.parse(arg);
            let listings: ListingData[] = backendListing.map((data, ix) => {
                return {
                    id: ix.toString(),
                    gameID: data.id,
                    date: data.date.slice(0, 15),
                    name: data.name,
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
            this.setState({ listings });
        });
        ipcRenderer.on("metrics", (event: any, arg: any) => {
            let backendMetrics: eItemMetrics[] = JSON.parse(arg);
            let metrics: ItemMetrics[] = backendMetrics.map((data, ix) => {
                return {
                    id: ix.toString(),
                    gameID: data.id,
                    date: data.date.slice(0, 15),
                    name: data.name,
                    type: "metrics",
                    amountHQListing: data.amountHQListing,
                    amountNQListings: data.amountNQListings,
                    maxPriceHQ: data.maxPriceHQ,
                    maxPriceNQ: data.maxPriceNQ,
                    minPriceHQ: data.minPriceHQ,
                    minPriceNQ: data.minPriceNQ,
                };
            });
            this.setState({ metrics });
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
                />
            </>
        );
    }
}

ReactDOM.render(<MarketCheck />, document.getElementById("root"));
