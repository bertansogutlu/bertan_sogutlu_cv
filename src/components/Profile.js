import React from "react";

export default function Profile() {
  return (
    <section className="Profile">
      <div className="container">
        <h2>Profile</h2>
        <div className="child">
          <div>
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
          <img src="https://picsum.photos/id/1/500/500" alt="profile-img"></img>
          <div>
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
    </section>
  );
}
