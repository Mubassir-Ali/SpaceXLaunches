import React from "react";
import './Launches.style.css'
import { gql, useQuery } from "@apollo/client";

const LAUNCH_QUERY = gql`
  {
    launches {
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
const Launches = () => {
  const { data, loading, error } = useQuery(LAUNCH_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  // const {mission_name,launch_year,launch_success,launch_date_local,flight_number} =data.launch

  console.log(data.launches);

  return (
    <div>
      {data.launches.map(
        ({
          mission_name,
          launch_year,
          launch_success,
          launch_date_local,
          flight_number,
        }) => (
          <ul>
            <li>Mission: {mission_name}</li>
            <li>Date: {launch_date_local}</li>
          </ul>
        )
      )}
    </div>
  );
};

export default Launches;
