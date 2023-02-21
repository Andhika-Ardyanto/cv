import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    title: "Nazwa Livia",
    review:
      "In addition to providing reviews, users are usually asked to give stars as the quality of the application. The higher the stars you get, the better the quality of the application",
  },
  {
    avatar: AVTR2,
    title: "Nazwa Livia",
    review:
      "In addition to providing reviews, users are usually asked to give stars as the quality of the application. The higher the stars you get, the better the quality of the application",
  },
  {
    avatar: AVTR3,
    title: "Nazwa Livia",
    review:
      "In addition to providing reviews, users are usually asked to give stars as the quality of the application. The higher the stars you get, the better the quality of the application",
  },
  {
    avatar: AVTR4,
    title: "Nazwa Livia",
    review:
      "In addition to providing reviews, users are usually asked to give stars as the quality of the application. The higher the stars you get, the better the quality of the application",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, title, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{title}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
