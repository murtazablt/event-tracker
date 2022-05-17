// our-domain.com/new-meetup

import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetup() {
  const addMeetupHandler = (meetupData) => {
    console.log(meetupData);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetup;