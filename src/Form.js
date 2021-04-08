import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Forms extends React.Component {
	render() {
		return (
			<div style={{ height: '70vh' }}>
				<Card
					style={{
						width: '30rem',
						margin: '10% auto',
						textAlign: 'center',
						padding: '2rem',
                        opacity:0.8,
					}}
				>
					<Form onSubmit={(e) => this.props.getLocation(e)}>
						<Form.Group controlId="formBasicEmail">
							<Form.Label style={{ alignitems: 'center' }}>Where do you plan on dating?</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter a city"
								onChange={(e) => this.props.updateCity(e.target.value)}
							/>
						</Form.Group>
						<Button
							variant="danger"
							type="submit"
							onClick={(this.props.showDateDisplayHandler)}
						>
							Submit
						</Button>
					</Form>
				</Card>
			</div>
		);
	}
}
export default Forms;
