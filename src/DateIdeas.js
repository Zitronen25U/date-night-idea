import React from 'react';
import axios from 'axios';



import Delete from './Delete';
import UpdateForm from './UpdateForm';
import Update from './Update';

class DateIdeas extends React.Component {
    constructor(props){
        super(props);
        this.state={
            dates: [],
            show: false,

        }
    }  

    componentDidMount = () => {
        console.log(this.props.properties);
        const SERVER = 'http://localhost:3001';
        axios.get(`${SERVER}/dates`, { params: {email: this.props.properties.auth0.user.email}})
            .then(dates => {
                this.setState({ dates: dates.data });
                console.log('dates', dates.data);   
            })
            .catch(error => {console.log(error.message)})
      };

    

    }

    render() {
        return(
            <>



            </>

        )
        }

export default DateIdeas;