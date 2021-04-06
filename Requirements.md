# Software Requirements

## Vision

- The vision of our produce is to provide users with a simple, stress free method of planning date nights, without the hassle of planning exactly how the date needs to go. This app solves the issue of stressing about planning a date, and allows you more energy to focus on the person you're with. You should care about this because it provides a service to not only new daters, but anyone who wants to plan a night out with a significant other.

## Scope

### IN

- The product will allow users to generate random restaurants in their area
- The product will allow users to generate random activities in their area
- The product will authenticate users and generate a profile for them
- The product will allow users to save their suggestions to their profile
- The product will allow users to shuffle their suggestions

### OUT

- This product will not reccomend other people to date
- This product will not allow you to reserve seats or place orders

## MVP

- MVP functionallity will allow the users to complete all of the user stories listed above.

- Stretch Goals are for the user to be able to look at drink venue's in their local area, display local weather, and filter restaurant types by type of cuisine

## Functional Requirements

- A user can search through all the products they have saved
- A user can generate random venue locations
- A user's profile page will be custom to them and persistent on a Database

## Data Flow

- Upon entering the App, the user is expected to login
- Upon login, the user is brought to the main page
- The user can type in their locations to generae random restaurants in their area
- The user can save these suggestions to their profile
- The user can get new suggestions by hitting the "shuffle" button
- The user view their profile
- The user can view their saved suggestions on their profile
- The user can delete these suggestions from their profile
- The user can update their preferances

## Non functional Requirements

- DataBase
  - The user profile is saved in the backend, using mongoose. The user saved data is displayed on their unique profile page

- Authentication
  - The user is authenticated with Auth0, which allows them access to the entire applicaton
  