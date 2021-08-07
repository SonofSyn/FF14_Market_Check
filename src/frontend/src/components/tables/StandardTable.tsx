import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import TableCaption from "./TableCaption";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Container } from "react-bootstrap";

interface Props {
    // columns:object;
    // data:object;
}
interface State { }

class StandardTable extends React.Component<Props, State> {
    private columns = [
        { dataField: "id", text: "Id" },
        { dataField: "name", text: "Name", filter: textFilter() },
        { dataField: "animal", text: "Animal", filter: textFilter() },
    ];

    private data = [
        { id: 1, name: "George", animal: "Monkey" },
        { id: 2, name: "Jeffrey", animal: "Giraffe" },
        { id: 3, name: "Alice", animal: "Giraffe" },
        { id: 4, name: "Alice", animal: "Tiger" },
        { id: 5, name: "George", animal: "Monkey" },
        { id: 6, name: "Jeffrey", animal: "Giraffe" },
        { id: 7, name: "Alice", animal: "Giraffe" },
        { id: 8, name: "Alice", animal: "Tiger" },
        { id: 9, name: "George", animal: "Monkey" },
        { id: 10, name: "Jeffrey", animal: "Giraffe" },
        { id: 11, name: "Alice", animal: "Giraffe" },
        { id: 12, name: "Alice", animal: "Tiger" },
    ];

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


                <TableCaption caption="FF14"></TableCaption>
                <BootstrapTable
                    headerClasses="tableHeader"
                    bodyClasses="tableBody"
                    rowClasses="tableRow"
                    keyField="id"
                    data={this.data}
                    columns={this.columns}
                    bordered={false}
                    filter={filterFactory()}
                    pagination={paginationFactory({})}
                />
                <Container className="filler"></Container>
            </>
        );
    }
}

export default StandardTable;
