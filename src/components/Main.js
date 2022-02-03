import React, { Component } from "react";
import Slider from "react-slick";
import "../asset/css/slick/slick-theme.css";
import "../asset/css/slick/slick.css";
import "../asset/css/Slide.css";

import slide1 from "../asset/main/slide1.png";
// import slide2 from '../asset/main/slide2.jpg';
import slide3 from "../asset/main/slide3.jpg";
import whiteArrow from "../asset/main/arrow.png";

// import ReactFullpage from '@fullpage/react-fullpage';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';

function Arrow(props) {
  const { onClick, image, next } = props;
  return (
    <div
      className={next ? "slide-button" : "slide-button slide-prev"}
      onClick={onClick}
    >
      <img src={image} />
    </div>
  );
}

export default class Main extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: "ease-in",
      nextArrow: <Arrow image={whiteArrow} next />,
      prevArrow: <Arrow image={whiteArrow} next={false} />,
    };

    return (
      <Slider {...settings} style={{ backgroundColor: "black" }}>
        <div style={{ overflow: "hidden" }}>
          <img
            src={slide1}
            style={{
              width: "100vw",
              height: "auto",
              // height: `${
              //   window.innerHeight > window.innerWidth ? '100vh' : 'auto'
              // }`,
              // width: `${
              //   window.innerHeight > window.innerWidth ? 'auto' : '100vw'
              // }`,
            }}
          />
          <div className="slide-cover">
            {window.innerHeight > window.innerWidth ? (
              // <div className="bounce" style={{ fontSize: '12vw' }}>
              <div className="fadein" style={{ fontSize: "12vw" }}>
                동국대학교 <br />
                공과대 풍물패 <br />
                한소리
              </div>
            ) : (
              <div className="fadein">동국대학교 공과대 풍물패 한소리</div>
            )}
          </div>
        </div>

        <div>
          <h3>
            <img
              src={slide3}
              style={{
                width: "100vw",
                height: "auto",
              }}
            />
            <div className="slide-cover"></div>
          </h3>
        </div>
      </Slider>
      // <ReactFullpage
      //   scrollOverflow={true}
      //   render={({ state, fullpageApi }) => (
      //     <div id="fullpage-wrapper">
      //       <div className="section">
      //         <Slider {...settings}>
      //           <div style={{ overflow: 'hidden' }}>
      //             <img
      //               src={slide1}
      //               style={{
      //                 height: `${
      //                   window.innerHeight > window.innerWidth
      //                     ? '100vh'
      //                     : 'auto'
      //                 }`,
      //                 width: `${
      //                   window.innerHeight > window.innerWidth
      //                     ? 'auto'
      //                     : '100vw'
      //                 }`,
      //               }}
      //             />
      //             <div className="slide-cover">
      //               {window.innerHeight > window.innerWidth ? (
      //                 // <div className="bounce" style={{ fontSize: '12vw' }}>
      //                 <div className="fadein" style={{ fontSize: '12vw' }}>
      //                   동국대학교 <br />
      //                   공과대 풍물패 <br />
      //                   한소리
      //                 </div>
      //               ) : (
      //                 <div className="bounce">
      //                   동국대학교 공과대 풍물패 한소리
      //                 </div>
      //               )}
      //             </div>
      //           </div>
      //           <div>
      //             <h3>
      //               <img
      //                 src={slide2}
      //                 style={{
      //                   height: `${
      //                     window.innerHeight > window.innerWidth
      //                       ? '100vh'
      //                       : 'auto'
      //                   }`,
      //                   width: `${
      //                     window.innerHeight > window.innerWidth
      //                       ? 'auto'
      //                       : '100vw'
      //                   }`,
      //                 }}
      //               />
      //               <div className="slide-cover"></div>
      //             </h3>
      //           </div>
      //           <div>
      //             <h3>
      //               <img
      //                 src={slide3}
      //                 style={{
      //                   height: `${
      //                     window.innerHeight > window.innerWidth
      //                       ? '100vh'
      //                       : 'auto'
      //                   }`,
      //                   width: `${
      //                     window.innerHeight > window.innerWidth
      //                       ? 'auto'
      //                       : '100vw'
      //                   }`,
      //                 }}
      //               />
      //               <div className="slide-cover"></div>
      //             </h3>
      //           </div>
      //         </Slider>
      //       </div>
      //       {/* <div className="section " style={{ float: 'left' }}>
      //         <div>
      //           <div style={{ height: '8vh' }}></div>
      //           <FullCalendar
      //             navLinks="true"
      //             height="92vh"
      //             events={[
      //               {
      //                 title: '개강',
      //                 start: '2021-08-30',
      //               },
      //             ]}
      //             defaultView="dayGridMonth"
      //             plugins={[dayGridPlugin]}
      //           />
      //         </div>
      //       </div> */}
      //     </div>
      //   )}
      // />
    );
  }
}
