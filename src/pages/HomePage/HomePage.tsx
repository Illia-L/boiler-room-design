import clsx from 'clsx';
import css from './HomePage.module.css';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';

function HomePage() {
  return (
    <>
      <h1 className={css.h1}>We design boiler-rooms</h1>

      <section className={css.section}>
        <div className='container'>
          <h2>Projects</h2>
          <div className={css.sectionContent}>
            <ProjectsSection />
          </div>
        </div>
      </section>

      <section className={clsx(css.textSection, css.whiteSection)}>
        <div className={clsx('container', css.textSectionRow)}>
          <h2 className={css.textSectionTitle}>What you get</h2>
          <ul className={css.textSectionContent}>
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
          <div className={css.textSectionSpacer}></div>
        </div>
      </section>

      <section className={css.textSection}>
        <div className={clsx('container', css.textSectionRow)}>
          <h2 className={css.textSectionTitle}>What's bihind</h2>
          <p className={css.textSectionContent}>
            My name is Illia, I have been installing domestic heating systems
            for over 20 years. This project I developed for my own internal use.
            First implementation of designes in practice succeeded and
            impressed. So I am revealing boiler-room designes as a separate service. Hope you find it usefull.
          </p>
          <div className={css.textSectionSpacer}></div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
