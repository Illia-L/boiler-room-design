"use client";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import s from "./OurWorkSlider.module.css";
import clsx from "clsx";
import Link from "next/link";

import projects from "@/data/projects";
import ProjectSlide from "./ProjectSlide/ProjectSlide";

const OurWorkSlider: FC = () => {
  return (
    <section className={clsx("container", s.section)}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        // pagination={{clickable: true}}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        className={s.swiper}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectSlide project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <Link href="/our-work" className={s.btnMore}>Дивитися більше проектів</Link>
      </div>
    </section>
  );
};

export default OurWorkSlider;
