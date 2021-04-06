import React from 'react';
import axios from 'axios';
import DateDisplay from './DateDisplay';

import Forms from './Form';

const SERVER = process.env.REACT_APP_SERVER;
class DateIdeas extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			location: {},
			dates: [], // displayed dates
			savedDates: [], // saved dates
			show: false,
			city: '',
			inOut: '',
			price: [],
			showDateDisplay: false,
			shuffled: [],
		};
	}

	updateCity = (city) => {
		this.setState({ city });
	};
	//   updateInOut = (inOut) => {
	//     this.setState({ inOut });
	//   };
	//   updateCheckbox = (e) => {
	//     const price = this.state.price;
	//     let index;
	//     if (e.target.checked) {
	//       price.push(e.target.value);
	//     } else {
	//       index = price.indexOf(e.target.value);
	//       price.splice(index, 1);
	//     }
	//     this.setState({ price: price });
	//   };

	showDateDisplayHandler = () => {
		this.getRandomRest();
		this.setState({ showDateDisplay: true });
	};

	getRandomRest = () => {
		let shuffle = this.state.dates.sort(() => 0.5 - Math.random()).slice(0, 4);
		this.setState({ shuffled: shuffle });
	};

	getLocation = async (e) => {
		try {
			e.preventDefault();
			let key = 'pk.85e693f4b02d0833e71ad94a7d714431';
			// const key = process.env.REACT_APP_LOCATION_KEY;
			const locationIQurl = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${this.state.city}&format=json`;
			const location = await axios.get(locationIQurl);
			const locationArray = location.data;

			this.getRestraurants(locationArray[0]);
			this.setState({
				location: locationArray[0],
				showDateDisplay: true,
			});
		} catch (err) {
			console.error(err);
		}
	};

	getRestraurants = async (location) => {
		try {
			const restraurant = await axios.get(`http://localhost:3001/dateIdeas`, {
				//   const restraurant = await axios.get(`${SERVER}/dateIdeas`, {
				params: { lat: location.lat, lon: location.lon },
			});
			this.setState({ dates: restraurant.data });
			this.getRandomRest();
		} catch (err) {
			console.log(err);
		}
	};

	addToList = async (item) => {
		console.log('from addToList', item, this.props.email);
		const idea = await axios.post(
			`http://localhost:3001/date`,
			{ item: item },
			{ params: { email: this.props.email } }
		);
		this.setState({ savedDates: idea.data });
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
					/>
				)}
			</>
		);
	}
}

export default DateIdeas;
