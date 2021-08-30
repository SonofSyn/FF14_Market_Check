import React from "react";
import { Button, Form, Nav, Navbar } from "react-bootstrap";
import { Links } from "../../frontendInterface";
interface Props {
    setView: Links;
}

/**
 * React component to handle buttons to switch displayed content
 *
 * @class Navbar
 * @extends {React.Component<Props, State>}
 */
export default class Navigation extends React.Component<Props> {
    render() {
        return (
            <Navbar expand="md">
                <Navbar.Brand className="logo" id="CP-Label" onClick={() => this.props.setView["MainView"]()}>
                    Navigation
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Form inline>
                            <Button id="nav_btn" onClick={() => this.props.setView["RetainerView"]()}>
                                Gehilfen
                            </Button>
                            <Button id="nav_btn" onClick={() => this.props.setView["MetricView"]()}>
                                Gegenstände
                            </Button>
                            <Button id="nav_btn" onClick={() => this.props.setView["ListingView"]()}>
                                Markt
                            </Button>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
