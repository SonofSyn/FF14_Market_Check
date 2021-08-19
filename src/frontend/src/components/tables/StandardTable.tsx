import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Container } from "react-bootstrap";
import { TableHeader, TableData, ItemMetrics } from "../../../frontendInterface";
interface Props {
    columns: TableHeader[];
    data: TableData;
    className: string;
}
interface State {}
class StandardTable extends React.Component<Props, State> {
    // private columns = [
    //     { dataField: "id", text: "Id" },
    //     { dataField: "name", text: "Name", filter: textFilter() },
    //     { dataField: "animal", text: "Animal", filter: textFilter() },
    // ];

    // private data = [
    //     { id: 1, name: "George", animal: "Monkey" },
    //     { id: 2, name: "Jeffrey", animal: "Giraffe" },
    //     { id: 3, name: "Alice", animal: "Giraffe" },
    //     { id: 4, name: "Alice", animal: "Tiger" },
    //     { id: 5, name: "George", animal: "Monkey" },
    //     { id: 6, name: "Jeffrey", animal: "Giraffe" },
    //     { id: 7, name: "Alice", animal: "Giraffe" },
    //     { id: 8, name: "Alice", animal: "Tiger" },
    //     { id: 9, name: "George", animal: "Monkey" },
    //     { id: 10, name: "Jeffrey", animal: "Giraffe" },
    //     { id: 11, name: "Alice", animal: "Giraffe" },
    //     { id: 12, name: "Alice", animal: "Tiger" },
    // ];

    constructor(props: Props) {
        super(props);
        this.state = StandardTable.createState(props);
    }

    static createState(props: Props): State {
        return {};
    }

    // static getDerivedStateFromProps(props: Props, state: State): (State | null) {
    //     if (props.dummy !== state.dummy) return null
    //     return StandardTable.createState(props, state.showPopup)
    // }

    render() {
        return (
            <>
                <Container className={"tableContainer " + this.props.className}>
                    <BootstrapTable
                        parentClassName="table"
                        headerClasses="tableHeader"
                        bodyClasses="tableBody"
                        rowClasses="tableRow"
                        keyField="id"
                        data={this.props.data.map((e, IX) => {
                            if (e.type === "listing") {
                                return { id: IX, gameid: e.gameID, name: e.name, update: e.date };
                            }
                            if (e.type === "metrics") {
                                return {
                                    id: IX,
                                    gameid: e.gameID,
                                    name: e.name,
                                    update: e.date,
                                    minpricenq: e.minPriceNQ,
                                    maxpricenq: e.maxPriceNQ,
                                    minpricehq: e.minPriceHQ,
                                    maxpricehq: e.maxPriceHQ,
                                    amountNQ: e.amountNQListings,
                                    amountHQ: e.amountHQListing,
                                };
                            }
                            if (e.type === "response") {
                                return {
                                    id: IX,
                                    gameid: e.gameID,
                                    name: e.name,
                                    update: e.date,
                                    minpricenq: e.minPriceNQ,
                                    maxpricenq: e.maxPriceNQ,
                                    minpricehq: e.minPriceHQ,
                                    maxpricehq: e.maxPriceHQ,
                                    amountNQ: e.amountNQListings,
                                    amountHQ: e.amountHQListing,
                                };
                            }
                            if (e.type === "order") {
                                return {
                                    id: IX,
                                    lastupdate: e.lastReviewTime,
                                    priceperunit: e.pricePerUnit,
                                    quantity: e.quantity,
                                    total: e.total,
                                    hq: e.hq,
                                    retainername: e.retainerName,
                                };
                            }
                            if (e.type === "retainer") {
                                return { id: IX, name: e.name, type: e.type };
                            }
                        })}
                        columns={this.props.columns}
                        filter={filterFactory()}
                        pagination={paginationFactory({})}
                    />
                </Container>

                <Container className="filler"></Container>
            </>
        );
    }
}

export default StandardTable;
