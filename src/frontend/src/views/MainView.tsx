import React from "react";
interface Props {}
interface State {}
class MainView extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = MainView.createState(props);
    }

    static createState(props: Props): State {
        return {};
    }

    // static getDerivedStateFromProps(props: Props, state: State): (State | null) {
    //     if (props.dummy !== state.dummy) return null
    //     return MainView.createState(props, state.showPopup)
    // }

    render() {
        return (
            <>
                <h1>Main</h1>
            </>
        );
    }
}

export default MainView;
