// our-domain.com/

import React, { Fragment } from "react";
import MeetUpList from "../components/meetups/MeetupList";

function HomePage(props) {
  return <MeetUpList meetups={props.meetups} />;
}

//getServerSideProps:
//this code will run for every incoming request
//this function does not execute during build process but instead always on the server after deployment
//all the code here will run on the server

// export async function getServerSideProps(context) {
//   //fetch data from the server
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_DATA,
//     },
//   };
// }


//getStaticProps:
// excecuted during pre-rendering process
// allowed to be used synchronously
// can use to fetch data before rendering
// reserved name
// called before the render method
// the code in here will never appear on the client-side

export async function getStaticProps() {
  //fetch data from an API, a database, or any other source

  return {
    props: {
      meetups: DUMMY_DATA,
    },
    //in case that data is changed, this function will be called again
    //the number is a timestamp in seconds to regenerate the page
    revalidate: 10,
  };
}

export default HomePage;

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
