import React from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { history } from "../../../history";
import "../../../assets/scss/pages/app-ecommerce-shop.scss";
import "../../../assets/scss/pages/users.scss";
// import axiosConfig from "../../../axiosConfig";
import axios from "axios";
class ViewVehicle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axios
      .get(`http://35.154.86.59/api/user/view_onecust/${id}`)

      .then((response) => {
        //console.log(response.data);
        console.log(response.data.data);
        this.setState({ data: response.data.data });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Row>
            <Col sm="12">
              <div>
                <Breadcrumb listTag="div">
                  <BreadcrumbItem href="/analyticsDashboard" tag="a">
                    Home
                  </BreadcrumbItem>
                  <BreadcrumbItem href="/app/vehicle/vehicleModel" tag="a">
                    Vehicle List
                  </BreadcrumbItem>
                  <BreadcrumbItem active>View Vehicle</BreadcrumbItem>
                </Breadcrumb>
              </div>
            </Col>
          </Row>
          <Card className="overflow-hidden app-ecommerce-details">
            <Row className="m-2">
              <Col>
                <h1 col-sm-6 className="float-left">
                  View User
                </h1>
              </Col>
              <Col>
                <Button
                  className=" btn btn-danger float-right"
                  onClick={() => history.push("/app/userride/userRideList")}
                >
                  Back
                </Button>
              </Col>
            </Row>
            <CardBody className="pb-0">
              <Row className="ml-4">
                <Col sm="9" md="12" lg="12">
                  <div className="users-page-view-table">
                    {/* <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                    Customer Id 
                    </div>
                    <div className="text-truncate">
                      <span>{this.state.data.customerId}</span>
                    </div>
                  </div> */}
                    <div className="d-flex user-info">
                      <div className="user-info-title font-weight-bold">
                        First Name
                      </div>
                      <div className="text-truncate">
                        <span>{this.state.data.firstname}</span>
                      </div>
                    </div>
                    <div className="d-flex user-info">
                      <div className="user-info-title font-weight-bold">
                        Last Name
                      </div>
                      <div className="text-truncate">
                        <span>{this.state.data.lastname}</span>
                      </div>
                    </div>
                    <div className="d-flex user-info">
                      <div className="user-info-title font-weight-bold">
                        Email
                      </div>
                      <div className="text-truncate">
                        <span>{this.state.data.email}</span>
                      </div>
                    </div>
                    <div className="d-flex user-info">
                      <div className="user-info-title font-weight-bold">
                        Mobile
                      </div>
                      <div className="text-truncate">
                        <span>{this.state.data.mobile}</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default ViewVehicle;
