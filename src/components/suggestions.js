import React, { Component } from "react";
import RightCard from "../utils/sideCard";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";
import pic5 from "../assets/pic5.png";
import pic6 from "../assets/pic6.png";

class Suggestion extends Component {
  state = {};
  render() {
    return (
      <form>
        <div className="right-form-container">
          <RightCard
            image={pic1}
            title="Asus ExpertBook L1"
            price="950,0"
            societe="Mytek"
          ></RightCard>
          <RightCard
            image={pic2}
            title="ASUS ExpertBook L1"
            price="1150,0"
            societe="Scoop Informatique"
          ></RightCard>
          <RightCard
            image={pic3}
            title="Dell Latitude 3520"
            price="349,0"
            societe="Mytek"
          ></RightCard>
          <RightCard
            image={pic4}
            title="HP ProBook 450 G8"
            price="1399,0"
            societe="Mytek"
          ></RightCard>
          <RightCard
            image={pic5}
            title="Asus ExpertBook B1"
            price="1999,0"
            societe="Mega PC"
          ></RightCard>
          <RightCard
            image={pic6}
            title="Asus ExpertBook L1"
            price="950,0"
            societe="Mytek"
          ></RightCard>
        </div>
      </form>
    );
  }
}

export default Suggestion;
