import { Col, Row } from "reactstrap";
import TopCards from "../../src/components/dashboard/TopCards";
import FullLayoutUser from "../../src/layouts/FullLayoutUser";

function dashboard() {
  return (
    <>
      <FullLayoutUser>
        <Row>
          <Col sm="6" lg="6">
            <TopCards
              bg="bg-light-success text-success"
              title="Profit"
              subtitle="Yearly Earning"
              earning="$21k"
              icon="bi bi-wallet"
            />
          </Col>
          <Col sm="6" lg="6">
            <TopCards
              bg="bg-light-danger text-danger"
              title="Refunds"
              subtitle="Refund given"
              earning="$1k"
              icon="bi bi-coin"
            />
          </Col>
        </Row>
      </FullLayoutUser>
    </>
  );
}

export default dashboard
