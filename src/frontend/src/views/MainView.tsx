const { ipcRenderer } = window.require("electron");
import React from "react";
import { Button, ButtonGroup, Col, Container, Form } from "react-bootstrap";
import LoadingBar from "../components/LoadingBar";
import logo from "./../../../../assets/ff14Logo.png";
interface Props {
    isLoading: boolean;
    setLoading: () => void;
}
interface State {
    isLoading: boolean;
    lastUpdated: string;
}
class MainView extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = MainView.createState(props);
    }

    static createState(props: Props): State {
        let lastUpdate: string | null = window.localStorage.getItem("lastupdate");
        return { isLoading: props.isLoading, lastUpdated: lastUpdate === null ? "Kein neues Datum" : lastUpdate };
    }

    static getDerivedStateFromProps(props: Props, state: State): State | null {
        if (props.isLoading === state.isLoading) return null;
        return MainView.createState(props);
    }

    refreshData() {
        ipcRenderer.send("load", "ready");
        this.props.setLoading();
        window.localStorage.setItem("lastupdate", new Date().toDateString());
    }

    render() {
        return (
            <>
                <Container className="fillContainer"></Container>
                <Container className="main">
                    <img src={logo}></img>
                </Container>
                <Container className="main">
                    <h1>Wilkommen beim Final Fantasy Markt Preisprüfer</h1>
                </Container>
                <Container className="main">
                    <ButtonGroup>
                        <h3> {"Letztes Update:  " + this.state.lastUpdated + "  "} </h3>
                        <div style={{ width: "20px" }} />
                        <Button onClick={this.refreshData.bind(this)} disabled={this.state.isLoading} id="nav_btn">
                            Marktbrett Updaten
                        </Button>
                    </ButtonGroup>
                </Container>
            </>
        );
    }
}

export default MainView;
