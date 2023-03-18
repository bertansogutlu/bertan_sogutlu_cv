import React from "react";

export default function Profile({ profile }) {
  return (
    <section className="Profile">
      <div className="container">
        <h2>{profile.hTwo}</h2>
        <div className="child">
          <div>
            <h3>{profile.hThreeOne}</h3>
            {profile.information.map((info) => (
              <p key={info.key}>
                <span>{info.key}</span>
                {info.value}
              </p>
            ))}
          </div>
          <img src={profile.img.src} alt={profile.img.name}></img>
          <div>
            <h3>{profile.hThreeTwo}</h3>
            {profile.p.map((paragraph,i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
