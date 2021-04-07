import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import SavedProfileData from './SavedProfileData';

const Profile = (props) => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div style={{ height: '95vh' }}>
        {/* <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p> */}
        <SavedProfileData
          savedDates={props.savedDates}
          email={user.email}
          name={user.name}
        />
      </div>
    )
  );
};

export default Profile;
