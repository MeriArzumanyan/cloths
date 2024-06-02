import { useLocation, Navigate } from "react-router-dom";
import st from "./Profile.module.css";
import React from "react";

export const Profile = () => {
  const { state } = useLocation();

  if (state?.role === "admin") {
    return <Navigate to="/profile/admin" state={state} />;
  }
  return (
    <div className={st.profile}>
      <img
        src={
          state?.gender === "male"
            ? "https://kitt-nn.ru/wp-content/uploads/2023/06/team-1.png"
            : "https://static.tildacdn.com/tild6239-6634-4865-a264-356432343234/photo.png"
        }
        alt=""
      />
      <div className={st.rightSIde}>
        <h3>{state?.name}</h3>
        <p className={st.info}>Info</p>
        <p >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          architecto nihil mollitia aliquid debitis et incidunt aspernatur, unde
          corrupti libero necessitatibus ex hic magni minima enim velit, fugiat
          fugit? Doloremque hic eaque enim soluta exercitationem voluptates
          ipsum excepturi porro mollitia!
        </p>
      </div>
    </div>
  );
};
