import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Row,
  Col,
  CardBody,
  Form,
  Card,
  Label,
  Input,
  FormGroup,
  Button
} from "reactstrap";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../services/Auth/actions";
import BackgroundImage from "../../components/BackgroundImage";
import LoadingSpinner from "../../components/LoadingSpinner";
import "./index.css";

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

class Home extends Component {
  static propTypes = {
    actions: PropTypes.shape({
      logInAction: PropTypes.func.isRequired
    }).isRequired,
    auth: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      user: PropTypes.object.isRequired,
      error: PropTypes.string
    }).isRequired,
    fluid: PropTypes.bool.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {}
    };
    this.fluid = true;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    redirectToReferrer: false
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.user.message) {
      this.props.history.push("/mebbackup");
    }
  }
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };
  handleChange(e) {
    const fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const loginform = this.state.fields;
    this.props.actions.logInAction(loginform);
    if (this.validateForm()) {
      this.setState({ fields: "" });
    }
  }

  validateForm() {
    const fields = this.state.fields;
    const errors = {};
    let formIsValid = true;

    if (!fields.email) {
      formIsValid = false;
      errors.email = "*Please enter email.";
    }
    if (!fields.password) {
      formIsValid = false;
      errors.password = "*Please enter password.";
    }
    this.setState({
      errors
    });
    return formIsValid;
  }
  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/mebbackup" }
    };
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }
    if (this.props.auth.loading) {
      return <LoadingSpinner />;
    }
    return (
      <div>
        <BackgroundImage />
        <Container fluid={this.props.fluid}>
          <Row>
            <Col />
            <Col>
              <Card>
                <CardBody>
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                      <Label for="email">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                        placeholder="Enter Email"
                      />
                      <div className="errorMsg">{this.state.errors.email}</div>
                    </FormGroup>
                    <FormGroup>
                      <Label for="password">Password</Label>
                      <Input
                        type="password"
                        name="password"
                        id="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        placeholder="Enter password"
                        autoComplete="off"
                      />
                      <div className="errorMsg">
                        {this.state.errors.password}
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Button type="submit">Submit</Button>
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
