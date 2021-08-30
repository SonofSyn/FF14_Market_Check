import React from "react";
import { Container } from "react-bootstrap";
import { LISTINGSHEADER, DATAHEADER, ORDERSHEADER } from "../../frontendConst";
import { ItemMetrics, Links, ListingData, Retainer, Views } from "../../frontendInterface";
import ListingView from "../views/ListingView";
import MainView from "../views/MainView";
import MetricView from "../views/MetricView";
import RetainerView from "../views/RetainerView";
import Filterbar from "./Filterbar";
import Navigation from "./Navigation";
import Searchbar from "./Searchbar";
interface Props {
    id: string;
    metrics: ItemMetrics[];
    retainer: Retainer[];
    listings: ListingData[];
}
interface State {
    id: string;
    currentView: string;
    currentSearch: string;
    metrics: ItemMetrics[];
    retainer: Retainer[];
    listings: ListingData[];
    priceFilter: number;
}
class DefaultPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = DefaultPage.createState(props);
    }

    static createState(props: Props): State {
        return {
            id: props.id,
            currentView: "MainView",
            currentSearch: "",
            metrics: props.metrics,
            retainer: props.retainer,
            listings: props.listings,
            priceFilter: 50000,
        };
    }

    static getDerivedStateFromProps(props: Props, state: State): State | null {
        if (
            props.id === state.id &&
            props.metrics.length === state.metrics.length &&
            props.retainer.length === state.retainer.length &&
            props.listings.length === state.listings.length
        )
            return null;
        return DefaultPage.createState(props);
    }

    private viewNames: string[] = ["MainView", "ListingView", "MetricView", "RetainerView"];

    private setPriceFilter(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ priceFilter: e.currentTarget.valueAsNumber });
    }

    /**
     *
     *
     * @returns
     * @memberof DefaultPage
     */
    createLinks() {
        let links: Links = {};
        this.viewNames.forEach((view) => {
            links[view] = () => this.setState({ currentView: view, currentSearch: "" });
        });
        return links;
    }
    private links = this.createLinks();

    createViews() {
        let views = [
            {
                component: <MainView />,
                name: this.viewNames[0],
            },
            {
                component: (
                    <ListingView
                        columns={LISTINGSHEADER}
                        ordercolumns={ORDERSHEADER}
                        data={this.state.listings}
                        priceFilter={this.state.priceFilter}
                    />
                ),
                name: this.viewNames[1],
            },
            {
                component: <MetricView columns={DATAHEADER} data={this.state.metrics} />,
                name: this.viewNames[2],
            },
            {
                component: <RetainerView ordercolumns={ORDERSHEADER} data={this.state.retainer} />,
                name: this.viewNames[3],
            },
        ];
        let back: Views = {};
        views.forEach((view, vIx) => {
            back[view.name] = () => {
                return <React.Fragment key={view.name + vIx}>{view.component} </React.Fragment>;
            };
        });
        return back;
    }

    createSearchBar() {
        return (
            <>
                <Container className={"filterarea"}>
                    <Searchbar
                        currentSearch={this.state.currentSearch}
                        setCurrentSearch={this.setCurrentSearch.bind(this)}
                    />
                </Container>
            </>
        );
    }

    createFilterBar() {
        return (
            <>
                <Container className={"filterarea"}>
                    <Filterbar
                        priceFilter={this.state.priceFilter}
                        setAmountFilter={this.setPriceFilter.bind(this)}
                    ></Filterbar>
                </Container>
            </>
        );
    }

    setCurrentSearch(search: string) {
        this.setState({ currentSearch: search });
    }

    render() {
        return (
            <>
                <Container className={"maincontainer"}>
                    <Container className={"navarea"}>
                        <Navigation setView={this.links} />
                    </Container>
                    {this.createSearchBar()}
                    {this.createFilterBar()}
                    <Container className={"Infobar"}></Container>
                    <Container className={"contentarea"}>{this.createViews()[this.state.currentView]()}</Container>
                </Container>
            </>
        );
    }
}

export default DefaultPage;
