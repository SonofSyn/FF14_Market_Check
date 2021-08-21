import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TableHeader, ItemMetrics, ResponseData } from "../../frontendInterface";
import StandardTable from "../components/tables/StandardTable";
import Pagination from "rc-pagination";
interface Props {
    columns: TableHeader[];
    ordercolumns: TableHeader[];
    data: ResponseData[];
}
interface State {
    currentPage: number;
}
class FilteredView extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = FilteredView.createState(props);
    }

    static createState(props: Props): State {
        return { currentPage: 0 };
    }

    // static getDerivedStateFromProps(props: Props, state: State): (State | null) {
    //     if (props.dummy !== state.dummy) return null
    //     return FilteredView.createState(props, state.showPopup)
    // }

    buildTable() {
        let back: JSX.Element[] = [];
        if (this.props.data.length !== 0) {
            this.props.data.forEach((e, eIx) => {
                back.push(
                    <Row key={e + "" + eIx}>
                        <Col key={e + "" + eIx}>
                            <Row className="table-info" key={"c" + eIx}>
                                <Col key={e + "" + eIx}>{e.id}</Col>
                                <Col key={e + "" + eIx}>{e.gameID}</Col>
                                <Col key={e + "" + eIx}>{e.name}</Col>
                                <Col key={e + "" + eIx}>{e.minPriceHQ}</Col>
                                <Col key={e + "" + eIx}>{e.maxPriceHQ}</Col>
                                <Col key={e + "" + eIx}>{e.minPriceNQ}</Col>
                                <Col key={e + "" + eIx}>{e.maxPriceNQ}</Col>
                                <Col key={e + "" + eIx}>{e.amountNQListings}</Col>
                                <Col key={e + "" + eIx}>{e.amountHQListing}</Col>
                                <Col key={e + "" + eIx}>{e.date}</Col>
                            </Row>
                            <Row key={e + "" + +eIx}>
                                <StandardTable
                                    className="listing-view"
                                    key={"order" + eIx}
                                    columns={this.props.ordercolumns}
                                    data={e.orders}
                                ></StandardTable>
                            </Row>
                        </Col>
                    </Row>
                );
            });
        }

        return back;
    }
    private pageSize = 25;

    render() {
        return (
            <>
                {this.buildTable()
                    .slice(this.state.currentPage * this.pageSize, (this.state.currentPage + 1) * this.pageSize)
                    .map((itemm, ix) => (
                        <div key={ix} className="post">
                            {itemm}
                        </div>
                    ))}
                <Pagination
                    pageSize={this.pageSize}
                    total={this.buildTable().length}
                    onChange={(e) => this.setState({ currentPage: e })}
                />
            </>
        );
    }
}

export default FilteredView;
