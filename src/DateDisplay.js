import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
import { CardDeck } from "react-bootstrap";
import "./DateDisplay.css";

class DateDisplay extends React.Component {

  render() {
    console.log(this.props.drinks.drinks[0].strDrink, 'drinks')
    // console.log(this.props.drinks.strDrink)
    return (
      <section id="dateCards">
        <div class="text-center">
          <h1 style={{ padding: "3rem" }}>Places You May Like</h1>
          <CardDeck>
            {this.props.shuffled.map((item, idx) => (
              <div key={idx}>
                <Card className="suggestionCard" style={{ opacity: 0.7 }}>
                  <Card.Body>
                    <Card.Title>{item.restaurant_name}</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <Card.Text>
                      <ListGroupItem>
                        Phone Number:<br></br>
                        {item.restaurant_phone}
                      </ListGroupItem>
                      <ListGroupItem>
                        Location:<br></br>
                        {item.address.formatted}
                      </ListGroupItem>
                      <ListGroupItem>
                        {item.cuisines[0]
                          ? item.cuisines[0]
                          : `Type of Food Not Listed`}
                      </ListGroupItem>
                    </Card.Text>
                  </ListGroup>
                  <Button
                    variant="danger"
                    onClick={() => this.props.addToList(item)}
                  >
                    Save This Suggestion
                  </Button>
                </Card>
              </div>
            ))}
            <Card style={{ maxWidth: '20rem' }}>
              {/* <Card.Img variant="top" src="{this.props.drinks.drinks[0].strDrinkThumb" alt={this.props.drinks.drinks[0].strDrink} /> */}
              <Card.Body>
                <Card.Title>{this.props.drinks.drinks[0].strDrink}</Card.Title>
                <Card.Text>
                  <ListGroupItem>
                    {this.props.drinks.drinks[0].strInstructions}
                  </ListGroupItem>
                  <ListGroupItem>
                    {this.props.drinks.drinks[0].strAlchoholic ? this.props.drinks.drinks[0].strAlchoholic : `Assume it has Alcohol`}
                  </ListGroupItem>

                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
          <Button
            onClick={this.props.getRandomRest}
            variant="danger"
            style={{ margin: "1rem", textAlign: "center" }}
          >
            Shuffle
          </Button>
          <Button
            onClick={this.props.hideDateDisplayHandler}
            variant="danger"
            style={{ margin: "1rem", textAlign: "center" }}
          >
            Go Back
          </Button>
        </div>
      </section>
    );
  }

}

export default DateDisplay;
