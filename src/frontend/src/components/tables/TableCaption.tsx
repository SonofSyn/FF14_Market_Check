import React from "react";
interface Props {
    caption: string;
}
class TableCaption extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return <h3 className="caption">{this.props.caption}</h3>;
    }
}

export default TableCaption;
