import React from 'react';
import Brian from './assets/Brian.jpeg';
import Ellis from './assets/Ellis.jpeg';
import Elijah from './assets/Elijah.jpeg';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

class Bio extends React.Component {
	render() {
		return (
			<CardDeck scrollable={true} style={{ width: '80%', height: '30%', margin: '1% auto', padding: '5%' }}>
				<Card>
					<Card.Img variant="top" src={Brian} alt="some dude" />
					<Card.Body>
						<Card.Title>Brian</Card.Title>
						<Card.Text>
							Brian is an Army Veteran and Full Stack Software Engineer. He served for 4 years as an
							Airborne Soldier and Signal Support Systems Specialist is Anchorage, Alaska. Brian is
							advancing his career to become a Python Developer.
							<hr />
							<a href="https://www.linkedin.com/in/brian-lemons25" style={{ color: 'blue' }}>
								LinkedIn
							</a>
						</Card.Text>
					</Card.Body>
				</Card>
				<Card>
					<Card.Img variant="top" src={Ellis} />
					<Card.Body>
						<Card.Title>Ellis</Card.Title>
						<Card.Text>
							I am software developer based in Seattle WA. I primarily code in JavaScript and Python. That
							being said, I am highly interested in web development and data science. One of my great
							addictions is eating spicy food and drinking coffee.
							<hr />
							<a href="https://www.linkedin.com/in/yongjoo-ellis-yoo/" style={{ color: 'blue' }}>
								LinkedIn
							</a>
						</Card.Text>
					</Card.Body>
				</Card>
				<Card>
					<Card.Img variant="top" src={Elijah} style={{ height: '80%' }} />
					<Card.Body>
						<Card.Title>Elijah</Card.Title>
						<Card.Text>
							Hi My Names Elijah. I moved to Seattle from California with my girlfriend Hannah and my two
							dogs Luna and Django. My Favorite things to do are eating and going on long walks with the
							family. Software Development is fun
							<hr />
							<a href="https://www.linkedin.com/in/elijahprom/" style={{ color: 'blue' }}>
								LinkedIn
							</a>
						</Card.Text>
					</Card.Body>
				</Card>
			</CardDeck>
		);
	}
}

export default Bio;
