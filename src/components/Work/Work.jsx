import React from 'react';
import style from './Work.module.css';
import worksData from '../../assets/json/works.json';

const ProjectCard = ({ title, link, image, description }) => (
  <div className={style.card}>
    <div className={style.title}>{title}</div>
    <a href={link} target="_blank" rel="noreferrer">
      <img className={style.img} src={require(`../../assets/${image}`)} alt={title} />
    </a>
    <div className={style.info}>{description}</div>
  </div>
);

export default function Work() {
  const works = worksData.works; 

  return (
    <div className={style.container}>
      {works.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          link={project.link}
          image={project.image}
          description={project.description}
        />
      ))}
    </div>
  );
}
