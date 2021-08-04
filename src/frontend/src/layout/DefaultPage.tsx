import React from "react";
import { Links, Views } from "../../frontendInterface";
import MainView from "../views/MainView";
import Navigation from "./Navigation";
import Searchbar from "./Searchbar";
interface Props {
    id: string;
}
interface State {
    id: string;
    currentView: string;
    currentSearch: string;
}
class DefaultPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = DefaultPage.createState(props);
    }

    static createState(props: Props): State {
        return { id: props.id, currentView: "MainView", currentSearch: "" };
    }

    static getDerivedStateFromProps(props: Props, state: State): State | null {
        if (props.id !== state.id) return null;
        return DefaultPage.createState(props);
    }

    private viewNames: string[] = ["MainView"];

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
                <div className={"filterarea"}>
                    <Searchbar
                        currentSearch={this.state.currentSearch}
                        setCurrentSearch={this.setCurrentSearch.bind(this)}
                    />
                </div>
                ;
            </>
        );
    }

    setCurrentSearch(search: string) {
        this.setState({ currentSearch: search });
    }

    render() {
        return (
            <>
                <div className={"maincontainer"}>
                    <div className={"navarea"}>
                        <Navigation setView={this.links} />
                    </div>
                    {this.createSearchBar()}
                    <div className={"contentarea"}>{this.createViews()[this.state.currentView]()}</div>
                </div>
            </>
        );
    }
}

export default DefaultPage;
