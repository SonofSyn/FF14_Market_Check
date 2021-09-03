import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LoadingBar from "../components/LoadingBar";
interface Props {
    isLoading: boolean;
}
interface State {
    isLoading: boolean;
}
class Footer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = Footer.createState(props);
    }

    static createState(props: Props): State {
        return { isLoading: props.isLoading };
    }

    static getDerivedStateFromProps(props: Props, state: State): State | null {
        if (props.isLoading === state.isLoading) return null;
        return Footer.createState(props);
    }

    render() {
        return (
            <>
                {this.state.isLoading ? (
                    <Container className="loadingBar">
                        <h3>Lade Daten...</h3>
                        <LoadingBar />
                    </Container>
                ) : null}
            </>
        );
    }
}

export default Footer;
