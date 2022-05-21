// our-domain.com/

import React, { Fragment } from "react";
import MeetUpList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

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

  //pass: PlWvg3ZxJ7KSoKpf
  const client = await MongoClient.connect(
    "mongodb+srv://murtaza:PlWvg3ZxJ7KSoKpf@event-tracker.ej6dc.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
    },
    //in case that data is changed, this function will be called again
    //the number is a timestamp in seconds to regenerate the page
    revalidate: 1,
  };
}

export default HomePage;
