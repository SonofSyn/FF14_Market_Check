import React from "react";
import { ProgressBar } from "react-bootstrap";
interface Props {}
interface State {
    progress: number;
}
class LoadingBar extends React.Component<Props, State> {
    private intervalHandle: NodeJS.Timer;
    constructor(props: Props) {
        super(props);
        this.state = LoadingBar.createState(props);
    }

    static createState(props: Props): State {
        return { progress: 0 };
    }

    componentDidMount() {
        this.loadAnimation();
    }

    componentWillUnmount() {
        clearInterval(this.intervalHandle);
    }

    private loadAnimation() {
        this.intervalHandle = setInterval(() => {
            if (this.state.progress > 104) {
                this.setState({ progress: 0 });
            } else this.setState({ progress: this.state.progress + 4 });
        }, 150);
    }

    render() {
        return <ProgressBar animated now={this.state.progress} />;
    }
}

export default LoadingBar;
