import React from "react";

export default function Profile() {
  return (
    <div className="Profile">
      <h2>Profile</h2>
      <div className="profile-container">
        <div className="profile-left">
          <h3>Basic Information</h3>
          <p>
            <span>Date of birth: </span>05.02.1992
          </p>
          <p>
            <span>Residance: </span>ANTALYA
          </p>
          <p>
            <span>Education: </span>Master
          </p>
          <p>
            <span>Preferred role: </span>Fronte
          </p>
        </div>
        <div className="profile-img">
          <img src="https://picsum.photos/id/1/300/300" alt="profile-img"></img>
        </div>
        <div className="profile-right">
          <h3>Basic Information</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia.
          </p>
          <p>
            Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
            deserunt quam temporibus cumque magnam!
          </p>
        </div>
      </div>
    </div>
  );
}
