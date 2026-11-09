import { Col, Container, Image, Row } from 'react-bootstrap';

/** The Home page. */
const Home = () => (
  <main>
    <Container id="landing-page" fluid className="py-3">
      <Row className="align-middle text-center">

        <Col xs={8} className="d-flex flex-column justify-content-center">
          <Image src="/images/mockup-homepage.png" width=".9vw" alt="" />
        </Col>
      </Row>
    </Container>
  </main>
);

export default Home;
