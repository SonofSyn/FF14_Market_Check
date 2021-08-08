import React from "react";
import StandardTable from "../components/tables/StandardTable";
import { TableHeader, Retainer } from "../../frontendInterface";
interface Props {
    columns: TableHeader[];
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

    render() {
        return (
            <>
                <h1>Retainer</h1>
                <StandardTable columns={this.props.columns} data={this.props.data}></StandardTable>
            </>
        );
    }
}

export default RetainerView;
