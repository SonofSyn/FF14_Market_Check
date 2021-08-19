import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TableHeader, ListingData } from "../../frontendInterface";

import StandardTable from "../components/tables/StandardTable";
interface Props {
    columns: TableHeader[];
    ordercolumns: TableHeader[];
    data: ListingData[];
}
interface State {}
class ListingView extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = ListingView.createState(props);
    }

    static createState(props: Props): State {
        return {};
    }

    // static getDerivedStateFromProps(props: Props, state: State): (State | null) {
    //     if (props.dummy !== state.dummy) return null
    //     return ListingView.createState(props, state.showPopup)
    // }

    buildTable() {
        let back: JSX.Element[] = [];
        this.props.data.forEach((e, eIx) => {
            back.push(
                <>
                    <Row key={"a" + eIx}>
                        <Col key={"b" + eIx}>
                            <Row className="table-info" key={"c" + eIx}>
                                <Col key={"d" + eIx}>{e.id}</Col>
                                <Col key={"e" + eIx}>{e.gameID}</Col>
                                <Col key={"f" + eIx}>{e.name}</Col>
                                <Col key={"g" + eIx}>{e.date}</Col>
                            </Row>
                            <Row key={"h" + eIx}>
                                <StandardTable
                                    className="listing-view"
                                    key={"order" + eIx}
                                    columns={this.props.ordercolumns}
                                    data={e.orders}
                                ></StandardTable>
                            </Row>
                        </Col>
                    </Row>
                </>
            );
        });
        return back;
    }

    render() {
        return (
            <>
                <Container className="info">
                    <h1>Listing</h1>
                </Container>

                {this.buildTable()}
            </>
        );
    }
}

export default ListingView;
