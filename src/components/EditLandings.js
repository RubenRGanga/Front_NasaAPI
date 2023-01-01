import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import UpdateLanding from "./UpdateLandings"

const EditLandings = (props) => {
  let { _id } = useParams();

  return (
    <>
      <h2>Update Landing with ID: { _id }</h2>
      {<UpdateLanding _id={_id} />}
    </>
  );
};

export default EditLandings;