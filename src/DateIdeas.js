import React from "react";
import axios from "axios";
import DateDisplay from "./DateDisplay";

import Forms from "./Form";

const SERVER = "https://datenight-server.herokuapp.com";
// const SERVER = "http://localhost:3001"

class DateIdeas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      city: "",
      showDateDisplay: false,
      shuffled: [],
      drinks: [],
    };
  }

  updateCity = (city) => {
    this.setState({ city });
  };

  hideDateDisplayHandler = () => {
    this.setState({ dates: [], showDateDisplay: false });
    console.log("goBack", this.state.dates);
  };

  showDateDisplayHandler = () => {
    this.getRandomRest();
    this.setState({ showDateDisplay: true });
  };

  getRandomRest = () => {
    let shuffle = this.state.dates.sort(() => 0.5 - Math.random()).slice(0, 4);
    this.setState({ shuffled: shuffle });
    this.getDrink();
  };

  getLocation = async (e) => {
    try {
      e.preventDefault();
      let key = "pk.85e693f4b02d0833e71ad94a7d714431";
      // const key = process.env.REACT_APP_LOCATION_KEY;
      const locationIQurl = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${this.state.city}&format=json`;
      const location = await axios.get(locationIQurl);
      const locationArray = location.data;
      this.getDrink();
      this.getRestraurants(locationArray[0]);
      this.setState({
        location: locationArray[0],
        showDateDisplay: true,
      });
    } catch (err) {
      alert(err);
    }
  };

  getRestraurants = async (location) => {
    try {
      const restraurant = await axios.get(`${SERVER}/dateIdeas`, {
        params: { lat: location.lat, lon: location.lon },
      });
      this.setState({ dates: restraurant.data });
      this.getRandomRest();
    } catch (err) {
      alert(err)
    }
  };

  addToList = async (item) => {
    try {
      const idea = await axios.post(
        `${SERVER}/date`,
        { item: item },
        { params: { email: this.props.email } }
      );
      this.props.saveDateHandler(idea.data);
      alert("Date Added");
    } catch (err) {
      alert(err)
    }
  };

  getDrink = async () => {
    try {
      const newDrink = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      this.setState({ drinks: newDrink.data });
    } catch (err) {
      alert(err)
    }
  };

  addDrink = async (item) => {
    try {
      const idea = await axios.post(
        `${SERVER}/drink`,
        {
          drink_name: item.strDrink,
          drink_img: item.strDrinkThumb,
          drink_inst: item.strInstructions,
        },
        { params: { email: this.props.email } }
      );
      this.props.saveDrinkHandler(idea.data);
      alert("Drink Added")
    } catch (err) {
      alert(err)
    }
  };

  componentDidMount = async () => {
    this.getDrink();
  };

  render() {
    return (
      <>
        {!this.state.showDateDisplay ? (
          <Forms
            getLocation={this.getLocation}
            updateCity={this.updateCity}
            updateInOut={this.updateInOut}
            updateCheckbox={this.updateCheckbox}
            showDateDisplay={this.showDateDisplayHandler}
          />
        ) : (
          <DateDisplay
            dates={this.state.dates}
            shuffled={this.state.shuffled}
            getRandomRest={this.getRandomRest}
            addToList={this.addToList}
            hideDateDisplayHandler={this.hideDateDisplayHandler}
            drinks={this.state.drinks}
            addDrink={this.addDrink}
          />
        )}
      </>
    );
  }
}

export default DateIdeas;
