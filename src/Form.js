import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Forms extends React.Component {

  render() {
    return (
      <>
        <Form onSubmit={(e) => this.props.getLocation(e)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Where do you plan on dating</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a city"
              onChange={(e) => this.props.updateCity(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formIndoor">
            <Form.Label>Indoors/Outdoors</Form.Label>
            {["Indoors", "Outdoors"].map((x) => (
              <Form.Check
                type="radio"
                label={x}
                value={x}
                name="formHorizontalRadios"
                onChange={(e) => this.props.updateInOut(e.target.value)}
              />
            ))}

          </Form.Group>
          <Form.Group controlId="formPrice">
            <Form.Label>Price Range</Form.Label>
            <br />

            {["$", "$$", "$$$", "$$$$"].map((price) => (
              <Form.Check
                inline
                type="checkbox"
                label={price}
                value={price}
                onChange={this.props.updateCheckbox.bind(this)}

              />
            ))}
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}
export default Forms;
