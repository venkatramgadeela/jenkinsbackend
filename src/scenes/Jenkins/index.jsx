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
  Input,
  NavLink
} from "reactstrap";
import BackgroundImage from "../../components/BackgroundImage";
import LoadingSpinner from "../../components/LoadingSpinner";
import * as actionCreators from "../../services/Jenkins/actions";
import AppBackDrop from "../../components/AppBackDrop";
import "./index.css";

class Jenkins extends Component {
  static propTypes = {
    actions: PropTypes.shape({
      triggerJenJob: PropTypes.func.isRequired,
      resetPage: PropTypes.func.isRequired
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
    this.setState({
      fields
    });
    // this.setState({ value: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.validateForm()) {
      const servername = this.state.fields;
      this.props.actions.triggerJenJob(servername);
      // this.props.actions.resetPage();
      this.setState({
        fields: ""
      });
      // console.log(this.props.jobs.entities);
      // this.props.jobs.entities.message = false;
    }
  }
  validateForm() {
    const fields = this.state.fields;
    const errors = {};
    let formIsValid = true;

    if (!fields.servername) {
      formIsValid = false;
      errors.servername = "*Please enter servername.";
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
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                      <Label for="servername">Server Name</Label>
                      <Input
                        type="text"
                        id="servername"
                        name="servername"
                        placeholder="Enter server name"
                        onChange={this.handleChange}
                        value={this.state.servername}
                        autoComplete="off"
                      />
                      <div className="errorMsg">
                        {this.state.errors.servername}
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Button type="submit">Submit</Button>
                    </FormGroup>
                  </Form>
                  {this.props.jobs.entities.message === true ? (
                    <FormGroup>
                      <p>Request Submited for MEB Backup...</p>
                    </FormGroup>
                  ) : null}
                  {this.props.jobs.error ||
                  this.props.jobs.entities.message === false ? (
                    <FormGroup>
                      <p>
                        backup failed, Please contact DBA for futher
                        assistance..!
                      </p>
                    </FormGroup>
                  ) : null}
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
  jobs: state.Jenkins
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Jenkins);
