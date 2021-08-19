import React from "react";
import { Col, Container } from "react-bootstrap";
import StandardTable from "../components/tables/StandardTable";
interface Props {}
interface State {}
class MainView extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = MainView.createState(props);
    }

    static createState(props: Props): State {
        return {};
    }

    // static getDerivedStateFromProps(props: Props, state: State): (State | null) {
    //     if (props.dummy !== state.dummy) return null
    //     return MainView.createState(props, state.showPopup)
    // }

    render() {
        return (
            <>
                <Col>
                    <Container className="main">
                        <h1>Main</h1>
                    </Container>
                    <Container className="main">
                        <h1>Front</h1>
                    </Container>
                    <Container className="main">
                        <h1>Data Update</h1>
                    </Container>
                </Col>
            </>
        );
    }
}

export default MainView;
