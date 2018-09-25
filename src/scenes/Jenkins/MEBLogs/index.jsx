import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink
} from "reactstrap";
import BackgroundImage from "../../../components/BackgroundImage";
import LoadingSpinner from "../../../components/LoadingSpinner";
import AppBackDrop from "../../../components/AppBackDrop";
import "./index.css";

class MEBLogs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <BackgroundImage />
        <Container>
          <AppBackDrop />
        </Container>
      </div>
    );
  }
}

export default MEBLogs;
