import React from "react";
import { Container, Form } from "react-bootstrap";
interface Props {
    currentSearch: string;
    setCurrentSearch: (search: string) => void;
}
interface State {
    currentSearch: string;
}
class Searchbar extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = Searchbar.createState(props);
    }

    static createState(props: Props): State {
        return { currentSearch: props.currentSearch };
    }

    static getDerivedStateFromProps(props: Props, state: State): State | null {
        if (props.currentSearch === state.currentSearch) return null;
        return Searchbar.createState(props);
    }

    private onSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.props.setCurrentSearch(e.currentTarget.value);
    };

    render() {
        return (
            <>
                <Container className={"searchbar"}>
                    <Form.Group>
                        <Container className={"searchdiv"}>
                            <Form.Label>Suche: </Form.Label>
                        </Container>
                        <Container>
                            <Form.Control value={this.state.currentSearch} onChange={this.onSearch.bind(this)} />
                        </Container>
                    </Form.Group>
                </Container>
            </>
        );
    }
}

export default Searchbar;
