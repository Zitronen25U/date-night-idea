import React from 'react';
import Card from 'react-bootstrap/Card';
import './Login.css';
import LoginButton from './LoginButton';

class Login extends React.Component {
	render() {
		return (
			<Card border="none" style={{ width: '18rem', margin: '18% auto', padding: '2rem 1rem' }}>
				<Card.Body>
					<Card.Title>Log In</Card.Title>
					<Card.Text>Click Below to Log In</Card.Text>
					<LoginButton />
				</Card.Body>
			</Card>
		);
	}
}

export default Login;
