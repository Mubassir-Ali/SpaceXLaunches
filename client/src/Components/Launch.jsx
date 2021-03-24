import React from "react";
import { gql, useQuery } from "@apollo/client";
import "./Launch.style.css";

const LAUNCH_QUERY = gql`
  {
    launch(flight_number: 1) {
      mission_name
      launch_year
      launch_success
      launch_date_local
      flight_number
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

export const Launch = () => {
  const { data, loading, error } = useQuery(LAUNCH_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const {
    mission_name,
    launch_year,
    launch_success,
    launch_date_local,
    flight_number,
    rocket,
  } = data.launch;
  const { rocket_id, rocket_name, rocket_type } = rocket;

  return (
    <div>
      <h1>Launch Detail</h1>
      <ul>
        <li>Flight Number: {flight_number}</li>
        <li>Launch Year: {launch_year}</li>
        <li>Launch Successful: {launch_success}</li>
      </ul>
      <h1>Rocket Detail</h1>
      <ul>
        <li>Rocker Id: {rocket_id}</li>
        <li>Rocket Name: {rocket_name}</li>
        <li>Rocket Type: {rocket_type}</li>
      </ul>
    </div>
  );
};
