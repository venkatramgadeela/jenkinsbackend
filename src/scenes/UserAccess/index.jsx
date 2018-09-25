import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import BackgroundImage from "../../components/BackgroundImage";
import AppBackDrop from "../../components/AppBackDrop";
import * as actionCreators from "../../services/Accessusers/actions";
import LoadingSpinner from "../../components/LoadingSpinner";
import "./index.css";

class UserAccess extends Component {
  static propTypes = {
    actions: PropTypes.shape({
      accesuserJob: PropTypes.func.isRequired
    }).isRequired,
    jobs: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      entities: PropTypes.object.isRequired,
      error: PropTypes.bool
    }).isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.validateForm()) {
      const servername = this.state.fields;
      this.props.actions.accesuserJob(servername);
      this.setState({
        fields: ""
      });
    }
  }
  validateForm() {
    const fields = this.state.fields;
    const errors = {};
    let formIsValid = true;
    if (!fields.username) {
      formIsValid = false;
      errors.username = "*Please enter Username.";
    }
    if (!fields.usertype) {
      formIsValid = false;
      errors.usertype = "*Please Select UserType.";
    }
    if (!fields.accesstype) {
      formIsValid = false;
      errors.accesstype = "*Please Select AccessType.";
    }
    if (!fields.servername) {
      formIsValid = false;
      errors.servername = "*Please Enter ServerName.";
    }
    if (!fields.databasenames) {
      formIsValid = false;
      errors.databasenames = "*Please Enter database(s).";
    }
    this.setState({
      errors
    });
    return formIsValid;
  }

  render() {
    if (this.props.jobs.loading) {
      return <LoadingSpinner />;
    }
    return (
      <div>
        <BackgroundImage />
        <Container>
          <AppBackDrop>
            <Row>
              <Col sm={{ size: 6, offset: 3 }}>
                <div>
                  {this.props.jobs.entities.message === true ? (
                    <FormGroup>
                      <p>Operation success..!</p>
                    </FormGroup>
                  ) : null}
                  {this.props.jobs.error ||
                  this.props.jobs.entities.message === false ? (
                    <FormGroup>
                      <p>
                        Operation failed, Please contact DBA for futher
                        assistance..!
                      </p>
                    </FormGroup>
                  ) : null}
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                      <Label for="username">User Name</Label>
                      <Input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter User Name"
                        onChange={this.handleChange}
                        autoComplete="off"
                      />
                      <div className="errorMsg">
                        {this.state.errors.username}
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Label for="usertype">User Type</Label>
                      <Input
                        type="select"
                        name="usertype"
                        id="usertype"
                        onChange={this.handleChange}
                      >
                        <option value="">--</option>
                        <option value="AD">AD</option>
                        <option value="NONAD">NONAD</option>
                      </Input>
                      <div className="errorMsg">
                        {this.state.errors.usertype}
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Label for="accesstype">Access Type</Label>
                      <Input
                        type="select"
                        name="accesstype"
                        id="accesstype"
                        onChange={this.handleChange}
                      >
                        <option value="">---</option>
                        <option value="RO">RO</option>
                        <option value="RWE">RWE</option>
                        <option value="ADMIN">ADMIN</option>
                      </Input>
                      <div className="errorMsg">
                        {this.state.errors.accesstype}
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Label for="servername">Server Name</Label>
                      <Input
                        type="text"
                        id="servername"
                        name="servername"
                        placeholder="Enter Server Name"
                        onChange={this.handleChange}
                      />
                      <div className="errorMsg">
                        {this.state.errors.servername}
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Label for="databasenames">Database Names</Label>
                      <Input
                        type="text"
                        id="databasenames"
                        name="databasenames"
                        placeholder="Database Names"
                        onChange={this.handleChange}
                      />
                      <div className="errorMsg">
                        {this.state.errors.databasenames}
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Button type="submit">Submit</Button>
                    </FormGroup>
                  </Form>
                </div>
              </Col>
            </Row>
          </AppBackDrop>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  jobs: state.Accessusers
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAccess);
