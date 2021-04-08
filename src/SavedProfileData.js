import React from "react";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import axios from "axios";
import StarRatings from "react-star-ratings";

const SERVER = process.env.REACT_APP_SERVER;
// const SERVER = "http://localhost:3001"
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
      console.log(saveDates.data);
      this.setState({ saved: saveDates.data, savedDrinks: savedDrinks.data });
    } catch (err) {
      console.error(err);
    }
  };

  changeRating = (newRating, index) => {
    let items = [...this.state.saved];
    let item = { ...items[index] };
    item.rating = newRating;
    items[index] = item;
    this.setState({ saved: items });
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
    console.log("updateDate splice", item);
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

  updateDate = async (newRating, index) => {
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
  };

  render() {
    console.log("saveDrinks",this.state.savedDrinks)
    return (
      <section>
        <h1 style={{ color: "white" }}>{this.props.name}'s Saved Dates</h1>
        <CardDeck>
          {this.state.saved.map((item, idx) => (
            <div key={idx}>
              <Card className="suggestionCard" style={{ opacity: 0.7 }}>
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
          {this.state.savedDrinks.map((item,idx)=>(
            <div key ={idx}>
              <Card>
                <Card.Img
                variant='top'
                src={item.drink_img}
                aly={item.drink_name}
                />
                <Card.Body>
                  <Card.Title>{item.drink_name}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          ))}
        </CardDeck>
      </section>
    );
  }
}

export default SavedProfileData;
