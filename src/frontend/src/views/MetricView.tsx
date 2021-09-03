import React from "react";
import StandardTable from "../components/tables/StandardTable";
import { TableHeader, ItemMetrics } from "../../frontendInterface";
import placeHolder from "./../../../../assets/placeholder.png";
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
    }

    static createState(props: Props): State {
        return {};
    }
    buildData(): ItemMetrics[] {
        return this.props.data.map((e, eIx) => {
            let item: ItemMetrics = {
                id: eIx.toString(),
                type: "metrics",
                image: (
                    <img
                        src={require(`./../../../../assets/images/${e.name}.png`).default}
                        style={{ width: "50px", height: "50px" }}
                    />
                    // <img src={placeHolder} style={{ width: "50px", height: "50px" }} />
                ),
                itemLevel: e.itemLevel,
                gameID: e.gameID,
                date: e.date,
                name: e.name,
                crafter: e.crafter,
                minPriceNQ: e.minPriceNQ,
                maxPriceNQ: e.maxPriceNQ,
                minPriceHQ: e.minPriceHQ,
                maxPriceHQ: e.maxPriceHQ,
                amountNQListings: e.amountNQListings,
                amountHQListing: e.amountHQListing,
            };
            return item;
        });
    }

    render() {
        return (
            <>
                <Container className="info">
                    <h1>Metric</h1>
                </Container>
                <StandardTable
                    className="metric-view"
                    columns={this.props.columns}
                    data={this.buildData()}
                ></StandardTable>
            </>
        );
    }
}

export default MetricView;
