import React from "react";
import { Button, Form, Nav, Navbar } from "react-bootstrap";
import { Links } from "../../frontendInterface";
import logo from "./../../../../assets/logo.png";
interface Props {
    setView: Links;
    toggleSettings: () => void;
    currentView: string;
}

interface State {
    currentView: string;
}

/**
 * React component to handle buttons to switch displayed content
 *
 * @class Navbar
 * @extends {React.Component<Props, State>}
 */
export default class Navigation extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = Navigation.createState(props);
    }

    static createState(props: Props): State {
        return {
            currentView: props.currentView,
        };
    }

    static getDerivedStateFromProps(props: Props, state: State): State | null {
        if (props.currentView === state.currentView) return null;
        return Navigation.createState(props);
    }
    render() {
        return (
            <Navbar expand="md">
                <Navbar.Brand className="logo" id="CP-Label" onClick={() => this.props.setView["MainView"]()}>
                    <img src={logo} style={{ width: 75, height: 55 }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Button
                            id="nav_btn"
                            className={this.state.currentView === "RetainerView" ? "highlighted" : ""}
                            onClick={() => this.props.setView["RetainerView"]()}
                        >
                            Gehilfen
                        </Button>
                        <Button
                            id="nav_btn"
                            className={this.state.currentView === "MetricView" ? "highlighted" : ""}
                            onClick={() => this.props.setView["MetricView"]()}
                        >
                            Gegenstände
                        </Button>
                        <Button
                            id="nav_btn"
                            className={this.state.currentView === "ListingView" ? "highlighted" : ""}
                            onClick={() => this.props.setView["ListingView"]()}
                        >
                            Marktbrett
                        </Button>
                    </Nav>
                    <Nav>
                        <Button id="nav_btn" className="filterButton" onClick={this.props.toggleSettings}>
                            Filter
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
