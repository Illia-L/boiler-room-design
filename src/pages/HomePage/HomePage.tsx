import clsx from 'clsx';
import css from './HomePage.module.css';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';

function HomePage() {
  return (
    <div>
      <h1 className={css.h1}>We design boiler-rooms</h1>

      <section className={css.section}>
        <h2>Projects</h2>

        <div className={css.sectionContent}>
          <ProjectsSection />
        </div>
      </section>

      <section className={css.section}>
        <h2>What you get</h2>

        <ul className={clsx(css.p, css.sectionContent)}>
          <li>3-D visualisation of boiler-room</li>
          <li>Equipment and material specification</li>
          <li>Calculated heat losses and annual energy/fuel consumption</li>
          <li>
            Communications to be provided on different stages of construction
          </li>
          <li>
            Equipment and pipes installation step-by-step manual with 3-D
            illustrations
          </li>
          <li>Electric and automatics schema</li>
          <li>Operating manual</li>
          <li>Service schedule</li>
        </ul>
      </section>

      <section className={css.section}>
        <h2>What's bihind</h2>

        <p className={clsx(css.p, css.sectionContent)}>
          My name is Illia, I have been installing domestic heating systems for
          over 20 years. This project I developed for my own internal use. First
          implementation of designes in practice succeeded and impressed. So I
          am revealing boiler-room designes to the market on their own as a
          separate service. Hope you find it usefull.
        </p>
      </section>
    </div>
  );
}

export default HomePage;
