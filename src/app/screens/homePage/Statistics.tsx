import React from "react";
import { Container } from "@mui/material";

export default function Statistic() {
  return (
    <div className="about">
      <Container>
        <h1 className="heading">
        <span>about</span> <span className="heading-about">us</span>
        </h1>
        <div className="about-row">
          <div className="image">
          <img className="image" src="/img/about-img.jpeg"/>
          </div>
          <div className="content">
            <h3>What Makes Our Coffee Special?</h3>
            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos a autem 
            fugit iusto blanditiis magni voluptatibus esse reprehenderit quasi
            voluptates illum officiis officiis quod natus temporibus. 
            Aliquid magni nihil neque!
            </p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt veritatis reiciendis 
            explicabo sunt a suscipit quo voluptatum enim, laudantium neque necessitatibus 
            repellendus illum nobis corporis mollitia in inventore, consequuntur eaque. Cumque, 
            amet at?
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}