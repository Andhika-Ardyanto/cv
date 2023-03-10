import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Project-DailyExpenses",
    github: "https://github.com/Andhika-Ardyanto/Project-DailyExpenses",
  },
  {
    id: 2,
    image: IMG2,
    title: "Project_RandomWord",
    github: "https://github.com/Andhika-Ardyanto/my_flutter_RandomWord",
  },
  {
    id: 3,
    image: IMG3,
    title: "Project-ViewModel",
    github: "https://https://github.com/Andhika-Ardyanto/ViewModel",
  },
  {
    id: 4,
    image: IMG4,
    title: "Project-RecyclerView",
    github: "https://github.com/Andhika-Ardyanto/RecyclerViewBasic",
  },
  {
    id: 5,
    image: IMG5,
    title: "Project-Quizz",
    github: "https://github.com/Andhika-Ardyanto/Project-Quizz",
  },
  {
    id: 6,
    image: IMG6,
    title: "Project-Api",
    github: "https://github.com/Andhika-Ardyanto/Project-Api",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
