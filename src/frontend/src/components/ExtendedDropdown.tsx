import React from "react";
import { Dropdown, Form } from "react-bootstrap";

interface Props {
    menuItems: string[];
    preSet: string;
    onChange: (name: string) => void;
}

interface State {
    chosenValue: string;
    menuItems: string[];
}
/**
 * A Dropdown which uses a Inputfield and can also filter the MenuItems
 *
 * @export
 * @class ExtendedDropdown
 * @extends {React.Component<Props, State>}
 */
export default class ExtendedDropdown extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = ExtendedDropdown.createState(props);
    }

    static createState(props: Props): State {
        return {
            chosenValue: props.preSet,
            menuItems: props.menuItems,
        };
    }
    static getDerivedStateFromProps(props: Props, state: State): State {
        if (props.menuItems.join() === state.menuItems.join()) return null;
        return ExtendedDropdown.createState(props);
    }

    componentDidMount() {
        ExtendedDropdown.createState(this.props);
    }
    componentDidUpdate() {
        ExtendedDropdown.createState(this.props);
    }

    /**
     * Handles Change in Inputfield
     *
     * @memberof ExtendedDropdown
     */
    handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
        let value = ev.currentTarget.value;
        this.setState(
            {
                chosenValue: value,
            },
            () => {
                if (this.props.onChange !== undefined) this.props.onChange(value);
            }
        );
    }

    /**
     * Set Value of Chosen Menu Item
     *
     * @param {string} newValue
     * @memberof ExtendedDropdown
     */
    setValue(newValue: string) {
        this.setState(
            {
                chosenValue: newValue,
            },
            () => {
                if (this.props.onChange !== undefined) this.props.onChange(newValue);
            }
        );
    }

    /**
     * Builds Dropdown for all MenuItems
     *
     * @returns
     * @memberof ExtendedDropdown
     */
    buildItems() {
        // Filters Menutitems depending on current input
        let menu = this.state.menuItems.filter(
            (item) =>
                item.indexOf(this.state.chosenValue) !== -1 ||
                item.toLowerCase().indexOf(this.state.chosenValue.toLocaleLowerCase()) !== -1
        );
        let back: JSX.Element[] = menu.map((item, ix) => (
            <Dropdown.Item key={"MenuItem" + item + ix} onClick={this.setValue.bind(this, item)}>
                {item}
            </Dropdown.Item>
        ));
        return back;
    }

    render() {
        return (
            <Dropdown className="ExtendedDropdown">
                <Dropdown.Toggle>
                    <Form.Control
                        size="lg"
                        className="ExtendedDropdownInput"
                        onChange={this.handleChange.bind(this)}
                        value={this.state.chosenValue}
                    ></Form.Control>
                </Dropdown.Toggle>
                <Dropdown.Menu className="ExtendedDropdownMenu">{this.buildItems()}</Dropdown.Menu>
            </Dropdown>
        );
    }
}
