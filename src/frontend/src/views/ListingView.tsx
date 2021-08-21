import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TableHeader, ListingData } from "../../frontendInterface";
import Pagination from "rc-pagination";
import StandardTable from "../components/tables/StandardTable";
interface Props {
    columns: TableHeader[];
    ordercolumns: TableHeader[];
    data: ListingData[];
}
interface State {
    currentPage: number;
}
class ListingView extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = ListingView.createState(props);
    }

    static createState(props: Props): State {
        return { currentPage: 0 };
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
                    <Row key={e + "" + eIx}>
                        <Col key={e + "" + eIx}>
                            <Row className="table-info" key={e + "" + eIx}>
                                <Col key={e + "" + eIx}>{e.id}</Col>
                                <Col key={e + "" + eIx}>{e.gameID}</Col>
                                <Col key={e + "" + eIx}>{e.name}</Col>
                                <Col key={e + "" + eIx}>{e.date}</Col>
                            </Row>
                            <Row key={e + "" + eIx}>
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
                    className={"page"}
                />
            </>
        );
    }
}

export default ListingView;
