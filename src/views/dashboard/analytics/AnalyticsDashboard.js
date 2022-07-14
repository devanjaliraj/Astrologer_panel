import React from "react";
import { Row, Col, Card, CardTitle, CardText } from "reactstrap";
import SalesCard from "./SalesCard";
import DispatchedOrders from "./DispatchedOrders";
import Notification from "./Notification";
import axiosConfig from "../../../axiosConfig";
import "../../../assets/scss/pages/dashboard-analytics.scss";
// import axios from "axios";

class AnalyticsDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total7sayplan: {},
      bsicplan: {},
      endtoend: {},
      day7planearnig: {},
      basicplanearning: {},
      endtoendearning: {},
      maneger: {},
      dsm: {},
      outherstaff: {},
      // dealerTable: [],
    };
  }

  componentDidMount() {
    // //dealer table
    // axiosConfig
    //   .get("/dealer/alldealers")
    //   .then((response) => {
    //     console.log(response.data);
    //     //console.log(response.data.data);
    //     this.setState({ dealerTable: response.data });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // //end dealer //
    axiosConfig
      .get("/dealer/total7sayplan")
      .then((response) => {
        console.log(response.data);
        //console.log(response.data.data);
        this.setState({ total7sayplan: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get("/dealer/totalvasicplan")
      .then((response) => {
        console.log(response.data);
        //console.log(response.data.data);
        this.setState({ bsicplan: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get("/dealer/totalendtoendplan")
      .then((response) => {
        console.log(response.data);
        //console.log(response.data.data);
        this.setState({ endtoend: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    axiosConfig
      .get("/dealer/total7dayplanearnig")
      .then((response) => {
        console.log(response.data);
        console.log(response.data.Earning);
        this.setState({ day7planearnig: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    axiosConfig
      .get("/dealer/totalbasicplanearning")
      .then((response) => {
        console.log(response.data);
        //console.log(response.data.data);
        this.setState({ basicplanearning: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    axiosConfig
      .get("dealer/endtoendearning")
      .then((response) => {
        console.log(response.data);
        //console.log(response.data.data);
        this.setState({ endtoendearning: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get("/dealer/totalmaneger")
      .then((response) => {
        console.log(response.data);
        //console.log(response.data.data);
        this.setState({ maneger: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get("/dealer/totaldsm")
      .then((response) => {
        console.log(response.data);
        //console.log(response.data.data);
        this.setState({ dsm: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    axiosConfig
      .get("/dealer/totaloutherstaff")
      .then((response) => {
        console.log(response.data);
        //console.log(response.data.data);
        this.setState({ outherstaff: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <React.Fragment>
        <Col lg="12" md="12">
          <SalesCard />
        </Col>
        {/* <h3>Menbership Plans</h3> */}
        <Row className="match-height">
          <Col lg="3" md="12">
            <Card
              className="bg-info"
              body
              inverse
              style={{ borderColor: "black" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "black" }}>
                USERS
              </CardTitle>

              <CardText tag="h3" style={{ color: "black" }}>
                {this.state.total7sayplan.data}
              </CardText>
            </Card>
          </Col>
          <Col lg="3" md="12">
            <Card
              className="bg-info"
              body
              inverse
              style={{ borderColor: "black" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "black" }}>
                ASTROLOGER
              </CardTitle>

              <CardText tag="h3" style={{ color: "black" }}>
                {this.state.bsicplan.data}
              </CardText>
            </Card>
          </Col>
          <Col lg="3" md="12">
            <Card
              className="bg-info"
              body
              inverse
              style={{ borderColor: "black" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "black" }}>
                STATUS
              </CardTitle>

              <CardText tag="h3" style={{ color: "black" }}>
                {this.state.endtoend.data}
              </CardText>
            </Card>
          </Col>
          <Col lg="3" md="12">
            <Card
              className="bg-info"
              body
              inverse
              style={{ borderColor: "black" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "black" }}>
                TRANSACTION
              </CardTitle>
              <CardText tag="h3" style={{ color: "black" }}>
                {this.state.day7planearnig.Earning}
              </CardText>
            </Card>
          </Col>
          {/* <Col lg="3" md="12">
            <Card
              className="bg-secondary"
              body
              inverse
              style={{ borderColor: "white" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total Basic plan earring
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.basicplanearning.Earning}
              </CardText>
            </Card>
          </Col>
          <Col lg="3" md="12">
            <Card
              className="bg-primary"
              body
              inverse
              style={{ borderColor: "white" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total end to end earring
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.endtoendearning.Earning}
              </CardText>
            </Card>
          </Col>
        </Row>
        <h3>Staff Enrollment</h3>
        <Row className="match-height">
          <Col lg="3" md="12">
            <Card
              className="bg-warning"
              body
              inverse
              style={{ borderColor: "white" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total DSM
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.dsm.data}
              </CardText>
            </Card>
          </Col>
          <Col lg="3" md="12">
            <Card
              className="bg-danger"
              body
              inverse
              style={{ borderColor: "white" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total Other Staff
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.outherstaff.data}
              </CardText>
            </Card>
          </Col>
          <Col lg="3" md="12">
            <Card
              className="bg-info"
              body
              inverse
              style={{ borderColor: "white" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total Staff Management
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.maneger.data}
              </CardText>
            </Card>
          </Col>*/}
        </Row>

        <Row>
          <Col sm="12">
            <DispatchedOrders />
          </Col>
          <Col sm="12">
            <Notification />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default AnalyticsDashboard;
