import React from "react";
import StandardTable from "../components/tables/StandardTable";
import { TableHeader, ItemMetrics } from "../../frontendInterface";
import placeHolder from "./../../../../assets/placeholder.png";
import { Container } from "react-bootstrap";
interface Props {
    columns: TableHeader[];
    data: ItemMetrics[];
    priceFilter: number;
    crafterFilter: string;
}
interface State {
    priceFilter: number;
    crafterFilter: string;
}
class MetricView extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = MetricView.createState(props);
    }

    static createState(props: Props): State {
        return { priceFilter: props.priceFilter, crafterFilter: props.crafterFilter };
    }
    static getDerivedStateFromProps(props: Props, state: State): State | null {
        if (props.priceFilter === state.priceFilter && props.crafterFilter === state.crafterFilter) return null;
        return MetricView.createState(props);
    }

    buildData(): ItemMetrics[] {
        let back: ItemMetrics[] = [];
        this.props.data.forEach((e, eIx) => {
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
            if (this.state.crafterFilter === "" || this.state.crafterFilter === e.crafterName) {
                if (e.minPriceHQ >= this.state.priceFilter) {
                    let item: ItemMetrics = {
                        id: eIx.toString(),
                        type: "metrics",
                        image: image,
                        itemLevel: e.itemLevel,
                        gameID: e.gameID,
                        date: e.date,
                        name: e.name,
                        crafter: e.crafter,
                        crafterName: e.crafterName,
                        minPriceNQ: e.minPriceNQ,
                        maxPriceNQ: e.maxPriceNQ,
                        minPriceHQ: e.minPriceHQ,
                        maxPriceHQ: e.maxPriceHQ,
                        amountNQListings: e.amountNQListings,
                        amountHQListing: e.amountHQListing,
                    };
                    back.push(item);
                }
            }
        });
        return back;
    }

    render() {
        return (
            <>
                <Container style={{ height: "5%" }}></Container>
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
