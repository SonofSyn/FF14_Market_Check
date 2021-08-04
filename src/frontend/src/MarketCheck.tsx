import * as React from "react";
import * as ReactDOM from "react-dom";
import DefaultPage from "../layout/DefaultPage";
import "../scss/main.scss";

interface Props {}
interface State {}

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
        return {};
    }

    render() {
        return (
            <>
                <DefaultPage />
            </>
        );
    }
}

ReactDOM.render(<MarketCheck />, document.getElementById("root"));
