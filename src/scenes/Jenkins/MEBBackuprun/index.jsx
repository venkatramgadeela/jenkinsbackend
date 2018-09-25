import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import AppBackDrop from "../../../components/AppBackDrop";
import BackgroundImage from "../../../components/BackgroundImage";

class MEBBackuprun extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jenkinresult: ""
    };
  }
  componentDidMount() {
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const jenkinbool = params.get("jenkinbool");
    this.jenkinresult(jenkinbool);
    // this.state.
  }
  jenkinresult(jenkinbool) {
    this.setState({ jenkinresult: jenkinbool });
  }
  render() {
    return (
      <div>
        <BackgroundImage />
        <Container>
          <AppBackDrop>
            <Row>
              <Col>
                {this.state.jenkinresult === "true" ? (
                  <div className="text-center">
                    Backup job ran successfully..!
                  </div>
                ) : (
                  <div className="text-center">Backup job failed..</div>
                )}
              </Col>
            </Row>
          </AppBackDrop>
        </Container>
      </div>
    );
  }
}

export default MEBBackuprun;
