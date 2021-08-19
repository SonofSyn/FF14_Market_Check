import React from "react";
import StandardTable from "../components/tables/StandardTable";
import { TableHeader, Retainer } from "../../frontendInterface";
import { Col, Container, Row } from "react-bootstrap";
interface Props {
    columns: TableHeader[];
    ordercolumns: TableHeader[];
    data: Retainer[];
}
interface State {}
class RetainerView extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = RetainerView.createState(props);
    }

    static createState(props: Props): State {
        return {};
    }

    // static getDerivedStateFromProps(props: Props, state: State): (State | null) {
    //     if (props.dummy !== state.dummy) return null
    //     return RetainerView.createState(props, state.showPopup)
    // }

    buildTable() {
        let back: JSX.Element[] = [];
        this.props.data.forEach((e, eIx) => {
            back.push(
                <>
                    <Row>
                        <Col>
                            <Row className="table-info">
                                <Col>{e.name}</Col>
                                <Col>{e.retainerOrder.lastReviewTime}</Col>
                                <Col>{e.retainerOrder.pricePerUnit}</Col>
                                <Col>{e.retainerOrder.total}</Col>
                                <Col>{e.retainerOrder.quantity}</Col>
                                <Col>{e.retainerOrder.hq}</Col>
                            </Row>
                            <Row>
                                <StandardTable
                                    className="retainer-view"
                                    key={"order" + eIx}
                                    columns={this.props.ordercolumns}
                                    data={e.undercuts}
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
                    <h1>Retainer</h1>
                </Container>
                {this.buildTable()}
            </>
        );
    }
}

export default RetainerView;
