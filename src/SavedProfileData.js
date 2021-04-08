import React from "react";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import axios from "axios";
import StarRatings from "react-star-ratings";

const SERVER = 'https://datenight-server.herokuapp.com';

// const SERVER = "http://localhost:3001";

class SavedProfileData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: [],
      savedDrinks: [],
    };
  }

  componentDidMount = async () => {
    try {
      const saveDates = await axios.get(`${SERVER}/date`, {
        params: { email: this.props.email },
      });
      const savedDrinks = await axios.get(`${SERVER}/drink`, {
        params: { email: this.props.email },
      });
      this.setState({ saved: saveDates.data, savedDrinks: savedDrinks.data });
    } catch (err) {
      console.error(err);
    }
  };

  deleteDate = async (index) => {
    await axios.delete(`${SERVER}/date/${index}`, {
      params: { email: this.props.email },
    });
    let newDataArray = this.state.saved.filter((d, i) => {
      return index !== i;
    });
    this.setState({ saved: newDataArray });
  };

  updateDate = async (newRating, index) => {
    let items = [...this.state.saved];
    let item = { ...items[index] };
    item.rating = newRating;
    items[index] = item;
    this.state.saved.splice(index, 1, item);
    // console.log("updateDate splice", item);
    await axios.put(
      `${SERVER}/date/${index}`,
      { data: item },
      {
        params: { email: this.props.email },
      }
    );
    this.setState({ saved: items });
  };

  deleteDrink = async (index) => {
    await axios.delete(`${SERVER}/drink/${index}`, {
      params: { email: this.props.email },
    });
    let newDataArray = this.state.savedDrinks.filter((d, i) => {
      return index !== i;
    });
    this.setState({ savedDrinks: newDataArray });
  };

  updateDrink = async (newRating, index) => {
    let items = [...this.state.savedDrinks];
    let item = { ...items[index] };
    item.rating = newRating;
    items[index] = item;
    this.state.savedDrinks.splice(index, 1, item);
    console.log("updateDate splice", item);
    await axios.put(
      `${SERVER}/drink/${index}`,
      { data: item },
      {
        params: { email: this.props.email },
      }
    );
    this.setState({ savedDrinks: items });
    console.log("update state",this.state.savedDrinks)
  };

  render() {
    return (
      <section>
        <h1 style={{ color: "white", margin:"6% 10% 0"}}>{this.props.name}'s Saved Dates</h1>
        <CardDeck>
          {this.state.saved.map((item, idx) => (
            <div key={idx}>
              <Card
                className="suggestionCard"
                style={{ margin: "1rem", maxWidth: "22rem", opacity: 0.7, maxHeight:"24rem", minHeight:"24rem"}}
              >
                <Card.Body>
                  <Card.Title>{item.restaurant_name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <Card.Text>
                    <ListGroupItem>
                      {" "}
                      Phone Number:<br></br>
                      {item.restaurant_phone
                        ? item.restaurant_phone
                        : `Phone Number Not Listed`}
                    </ListGroupItem>
                    <ListGroupItem>{item.address.formatted}</ListGroupItem>
                    <ListGroupItem>
                      {item.cuisines[0]
                        ? item.cuisines[0]
                        : `Type of Food Not Listed`}
                    </ListGroupItem>
                    <ListGroupItem>
                      <StarRatings
                        rating={this.state.saved[idx].rating}
                        starRatedColor="red"
                        changeRating={this.updateDate}
                        numberOfStars={5}
                        name={idx}
                      />
                    </ListGroupItem>
                  </Card.Text>
                </ListGroup>
                <Button
                  variant="danger"
                  onClick={() => {
                    this.deleteDate(idx);
                  }}
                >
                  Delete
                </Button>
              </Card>
            </div>
          ))}
        </CardDeck>
        <CardDeck>
          {this.state.savedDrinks.map((item, idx) => (
            <div key={idx}>
              <Card style={{ maxWidth: "18rem", margin: "1rem", opacity: 0.8 }}>
                <Card.Img
                  variant="top"
                  src={item.drink_img}
                  alt={item.drink_name}
                />
                <Card.Body>
                  <Card.Title>{item.drink_name}</Card.Title>
                </Card.Body>
                <ListGroupItem>
                  <StarRatings
                    rating={this.state.savedDrinks[idx].rating}
                    starRatedColor="red"
                    changeRating={this.updateDrink}
                    numberOfStars={4}
                    name={idx}
                  />
                </ListGroupItem>
                <Button
                  variant="danger"
                  onClick={() => {
                    this.deleteDrink(idx);
                  }}
                >
                  Delete
                </Button>
              </Card>
            </div>
          ))}
        </CardDeck>
      </section>
    );
  }
}

export default SavedProfileData;
