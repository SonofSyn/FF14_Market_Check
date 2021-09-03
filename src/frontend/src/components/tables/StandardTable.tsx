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
    header?: JSX.Element;
}

class StandardTable extends React.Component<Props> {
    determinData() {
        return this.props.data.map((e, IX) => {
            if (e.type === "listing") {
                return { id: IX, gameid: e.gameID, name: e.name, update: e.date };
            }
            if (e.type === "metrics") {
                return {
                    id: IX,
                    itemImg: e.image,
                    itemLevel: e.itemLevel,
                    name: e.name,
                    crafter: e.crafter,
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
        });
    }

    render() {
        return (
            <>
                <Container className={"tableContainer " + this.props.className}>
                    {this.props.header ? this.props.header : <></>}
                    <BootstrapTable
                        parentClassName="table"
                        headerClasses="tableHeader"
                        bodyClasses="tableBody"
                        rowClasses="tableRow"
                        keyField="id"
                        data={this.determinData()}
                        columns={this.props.columns}
                        filter={filterFactory()}
                        pagination={paginationFactory({
                            showTotal: true,
                            sizePerPage: 25,
                            sizePerPageList: [
                                {
                                    text: "5",
                                    value: 5,
                                },
                                {
                                    text: "10",
                                    value: 10,
                                },
                                {
                                    text: "25",
                                    value: 25,
                                },
                                {
                                    text: "50",
                                    value: 50,
                                },
                                {
                                    text: "100",
                                    value: 100,
                                },
                            ],
                            sizePerPageRenderer: ({ options, onSizePerPageChange }) => (
                                <div className="btn-group" role="group">
                                    {options.map((option, ix) => {
                                        return (
                                            <button
                                                key={(option.text, ix)}
                                                type="button"
                                                onClick={(ev: React.MouseEvent<HTMLButtonElement>) => {
                                                    onSizePerPageChange(
                                                        Number.parseInt(option.text),
                                                        Number.parseInt(ev.currentTarget.innerText)
                                                    );
                                                }}
                                            >
                                                {option.text}
                                            </button>
                                        );
                                    })}
                                </div>
                            ),
                        })}
                    />
                </Container>

                <Container className="filler"></Container>
            </>
        );
    }
}

export default StandardTable;
