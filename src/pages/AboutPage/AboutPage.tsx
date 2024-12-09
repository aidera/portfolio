import AnalyticsIcon from '../../assets/icons/AnalyticsIcon';
import CaseIcon from '../../assets/icons/CaseIcon';
import CategoryIcon from '../../assets/icons/CategoryIcon';
import DesignIcon from '../../assets/icons/DesignIcon';
import DevicesIcon from '../../assets/icons/DevicesIcon';
import EducationIcon from '../../assets/icons/EducationIcon';
import ForwardIcon from '../../assets/icons/ForwardIcon';
import GroupIcon from '../../assets/icons/GroupIcon';
import OfficeIcon from '../../assets/icons/OfficeIcon';
import ToolsIcon from '../../assets/icons/ToolsIcon';
import BackToMenuButton from '../../components/_ui/BackToMenuButton/BackToMenuButton';
import PageWithViewerLayout from '../../components/_layouts/PageWithViewerLayout/PageWithViewerLayout';
import PageWithViewerLayoutContent from '../../components/_layouts/PageWithViewerLayout/PageWithViewerLayoutContent/PageWithViewerLayoutContent';
import PageWithViewerLayoutViewer from '../../components/_layouts/PageWithViewerLayout/PageWithViewerLayoutViewer/PageWithViewerLayoutViewer';
import DescriptionBlock from '../../components/_ui/DescriptionBlock/DescriptionBlock';
import { baseRoute } from '../../utils/env';
import styles from './AboutPage.module.scss';

export default function AboutPage() {
  return (
    <PageWithViewerLayout>
      <PageWithViewerLayoutContent
        title="About"
        menuItems={[<BackToMenuButton />]}
      >
        <DescriptionBlock
          title1="Eugenia Mikhaleva"
          title1Type="h2"
          title2="Frontend Developer"
          title2Type="h3"
          classNames={styles['description-block']}
        ></DescriptionBlock>

        <div className={styles.item}>
          <div className={styles.icon}>
            <CaseIcon />
          </div>
          <p>
            Frontend web developer with <strong>over 5 years</strong> of
            commercial experience.
          </p>
        </div>

        <div className={styles.item}>
          <div className={styles.icon}>
            <ToolsIcon />
          </div>
          <p>
            Leveraged cutting-edge frontend development tools, including{' '}
            <strong>React, Angular, TypeScript, JavaScript</strong> (and more),
            to create dynamic, adaptive and responsive interfaces.
          </p>
        </div>

        <div className={styles.item}>
          <div className={styles.icon}>
            <OfficeIcon />
          </div>
          <p>
            Developed the web applications for{' '}
            <strong>large and small companies</strong> in the USA, Ukraine and
            Russia. Collaborated seamlessly with cross-functional, international
            teams, including designers, project managers, product managers, and
            backend developers.
          </p>
        </div>

        <div className={styles.item}>
          <div className={styles.icon}>
            <CategoryIcon />
          </div>
          <p>
            Delivered high-load corporate applications and landing pages in{' '}
            <strong>various industries</strong>, such as: AI, Internet
            communications and connection, advertising, metal trading,
            recycling, insurance, events, restaurants and food delivery.
          </p>
        </div>

        <div className={styles.item}>
          <div className={styles.icon}>
            <DevicesIcon />
          </div>
          <p>
            Specialized in <strong>adaptive designs</strong> for optimal user
            experiences across desktop, tablet, and mobile platforms.
          </p>
        </div>

        <div className={styles.item}>
          <div className={styles.icon}>
            <DesignIcon />
          </div>
          <p>
            Proficient in creating intuitive and visually appealing user
            interfaces to optimize user experiences <strong>(UI/UX)</strong> and
            drive engagement with a proven ability to seamlessly translate both
            self-generated designs and designs by other designers into
            functional code.
          </p>
        </div>

        <div className={styles.item}>
          <div className={styles.icon}>
            <AnalyticsIcon />
          </div>
          <p>
            Elevated user engagement through the integration of high-quality{' '}
            <strong>animations and interactive features</strong>. Implemented
            SEO best practices to enhance website and application visibility on
            leading search engines. Successfully optimized the application to
            improve search engine rankings and enhance overall performance.
          </p>
        </div>

        <div className={styles.item}>
          <div className={styles.icon}>
            <ForwardIcon />
          </div>
          <p>
            Conceptualized, designed, and executed a full-cycle web application,
            overseeing all aspects from initial idea to deployment.
          </p>
        </div>

        <div className={styles.item}>
          <div className={styles.icon}>
            <EducationIcon />
          </div>
          <p>
            Played a key role in <strong>mentoring</strong> and guiding junior
            developers, fostering their growth and skill development.
          </p>
        </div>

        <div className={styles.item}>
          <div className={styles.icon}>
            <GroupIcon />
          </div>
          <p>
            Demonstrated strong leadership skills in collaborative team
            environments, ensuring effective communication and project
            execution.
          </p>
        </div>
      </PageWithViewerLayoutContent>
      <PageWithViewerLayoutViewer menuItems={[<BackToMenuButton />]}>
        <img draggable={false} src={`${baseRoute}assets/images/about.jpg`} />
      </PageWithViewerLayoutViewer>
    </PageWithViewerLayout>
  );
}
