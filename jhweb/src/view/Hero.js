import React from "react";
import logo from "../img/hero_img1.png";
import "./Hero.css";
import a from "../img/rs.webp";
import b from "../img/2.webp";
import c from "../img/3.webp";
import d from "../img/4.webp";
import e from "../img/5.webp";
import f from "../img/6.webp";
import g from "../img/7.webp";
import h from "../img/8.webp";
import chair from "../img/chair.webp";

export function Hero() {
  return (
    <div>
      <div className="hero_one">
        <div className="description_box">
          <br />
          <br />
          <h1 className="Joey_Helps">Joey Helps</h1>
          <br />
          <br />
          <br />
          <br />
          <p className="description">
            A Mental Health Provider Discovery Platform connecting early
            <br />
            career licensed providers to insured Gen Z
          </p>
          <br />
          <br />
          <br />
          <br />
          <h4 className="moto">Hopping into a better you</h4>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="sign_ups">
            <button>Sign Up</button>
          </div>
        </div>
        <div className="picture1">
          <img style={{ float: "right", height: 600 }} src={logo} />
        </div>
      </div>
      <div className="hero_two">
        <br />
        <br />
        <br />
        <h1 className="team">Meet the Team</h1>
        <br />
        <br />
        <br />

        <div className="VP_1">
          <div className="RS">
            <img style={{ width: 250 }} src={a} alt=""></img>
            <div className="name">
              <h3>Ryan Shum</h3>
              <h5>Chief Executive Officer </h5>
            </div>
          </div>

          <div className="VC">
            <img style={{ width: 250 }} src={b} alt=""></img>
            <div className="name">
              <h3>Vipra Checkera</h3>
              <h5>Chief Product Officer </h5>
            </div>
          </div>

          <div className="DS">
            <img style={{ width: 250 }} src={c} alt=""></img>
            <div className="name">
              <h3>Diksha Singh</h3>
              <h5>Chief Technology Officer </h5>
            </div>
          </div>

          <div className="TC">
            <img style={{ width: 250 }} src={d} alt=""></img>
            <div className="name">
              <h3>Tea Cvetkovik</h3>
              <h5>Chief Marketing Officer </h5>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="VP_2">
          <div className="AB">
            <img style={{ width: 250 }} src={e} alt=""></img>
            <div className="name">
              <h3>Aryan Bhasin</h3>
              <h5>Chief Revenue Officer </h5>
            </div>
          </div>

          <div className="SB">
            <img style={{ width: 250 }} src={f} alt=""></img>
            <div className="name">
              <h3>Sahana Thangathurai</h3>
              <h5>Chief Financial Officer </h5>
            </div>
          </div>

          <div className="KW">
            <img style={{ width: 250 }} src={g} alt=""></img>
            <div className="name">
              <h3>kelly Wang</h3>
              <h5>Chief Human Resources Officer </h5>
            </div>
          </div>

          <div className="GL">
            <img style={{ width: 250 }} src={h} alt=""></img>
            <div className="name">
              <h3>Gloria Li</h3>
              <h5>Head of Customer Experience </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="hero_three">
        <div className="picture2">
          <img style={{ height: 600, height: "auto" }} src={chair} />
        </div>

        <div className="fill_in">
          <div>
            Name
            <input type="Name" placeholder="Enter first and last name" />
          </div>
          <div>
            City
            <input type="City" placeholder="Enter your city" />
          </div>
          <div>
            Email
            <input type="Email" placeholder="Enter your email" />
          </div>
          <div>
            MHP
            <select>
              <option value="/">Choose an option</option>
              <option value="saab">1</option>
              <option value="opel">2</option>
              <option value="audi">3</option>
            </select>
          </div>
          <div>
            Submit
            <input type="Submit" placeholder="Search.." />
          </div>
        </div>
      </div>
    </div>
  );
}
