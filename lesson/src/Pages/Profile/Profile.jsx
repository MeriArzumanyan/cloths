import { useLocation,Navigate } from "react-router-dom";
import st from "./Profile.module.css";
import React from "react";

export const Profile = () => {
  const {state} = useLocation();
if(state?.role==="admin"){
 return   < Navigate to="/profile/admin"/>
}
  return (
    <div>
      <h3>{state?.name}</h3>
    </div>
  );
};
