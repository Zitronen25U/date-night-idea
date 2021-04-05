import React from "react";
import axios from "axios";
import DateDisplay from "./DateDisplay";

// import Delete from "./Delete";
import Forms from "./Form";
// import Update from "./Update";

class DateIdeas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      dates: [], // displayed dates
      savedDates: [], // saved dates
      show: false,
      city: "",
      inOut: "",
      price: [],
    };
  }

  updateCity = (city) => {
    this.setState({ city });
  };
  updateInOut = (inOut) => {
    this.setState({ inOut });
  };
  updateCheckbox = (e) => {
    const price = this.state.price;
    let index;
    if (e.target.checked) {
      price.push(e.target.value);
    } else {
      index = price.indexOf(e.target.value);
      price.splice(index, 1);
    }
    this.setState({ price: price });
  };

  getLocation = async (e) => {
    try {
      e.preventDefault();
      let key = 'pk.85e693f4b02d0833e71ad94a7d714431'


      const locationIQurl = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${this.state.city}&format=json`;
      const location = await axios.get(locationIQurl);
      const locationArray = location.data;
      
      this.getRestraurants(locationArray[0]);
      this.setState({
        location: locationArray[0],
      });
    } catch (err) {
      console.error(err);
    }
  };

  getRestraurants = async (location) => {
    try {
      const restraurant = await axios.get(`http://localhost:3001/dateIdeas`, {
        params: { lat: location.lat, lon: location.lon },
      });
      this.setState({dates: restraurant.data})
    } catch (err) {
      console.log(err);
    }
  };

  //   componentDidMount = () => {
  //     console.log(this.props.properties);
  //     const SERVER = "http://localhost:3001";
  //     axios
  //       .get(`${SERVER}/dates`, {
  //         params: { email: this.props.properties.auth0.user.email },
  //       })
  //       .then((dates) => {
  //         this.setState({ dates: dates.data });
  //         console.log("dates", dates.data);
  //       })
  //       .catch((error) => {
  //         console.log(error.message);
  //       });
  //   };

  render() {
    // console.log(this.state);

    return (
      <>
        <Forms
          getLocation={this.getLocation}
          updateCity={this.updateCity}
          updateInOut={this.updateInOut}
          updateCheckbox={this.updateCheckbox}
        />
        <DateDisplay
        dates={this.state.dates}
        />
      </>
    );
  }
}

export default DateIdeas;
