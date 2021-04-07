import React from "react";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import axios from "axios";

const SERVER = "http://localhost:3001";

class SavedProfileData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: [],
      isOpen: false,
      indexOfCard:-1,
      chosenDate:{}
    };
  }

  componentDidMount = async () => {
    try {
      const saveDates = await axios.get(`${SERVER}/date`, {
        params: { email: this.props.email },
      });
      console.log(saveDates.data);
      this.setState({ saved: saveDates.data });
    } catch (err) {
      console.error(err);
    }
  };

  closeModal = () => this.setState({ isOpen: false });

  deleteDate = async (index) => {
    await axios.delete(`${SERVER}/date/${index}`, {
      params: { email: this.props.email },
    });
    let newDataArray = this.state.saved.filter((d, i) => {
      return index !== i;
    });
    this.setState({ saved: newDataArray });
  };

  // updateDate = async(notes)=>{
  //   let upDate.notes= notes
  // }

  // displayModal = (index)=>{
  //   const chosenDate = this.state.saved[index];
  //   this.setState({chosenDate,indexofCard:index,isOpen:true})
  // }

  render() {
    console.log(this.state);
    return (
      <section>
        <h1>Your Saved Dates</h1>
        <CardDeck>
          {this.state.saved.map((item, idx) => (
            <div key={idx}>
              <Card className="suggestionCard">
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
                  </Card.Text>
                </ListGroup>
                <Button
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
      </section>
    );
  }
}

export default SavedProfileData;
