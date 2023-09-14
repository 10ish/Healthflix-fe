import { Container, Row, Col, Form, Button } from "react-bootstrap";
import './Searchbar.css'
export default function Searchbar(){
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target);
      };
return(
    <div className="search-bar" >
    <Container >
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Control 
              type="text"
              placeholder="Enter Job Title Example: HR, BA, etc"
              size="sm"
              className="search-bar-elements"
            />
          </Col>
          <Col>
            <Form.Select
              aria-label="Speciality"
              className="search-bar-elements"
            >
              <option>Select Speciality</option>
              <option value={"Advanced Practitioner"}>
                {" "}
                Advanced Practitioner
              </option>
              <option value={"Allied Positions"}>Allied Positions</option>
              <option value={"Cath Lab"}> Cath Lab</option>
              <option value={"Advanced Practitioner"}>
                Advanced Practitioner
              </option>
              <option value={"Allied Positions"}>Allied Positions</option>
              <option value={"Cath Lab"}> Cath Lab</option>
              <option value={"Advanced Practitioner"}>
                {" "}
                Advanced Practitioner
              </option>
              <option value={"Allied Positions"}>Allied Positions</option>
              <option value={"Cath Lab"}> Cath Lab</option>
              <option value={"Advanced Practitioner"}>
                {" "}
                Advanced Practitioner
              </option>
              <option value={"Allied Positions"}>Allied Positions</option>
              <option value={"Cath Lab"}> Cath Lab</option>
              <option value={"Advanced Practitioner"}>
                {" "}
                Advanced Practitioner
              </option>
              <option value={"Allied Positions"}>Allied Positions</option>
              <option value={"Cath Lab"}> Cath Lab</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select
              aria-label="Location"
              className="search-bar-elements"
            >
              <option value={"Arkansas"}>Select Location</option>
              <option value={"Texas"}> Texas</option>
              <option value={"Virginia"}>Virginia</option>
              <option value={"Washington"}>Washington</option>
              <option value={"Arkansas"}> Arkansas</option>
              <option value={"Texas"}> Texas</option>
              <option value={"Virginia"}>Virginia</option>
              <option value={"Washington"}>Washington</option>
              <option value={"Arkansas"}> Arkansas</option>
              <option value={"Texas"}> Texas</option>
              <option value={"Virginia"}>Virginia</option>
              <option value={"Washington"}>Washington</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select
              aria-label="Job Type"
              className="search-bar-elements"
            >
              <option>Select Job Type</option>
              <option value={"Advanced Practitioner"}>
                {" "}
                Interim
              </option>
              <option value={"Allied Positions"}>Allied Positions</option>
              <option value={"Cath Lab"}> Cath Lab</option>
              <option value={"Advanced Practitioner"}>
                {" "}
                Locum
              </option>
              <option value={"Allied Positions"}>Allied Positions</option>
              <option value={"Cath Lab"}> Cath Lab</option>
              <option value={"Advanced Practitioner"}>
                {" "}
                Per Diwm 
              </option>
              <option value={"Allied Positions"}>Allied Positions</option>
              <option value={"Cath Lab"}> Cath Lab</option>
              <option value={"Advanced Practitioner"}>
                {" "}
                Advanced Practitioner
              </option>
              <option value={"Allied Positions"}>Allied Positions</option>
              <option value={"Cath Lab"}> Cath Lab</option>
              <option value={"Advanced Practitioner"}>
                {" "}
                Advanced Practitioner
              </option>
              <option value={"Allied Positions"}>Allied Positions</option>
              <option value={"Cath Lab"}> Cath Lab</option>
            </Form.Select>
          </Col>
          <Col>
            <Button type="submit" className="search-bar-elements">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  </div>
)

}