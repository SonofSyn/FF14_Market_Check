import React from "react";
import { Col, Container, Row, Pagination } from "react-bootstrap";
import { TableHeader, ListingData } from "../../frontendInterface";
import StandardTable from "../components/tables/StandardTable";
interface Props {
    ordercolumns: TableHeader[];
    data: ListingData[];
    priceFilter: number;
}
interface State {
    currentPage: number;
    priceFilter: number;
}
class ListingView extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = ListingView.createState(props);
    }

    static createState(props: Props): State {
        return { currentPage: 0, priceFilter: props.priceFilter };
    }

    static getDerivedStateFromProps(props: Props, state: State): State | null {
        if (props.priceFilter === state.priceFilter) return null;
        return ListingView.createState(props);
    }

    buildTable() {
        let back: JSX.Element[] = [];
        this.props.data.forEach((e, eIx) => {
            if (e.orders.length !== 0) {
                if (e.orders[0].pricePerUnit >= this.state.priceFilter) {
                    back.push(
                        <>
                            <Row key={e + "" + eIx}>
                                <StandardTable
                                    className="listing-view"
                                    key={"order" + eIx}
                                    columns={this.props.ordercolumns}
                                    data={e.orders}
                                    header={
                                        <Row className="table-info" key={e + "" + eIx}>
                                            <Col key={e + "" + eIx}>{e.imgPath}</Col>
                                            <Col key={e + "" + eIx}>{e.crafter}</Col>
                                            <Col key={e + "0" + eIx}>{e.name}</Col>
                                            {/* <Col key={e + "" + eIx}>{e.id}</Col>
                                                    <Col key={e + "" + eIx}>{e.gameID}</Col> */}
                                            <Col key={e + "1" + eIx}>{e.date}</Col>
                                        </Row>
                                    }
                                ></StandardTable>
                            </Row>
                        </>
                    );
                }
            }
        });
        return back;
    }
    private pageSize = 25;

    buildPages() {
        let items = [];
        items.push(
            <>
                <Pagination.First onClick={() => this.setState({ currentPage: 1 })} />
                <Pagination.Prev onClick={() => this.setState({ currentPage: this.state.currentPage - 1 })} />
            </>
        );
        for (let number = 1; number <= 5; number++) {
            items.push(
                <Pagination.Item
                    key={number}
                    active={number === this.state.currentPage}
                    onClick={() => this.setState({ currentPage: number })}
                >
                    {number}
                </Pagination.Item>
            );
        }
        items.push(
            <>
                <Pagination.Next onClick={() => this.setState({ currentPage: this.state.currentPage + 1 })} />
                <Pagination.Last onClick={() => this.setState({ currentPage: 1 })} />
            </>
        );
        return items;
    }

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
                {this.buildPages()}
                {/* <Pagination
                    pageSize={this.pageSize}
                    total={this.buildTable().length}
                    onChange={(e) => this.setState({ currentPage: e })}
                    className={"page"}
                /> */}
            </>
        );
    }
}

export default ListingView;
