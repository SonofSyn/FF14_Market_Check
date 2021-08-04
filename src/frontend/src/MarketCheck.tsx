import * as React from "react";
import * as ReactDOM from "react-dom";
import DefaultPage from "./layout/DefaultPage";
import "./scss/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
interface Props {}
interface State {
    id: string;
}

/**
 * Main React component which handles startup
 *
 * @export
 * @class MainAppWindow
 * @extends {React.Component<Props, State>}
 */
export class MarketCheck extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = MarketCheck.createState(props);
    }
    static createState(props: Props) {
        return { id: " " };
    }

    // componentDidMount() {
    //     window.server.onExecute(async (ev) => {
    //         if (ev.type == "datadidupdate") {
    //             this.setState({ id: ev.id });
    //             return {} as ClientAnswerHelloClientEvent;
    //         }
    //     });
    //     window.server.sendToServer({ type: "startup" });
    // }

    render() {
        return (
            <>
                <DefaultPage id={this.state.id} />
            </>
        );
    }
}

ReactDOM.render(<MarketCheck />, document.getElementById("root"));
