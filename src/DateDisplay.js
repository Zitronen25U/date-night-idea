import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import { CardDeck } from 'react-bootstrap';
import './DateDisplay.css';

class DateDisplay extends React.Component {
	render() {
		return (
			<section id="dateCards">
				<div class="text-center">
					<h1 style={{ padding: '3rem' }}>Places You May Like</h1>
					<CardDeck>
						{this.props.shuffled.map((item, idx) => (
							<div key={idx}>
								<Card className="suggestionCard">
									<Card.Body>
										<Card.Title>{item.restaurant_name}</Card.Title>
									</Card.Body>
									<ListGroup className="list-group-flush">
										<Card.Text>
											<ListGroupItem>
												Phone Number:<br></br>
												{item.restaurant_phone}
											</ListGroupItem>
											{/* <ListGroupItem>
                    <Card.Link href={item.restaurant_website}>Link</Card.Link>
                    </ListGroupItem> */}
											<ListGroupItem>
												Location:<br></br>
												{item.address.formatted}
											</ListGroupItem>
											<ListGroupItem>
												{item.cuisines[0] ? item.cuisines[0] : `Type of Food Not Listed`}
											</ListGroupItem>
										</Card.Text>
									</ListGroup>
									<Button variant="danger" onClick={() => this.props.addToList(item)}>
										Save This Suggestion
									</Button>
								</Card>
							</div>
						))}
					</CardDeck>
					<Button
						onClick={this.props.getRandomRest}
						variant="danger"
						style={{ margin: '1rem', textAlign: 'center' }}
					>
						Shuffle
					</Button>
				</div>
			</section>
		);
	}
}

export default DateDisplay;
