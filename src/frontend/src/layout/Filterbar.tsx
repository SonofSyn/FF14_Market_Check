import React, { ChangeEventHandler } from "react";
import { Container, Form } from "react-bootstrap";
interface Props {
    setAmountFilter(e: React.ChangeEvent<HTMLInputElement>): void;
    priceFilter: number;
}

interface State {
    priceFilter: number;
}

class Filterbar extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = Filterbar.createState(props);
    }

    static createState(props: Props): State {
        return { priceFilter: props.priceFilter };
    }

    static getDerivedStateFromProps(props: Props, state: State): State | null {
        if (props.priceFilter === state.priceFilter) return null;
        return Filterbar.createState(props);
    }

    render() {
        return (
            <>
                <Container className={"searchbar"}>
                    <Form.Group>
                        <Container className={"searchdiv"}></Container>
                        <Container>
                            <Form.Label defaultValue="Preis">Preis</Form.Label>
                            <Form.Control
                                type="number"
                                value={this.state.priceFilter}
                                onChange={this.props.setAmountFilter}
                            />
                        </Container>
                    </Form.Group>
                </Container>
            </>
        );
    }
}

export default Filterbar;
