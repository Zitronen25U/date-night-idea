import React from "react";
import axios from "axios";

// import Delete from "./Delete";
import Forms from "./Form";
// import Update from "./Update";

class DateIdeas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      show: false,
      city: "",
      inOut: "",
      price: [],
    };
  }

  updateCity = (city) => {
    this.setState({ city });
  }
  updateInOut = (inOut) => {
    this.setState({ inOut });
  }
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
    console.log(this.state);

    return (
      <>
        <Forms 
        updateCity={this.updateCity}
        updateInOut={this.updateInOut}
        updateCheckbox={this.updateCheckbox}
        />
      </>
    );
  }
}

export default DateIdeas;
