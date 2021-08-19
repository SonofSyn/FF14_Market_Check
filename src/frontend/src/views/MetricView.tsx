import React from "react";
import StandardTable from "../components/tables/StandardTable";
import { TableHeader, ItemMetrics } from "../../frontendInterface";
import { Container } from "react-bootstrap";
interface Props {
    columns: TableHeader[];
    data: ItemMetrics[];
}
interface State {}
class MetricView extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = MetricView.createState(props);
        console.log(this.props.data);
    }

    static createState(props: Props): State {
        return {};
    }

    // static getDerivedStateFromProps(props: Props, state: State): (State | null) {
    //     if (props.dummy !== state.dummy) return null
    //     return MetricView.createState(props, state.showPopup)
    // }

    render() {
        return (
            <>
                <Container className="info">
                    <h1>Metric</h1>
                </Container>
                <StandardTable
                    className="metric-view"
                    columns={this.props.columns}
                    data={this.props.data}
                ></StandardTable>
            </>
        );
    }
}

export default MetricView;
