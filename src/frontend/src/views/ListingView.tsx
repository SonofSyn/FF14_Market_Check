import React from "react";
import { Col, Container, Row, Pagination } from "react-bootstrap";
import { TableHeader, ListingData } from "../../frontendInterface";
import StandardTable from "../components/tables/StandardTable";
import placeHolder from "./../../../../assets/placeholder.png";
interface Props {
    ordercolumns: TableHeader[];
    data: ListingData[];
    priceFilter: number;
    currentSearch: string;
    crafterFilter: string;
}
interface State {
    currentPage: number;
    priceFilter: number;
    currentSearch: string;
    crafterFilter: string;
}
class ListingView extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = ListingView.createState(props);
    }

    static createState(props: Props): State {
        return {
            currentPage: 0,
            priceFilter: props.priceFilter,
            currentSearch: props.currentSearch,
            crafterFilter: props.crafterFilter,
        };
    }

    static getDerivedStateFromProps(props: Props, state: State): State | null {
        if (
            props.priceFilter === state.priceFilter &&
            props.currentSearch === state.currentSearch &&
            props.crafterFilter === state.crafterFilter
        )
            return null;
        return ListingView.createState(props);
    }

    buildTable() {
        let back: JSX.Element[] = [];
        this.props.data.forEach((e, eIx) => {
            if (e.orders.length !== 0) {
                if (this.state.crafterFilter === "" || this.state.crafterFilter === e.crafterName) {
                    if (
                        this.state.currentSearch === "" ||
                        (this.state.currentSearch !== "" &&
                            e.name.toLowerCase().indexOf(this.state.currentSearch.toLowerCase()) > 0)
                    ) {
                        if (e.orders[0].pricePerUnit >= this.state.priceFilter) {
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
                                    <Row key={e + "" + eIx}>
                                        <StandardTable
                                            className="listing-view"
                                            key={"order" + eIx}
                                            columns={this.props.ordercolumns}
                                            data={e.orders}
                                            header={
                                                <Row className="table-info" key={e + "" + eIx}>
                                                    <Col>{image}</Col>
                                                    <Col key={e + "" + eIx}>{"ItemLevel: " + e.itemLevel}</Col>
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
                <Container style={{ height: "5%" }}></Container>
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
