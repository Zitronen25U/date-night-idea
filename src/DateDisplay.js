import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
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
								<Card
									className="suggestionCard"
									style={{
										margin: '1rem',
										maxWidth: '18rem',
										minWidth: '18rem',
										opacity: 0.7,
										maxHeight: '21rem',
										minHeight: '21rem',
									}}
								>
									<Card.Body style={{ overflowY: 'scroll' }}>
										<Card.Title>{item.restaurant_name}</Card.Title>
									</Card.Body>
									<ListGroup className="list-group-flush">
										<Card.Text>
											<ListGroupItem>
												Phone Number:<br></br>
												{item.restaurant_phone}
											</ListGroupItem>
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
					<div id="drinkHolder">
						<CardGroup>
							<Card
								style={{
									marginRight: 0,
									opacity: 0.8,
									maxWidth: '18rem',
									minWidth: '18rem',
								}}
							>
								<Card.Img
									variant="top"
									src={this.props.drinks.drinks[0].strDrinkThumb}
									alt={this.props.drinks.drinks[0].strDrink}
								/>
								<Card.Body>
									<Card.Title style={{ maxHeight: '1.5rem', overflowY: 'scroll' }}>
										{this.props.drinks.drinks[0].strDrink}
									</Card.Title>
								</Card.Body>
							</Card>
							<Card
								style={{
									maxWidth: '20rem',
									opacity: 0.8,
									maxWidth: '18rem',
									minWidth: '18rem',
								}}
							>
								<Card.Text>
									<ListGroupItem
										style={{ minHeight: '19.25rem', maxHeight: '19.26rem', overflowY: 'scroll' }}
									>
										<u>
											<strong>Instructions</strong>
										</u>
										<br />
										{this.props.drinks.drinks[0].strInstructions}
										<hr></hr>
										<u>
											<strong>Type of Glass</strong>
										</u>
										<br />
										{this.props.drinks.drinks[0].strGlass}
										<hr />
										<u>
											<strong>Ingredients</strong>
										</u>
										<hr></hr>
										<ol style={{ textAlign: 'left' }}>
											<li>
                      &nbsp;{this.props.drinks.drinks[0].strMeasure1}&nbsp;
												{this.props.drinks.drinks[0].strIngredient1}
											</li>
											<hr></hr>
											<li>
                      &nbsp;{this.props.drinks.drinks[0].strMeasure2}&nbsp;
												{this.props.drinks.drinks[0].strIngredient2}
											</li>
											<hr></hr>
											<li>
                      &nbsp;{this.props.drinks.drinks[0].strMeasure1}&nbsp;
												{this.props.drinks.drinks[0].strIngredient3}
											</li>
										</ol>
									</ListGroupItem>
								</Card.Text>
								<Button
									variant="danger"
									onClick={() => this.props.addDrink(this.props.drinks.drinks[0])}
								>
									Save This Suggestion
								</Button>
							</Card>
						</CardGroup>
					</div>
					<Button
						onClick={this.props.getRandomRest}
						variant="danger"
						size="lg"
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
