import React from 'react';
import Slider from "react-slick";
import Web from "./web";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  return (
    <div className="Project">
      <div id="Project">
        <div className='projectTitle'>
          <h1>
            Project
          </h1>
        </div>
        <div className="projectBox">
          <Slider {...settings}>
            <Web
              url="https://www.injiaoyun.com"
              image="injiaoyun.png"
              data="This is my first project in the  software industry, Mainly responsible for the small-scale function development, front-end UI adjustment, and third-party API concatenation."
            />
            <Web
              url="https://api.lifegoez.com/admin/signin"
              image="beauty_line_bot.png"
              data="This is my independent project, Its the reservation system for beauty nail industry, stores can set branch info, opening hours, and store closure dates in the dashboard, then customers can use the Line App to book and check the status of the order."
            />
            <Web
              url="https://www.sbot.ai"
              image="sbot.png"
              data="Sbot is a chatbot, which easily allows people without a programming background to create their own chatbot. This is the biggest project I had participated, mainly responsible for front-end UI development, API development, and payment system connection."
            />
            <Web
              url="https://www.memepr.com"
              image="memepr.png"
              data="MemePR is a marketing matching platform, let customers who with marketing needs match with marketing companies through automatic system. I'm mainly responsible for front-end UI development."
            />
            <Web
              url="https://jojo.cool"
              image="jojo.png"
              data="JoJo is my first side project, which can easily match everybody's free time and send the result to every participant."
            />
            <Web
              url="https://tripmoment.com"
              image="tripmoment.png"
              data="Tripmoment is a travel media which provide the latest travel information. In tripmoment I learned how to set up various AD on website to increase revenue and due to the high traffic, I have to spend more time handling back-end APIs than front-end UI"
            />
          </Slider>
        </div>
      </div>
    </div>
  );
}
