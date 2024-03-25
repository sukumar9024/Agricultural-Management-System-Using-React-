import React from "react";
import "../Styling/Home.css"
import {Link} from "react-router-dom";
function Home(){
    return(
        <div className="home-cointainer">
        <div className="home-content">
          <div className="tag-className">
            <h1 className="tag">
              <span className="grabit">Grabit: Straight from the Source</span>
            </h1>
          </div>
          <div className="tag-line-className">
            <p className="tag-line">
              Grabit is not just an app; it’s a bridge that brings fresh produce
              straight from the fields to people’s tables. 🌱🍎
            </p>
          </div>
        </div>
        <div className="home_button">
        <Link to="/Login" ><button type="button"  id="get-started">Get Started!</button></Link>
        </div>
      </div>
    );
}
export default Home;