import React, { ChangeEventHandler } from "react";
import { Container, Form, Dropdown } from "react-bootstrap";
interface Props {
    setAmountFilter(e: React.ChangeEvent<HTMLInputElement>): void;
    setCrafterFilter(e: string): void;
    priceFilter: number;
    crafterFilter: string;
}

interface State {
    priceFilter: number;
    crafterFilter: string;
}

class Filterbar extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = Filterbar.createState(props);
    }

    static createState(props: Props): State {
        return { priceFilter: props.priceFilter, crafterFilter: props.crafterFilter };
    }

    static getDerivedStateFromProps(props: Props, state: State): State | null {
        if (props.priceFilter === state.priceFilter && props.crafterFilter === state.crafterFilter) return null;
        return Filterbar.createState(props);
    }

    setCrafter(crafter: string) {
        switch (crafter) {
            case "alchemist": {
                return "Alchemist";
            }
            case "armorer": {
                return "Plattner";
            }
            case "blacksmith": {
                return "Grobschmied";
            }
            case "carpenter": {
                return "Zimmerer";
            }
            case "culinarian": {
                return "Gourmet";
            }
            case "goldsmith": {
                return "Goldschmied";
            }
            case "leatherworker": {
                return "Gerber";
            }
            case "weaver": {
                return "Weber";
            }
            default: {
                return "Nichts";
            }
        }
    }

    render() {
        return (
            <>
                <Container className={"searchbar"}>
                    <Form.Group>
                        <Container className={"searchdiv"}></Container>
                        <Container>
                            <Form.Label>Preis Minimum HQ</Form.Label>
                            <Form.Control
                                type="number"
                                value={this.state.priceFilter}
                                onChange={this.props.setAmountFilter}
                            />
                        </Container>
                        <Container>
                            <Form.Label>Hersteller</Form.Label>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    {this.setCrafter(this.state.crafterFilter)}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onSelect={this.props.setCrafterFilter.bind(this, "alchemist")}>
                                        Alchemist
                                    </Dropdown.Item>
                                    <Dropdown.Item onSelect={this.props.setCrafterFilter.bind(this, "armorer")}>
                                        Plattner
                                    </Dropdown.Item>
                                    <Dropdown.Item onSelect={this.props.setCrafterFilter.bind(this, "blacksmith")}>
                                        Grobschmied
                                    </Dropdown.Item>
                                    <Dropdown.Item onSelect={this.props.setCrafterFilter.bind(this, "carpenter")}>
                                        Zimmerer
                                    </Dropdown.Item>
                                    <Dropdown.Item onSelect={this.props.setCrafterFilter.bind(this, "culinarian")}>
                                        Gourmet
                                    </Dropdown.Item>
                                    <Dropdown.Item onSelect={this.props.setCrafterFilter.bind(this, "goldsmith")}>
                                        Goldschmied
                                    </Dropdown.Item>
                                    <Dropdown.Item onSelect={this.props.setCrafterFilter.bind(this, "leatherworker")}>
                                        Gerber
                                    </Dropdown.Item>
                                    <Dropdown.Item onSelect={this.props.setCrafterFilter.bind(this, "weaver")}>
                                        Weber
                                    </Dropdown.Item>
                                    <Dropdown.Item onSelect={this.props.setCrafterFilter.bind(this, "")}>
                                        Nichts
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Container>
                    </Form.Group>
                </Container>
            </>
        );
    }
}

export default Filterbar;
