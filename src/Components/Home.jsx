import React from "react";
import "../Styling/Home.css"
import {Link} from "react-router-dom";
function Home(){
    return(
        <div class="home-cointainer">
        <div class="home-content">
          <div class="tag-class">
            <h1 class="tag">
              <span class="grabit">Grabit: Straight from the Source</span>
            </h1>
          </div>
          <div class="tag-line-class">
            <p class="tag-line">
              Grabit is not just an app; it’s a bridge that brings fresh produce
              straight from the fields to people’s tables. 🌱🍎
            </p>
          </div>
        </div>
        <div class="home_button">
        <Link to="/Login" ><button type="button"  >Get Started!</button></Link>
        </div>
      </div>
    );
}
export default Home;