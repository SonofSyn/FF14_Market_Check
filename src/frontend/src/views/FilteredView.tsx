import React from "react";
import { TableHeader, ItemMetrics } from "../../frontendInterface";
import StandardTable from "../components/tables/StandardTable";
interface Props {
    columns: TableHeader[];
    data: ItemMetrics[];
}
interface State {}
class FilteredView extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = FilteredView.createState(props);
    }

    static createState(props: Props): State {
        return {};
    }

    // static getDerivedStateFromProps(props: Props, state: State): (State | null) {
    //     if (props.dummy !== state.dummy) return null
    //     return FilteredView.createState(props, state.showPopup)
    // }

    render() {
        return (
            <>
                <h1>Filtered</h1>
                <StandardTable columns={this.props.columns} data={this.props.data}></StandardTable>
            </>
        );
    }
}

export default FilteredView;
