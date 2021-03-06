import React from "react";
import StandardTable from "../components/tables/StandardTable";
import { TableHeader, Retainer } from "../../frontendInterface";
import { Col, Container, Row } from "react-bootstrap";
import placeHolder from "./../../../../assets/placeholder.png";
interface Props {
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
        let back: JSX.Element[] = [<Container style={{ marginBottom: "5%" }}></Container>];
        this.props.data.forEach((e, eIx) => {
            let image = <img src={placeHolder} style={{ width: "50px", height: "50px" }} />;
            try {
                image = (
                    <img
                        src={require(`./../../../../assets/images/${e.name}.png`).default}
                        style={{ width: "50px", height: "50px" }}
                    />
                );
            } catch (e) {
                console.log("image.error");
            }
            back.push(
                <>
                    <Row>
                        <Col>
                            <Row>
                                <StandardTable
                                    className="retainer-view"
                                    key={"order" + eIx}
                                    columns={this.props.ordercolumns}
                                    data={e.undercuts}
                                    header={
                                        <Row className="table-info">
                                            <Col>{image}</Col>
                                            <Col>{e.name}</Col>
                                            <Col>{e.crafter}</Col>
                                            <Col>{"ItemLevel: " + e.itemLevel}</Col>
                                            <Col>{"Gesamt: " + e.retainerOrder.total}</Col>
                                            <Col>{"Menge: " + e.retainerOrder.quantity}</Col>
                                            <Col>{"Einzelpreis: " + e.retainerOrder.pricePerUnit}</Col>
                                            <Col>{"Qulit??t: " + e.retainerOrder.hq ? "HQ" : "NQ"}</Col>
                                        </Row>
                                    }
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
        return <>{this.buildTable()}</>;
    }
}

export default RetainerView;
