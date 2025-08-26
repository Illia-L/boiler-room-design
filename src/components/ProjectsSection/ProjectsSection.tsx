import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import css from './ProjectsSection.module.css';
import projects from '../../data/projects';
import Picture from '../ui/Picture/Picture';
import clsx from 'clsx';
import { Navigation } from 'swiper/modules';

function ProjectsSection() {
  if (!projects.length) return null;

  return (
    <div className={clsx('mySwiper', css.swiperContainer)}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {projects.map(project => (
          <SwiperSlide>
            <div className={css.imagesContainer}>
              <div className={clsx(css.imageContainer, css.leftImageContainer)}>
                <Picture
                  fileNameBase={project.before.src}
                  alt={project.before.alt}
                />
              </div>

              <div
                className={clsx(css.imageContainer, css.rightImageContainer)}
              >
                <Picture
                  fileNameBase={project.after.src}
                  alt={project.after.alt}
                />
              </div>
            </div>

            <div className={css.desc}>
              <h3>{project.title}</h3>

              <ul>
                {project.challenges.map((ch, i) => (
                  <li key={i}>{ch}</li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProjectsSection;
