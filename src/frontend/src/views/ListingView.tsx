import React from "react";
import { TableHeader, ListingData } from "../../frontendInterface";

import StandardTable from "../components/tables/StandardTable";
interface Props {
    columns: TableHeader[];
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

    render() {
        return (
            <>
                <h1>Listing</h1>
                <StandardTable columns={this.props.columns} data={this.props.data}></StandardTable>
            </>
        );
    }
}

export default ListingView;
