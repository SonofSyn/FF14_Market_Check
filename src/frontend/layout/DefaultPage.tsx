import React from "react";
interface Props {}
interface State {}
class DefaultPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = DefaultPage.createState(props);
    }

    static createState(props: Props): State {
        return {};
    }

    // static getDerivedStateFromProps(props: Props, state: State): (State | null) {
    //     if (props.dummy !== state.dummy) return null
    //     return DefaultPage.createState(props, state.showPopup)
    // }

    render() {
        return (
            <>
                <h1>FF14</h1>
            </>
        );
    }
}

export default DefaultPage;
