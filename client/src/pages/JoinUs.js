import React from 'react';
import { Link } from "react-router-dom";

function JoinUs() {
  return (
    <div>
      <Link to="/join/driver">Driver</Link>
      <Link to="/join/repairCenter">Repair Center</Link>
    </div>
  );
}

export default JoinUs;