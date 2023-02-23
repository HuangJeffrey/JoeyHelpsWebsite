import React from "react";
import "./Hero.css";

export function Hero() {
  return (
    <div>
      <div className="hero_one">
        <h1 className="box"></h1>
        <div className="description_box">
          <h1 className="Joey">Joey</h1>
          <h2 className="Helps">Helps</h2>
          <br />
          <br />
          <p className="description">
            A Mental Health Provider Discovery <br />
            Platform connecting licensed providers to <br />
            insured Gen Z
          </p>
          <br />
          <h4 className="hash">#HealthierMindHappierPeople</h4>
          <br />
          <br />
          <div className="sign_ups">
            <button>SIgn up as a user</button>
            <button>Sign up as a practitioner</button>
          </div>
        </div>
      </div>
      <div className="hero_two">
        <h1 className="our_values">Our Values</h1>
        <div className="values">
            <div className="value">
                <h1 className="education">Education</h1>
                <p className="education_description">
                    We help you learn about <br/> mental health resources to <br/> improve yourself
                </p>
            </div>
            <div className="value">
                <h1 className="better_you">Better you</h1>
                <p className="better_you_description">
                    We assist you and practitioners <br/> to help make a better you
                </p>
            </div>
            <div className="value">
            <h1 className="connection">Connection</h1>
                <p className="connection_description">
                    We connect you to practitioners <br/> to foster personal connections for <br /> your mental health
                </p>
            </div>
        </div>
      </div>
      <div className="hero_three">
        <div>
            woof
        </div>
      </div>
    </div>
  );
}
