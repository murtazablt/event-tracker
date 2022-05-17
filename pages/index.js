// our-domain.com/

import React, { Fragment } from "react";
import MeetUpList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Meetup at Taksim",
    address: "Taksim/Istanbul",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Istanbul_Tram_%282%29.jpg/1024px-Istanbul_Tram_%282%29.jpg",
  },
  {
    id: 2,
    title: "Meetup for Maiden's Tower",
    adress: "Uskudar/Istanbul",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Istanbul_Tram_%282%29.jpg/1024px-Istanbul_Tram_%282%29.jpg",
  },
];

function HomePage() {
  return (
    <Fragment>
      <MeetUpList meetups={DUMMY_DATA} />
    </Fragment>
  );
}

export default HomePage;
