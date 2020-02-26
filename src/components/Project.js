import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
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
            <div>
              <div className="webBox">
                <div className="WebBrowser" onClick={() => window.open('https://www.injiaoyun.com', '_blank')}>
                  <div className="UrlSection">
                    <div className="DotHolder">
                      <div className="Dot" style={{ background: '#EF7A97' }} />
                      <div className="Dot" />
                      <div className="Dot" />
                    </div>
                    <div className="Url">
                      https://www.injiaoyun.com
                    </div>
                  </div>
                  <div className="Web">
                    <img src="/images/project/injiaoyun.png" width="100%" />
                  </div>
                </div>
                <div className="webData">
                  This is my first project in the  software industry, Mainly responsible for the small-scale function development, front-end UI adjustment, and third-party API concatenation.
            </div>
              </div>
            </div>
            <div>
              <div className="webBox">
                <div className="WebBrowser" onClick={() => window.open('https://api.lifegoez.com/admin/signin', '_blank')}>
                  <div className="UrlSection">
                    <div className="DotHolder">
                      <div className="Dot" />
                      <div className="Dot" style={{ background: '#878787' }} />
                      <div className="Dot" />
                    </div>
                    <div className="Url">
                      https://api.lifegoez.com
                    </div>
                  </div>
                  <div className="Web">
                    <img src="/images/project/beauty_line_bot.png" width="100%" />
                  </div>
                  <div className="webData">
                    This is my independent project, Its the reservation system for beauty nail industry, stores can set branch info, opening hours, and store closure dates in the dashboard, then customers can use the Line App to book and check the status of the order.
            </div>
                </div>
              </div>
            </div>
            <div>
              <div className="webBox">
                <div className="WebBrowser" onClick={() => window.open('https://www.sbot.ai', '_blank')}>
                  <div className="UrlSection">
                    <div className="DotHolder">
                      <div className="Dot" />
                      <div className="Dot" />
                      <div className="Dot" style={{ background: '#2047CC' }} />
                    </div>
                    <div className="Url">
                      https://www.sbot.ai
                    </div>
                  </div>
                  <div className="Web">
                    <img src="/images/project/sbot.png" width="100%" />
                  </div>
                </div>
                <div className="webData">
                  Sbot is a chatbot, which easily allows people without a programming background to create their own chatbot. This is the biggest project I had participated, mainly responsible for front-end UI development, API development, and payment system connection
            </div>
              </div>
            </div>
            <div>
              <div className="webBox">
                <div className="WebBrowser" onClick={() => window.open('https://www.memepr.com', '_blank')}>
                  <div className="UrlSection">
                    <div className="DotHolder">
                      <div className="Dot" style={{ background: '#EF7A97' }} />
                      <div className="Dot" />
                      <div className="Dot" />
                    </div>
                    <div className="Url">
                      https://www.memepr.com
                    </div>
                  </div>
                  <div className="Web">
                    <img src="/images/project/memepr.png" width="100%" />
                  </div>
                </div>
                <div className="webData">
                  MemePR is a marketing matching platform, let customers who with marketing needs match with marketing companies through automatic system. I'm mainly responsible for front-end UI development.
            </div>
              </div>
            </div>
            <div>
              <div className="webBox">
                <div className="WebBrowser" onClick={() => window.open('https://jojo.cool', '_blank')}>
                  <div className="UrlSection">
                    <div className="DotHolder">
                      <div className="Dot" />
                      <div className="Dot" style={{ background: '#878787' }} />
                      <div className="Dot" />
                    </div>
                    <div className="Url">
                      https://jojo.cool
                    </div>
                  </div>
                  <div className="Web">
                    <img src="/images/project/jojo.png" width="100%" />
                  </div>
                </div>
                <div className="webData">
                  JoJo is my first side project, which can easily match everybody's free time and send the result to every participant
            </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
