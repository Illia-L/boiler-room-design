import s from "./ProjectSlide.module.css";
import { FC } from "react";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectSlideProps {
  project: Project;
}

const ProjectSlide: FC<ProjectSlideProps> = ({ project }) => {
  return (
    <div className={s.slide}>
      <div className={s.images}>
        <div className={s.imageDiv}>
          <Image
            src={`/img/${project.design.src}.jpg`}
            alt={project.design.alt}
            width={382}
            height={510}
            className={s.image}
          />
          <p className={s.imgLabel}>Дизайн</p>
        </div>
        <div className={s.imageDiv}>
          <Image
            src={`/img/${project.installed.src}.jpg`}
            alt={project.installed.alt}
            width={382}
            height={510}
            className={s.image}
          />
          <p className={s.imgLabel}>Проєкт</p>
        </div>
      </div>
			<div className={s.decs}>
				<h3 className={s.city}>{project.city}</h3>
				<div className={s.info}>
					<p>Потужність: <strong>{project.capacity} кВт</strong></p>
					<p>Паливо: <strong>{project.fuel}</strong></p>
				</div>
				<div className={s.challenges}>
					<h4 className={s.chTitle}>Виклики проєкту:</h4>
					<ul className={s.chList}>
						{project.challenges.map((ch, i) => (
							<li key={i} className={s.chItem}>{ch}</li>
						))}
					</ul>
				</div>
			</div>
    </div>
  );
};

export default ProjectSlide;
