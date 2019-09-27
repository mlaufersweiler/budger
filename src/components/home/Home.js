import React, { Component } from "react";
import Footer from "../Footer";
import "./Home.css";

export class Home extends Component {
  render() {
    return (
      <div className="title">
        <h2 className="title-2">Festville</h2>
        <img
          className="picture"
          src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1892,w_2695,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/beer_friends_kteahh.jpg"
          alt="breath therapy"
          height="60%"
          width="100%"
          class="responsive-img"
        />

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
