const { ipcRenderer } = window.require("electron");
import React from "react";
import { Button, Col, Container } from "react-bootstrap";
import LoadingBar from "../components/LoadingBar";

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
                <Container className="main">
                    <h1>Main</h1>
                </Container>
                <Container className="main">
                    <h1>Front</h1>
                </Container>
                <Container className="main">
                    <h1>Data Update</h1>
                    <Button onClick={this.refreshData.bind(this)} disabled={this.state.isLoading}>
                        Refresh Data
                    </Button>
                    <h3>Letztes Update:{this.state.lastUpdated}</h3>
                </Container>
            </>
        );
    }
}

export default MainView;
