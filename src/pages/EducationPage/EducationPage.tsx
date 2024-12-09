import ChartPageLayout from '../../components/_layouts/ChartPageLayout/ChartPageLayout';
import ChartConnector from '../../components/_ui/ChartConnector/ChartConnector';
import ChartItemBig from '../../components/_ui/ChartItemBig/ChartItemBig';
import { baseRoute } from '../../utils/env';
import styles from './EducationPage.module.scss';

export default function EducationPage() {
  return (
    <ChartPageLayout title="Education">
      <div className={styles.items}>
        <ChartItemBig
          title="Blender Modeling"
          img={`${baseRoute}assets/images/blender-nexttut-2.png`}
        >
          <p>Nexttut</p>
          <p>Apr 2024</p>
        </ChartItemBig>

        <ChartConnector
          flip={false}
          width={320}
          height={220}
          finalPoint="left"
          className={styles.connector1}
        />

        <ChartItemBig
          title="Substance Painter"
          img={`${baseRoute}assets/images/substance-nexttut.png`}
        >
          <p>Nexttut</p>
          <p>Feb 2024</p>
        </ChartItemBig>

        <ChartConnector
          flip={true}
          width={320}
          height={225}
          finalPoint="left"
          className={styles.connector2}
        />

        <ChartItemBig
          title="ZBrush"
          img={`${baseRoute}assets/images/zbrush-nexttut.png`}
        >
          <p>Nexttut</p>
          <p>Jan 2024</p>
        </ChartItemBig>

        <ChartConnector
          flip={false}
          width={320}
          height={215}
          finalPoint="left"
          className={styles.connector3}
        />

        <ChartItemBig
          title="Hard Surface Modeling"
          img={`${baseRoute}assets/images/hard-surface-nexttut.png`}
        >
          <p>Nexttut</p>
          <p>Jan 2024</p>
        </ChartItemBig>

        <ChartConnector
          flip={true}
          width={320}
          height={215}
          finalPoint="left"
          className={styles.connector4}
        />

        <ChartItemBig
          title="Maya"
          img={`${baseRoute}assets/images/maya-nexttut.png`}
        >
          <p>Nexttut</p>
          <p>Dec 2023</p>
        </ChartItemBig>

        <ChartConnector
          flip={false}
          width={320}
          height={210}
          finalPoint="left"
          className={styles.connector5}
        />

        <ChartItemBig
          title="JavaScript Algorithms and Data Structures"
          img={`${baseRoute}assets/images/js-alg.png`}
        >
          <p>FreeCodeCamp</p>
          <p>May 2023</p>
        </ChartItemBig>

        <ChartConnector
          flip={true}
          width={320}
          height={200}
          finalPoint="left"
          className={styles.connector6}
        />

        <ChartItemBig
          title="Testing React with Jest and Testing Library"
          img={`${baseRoute}assets/images/rtl.png`}
        >
          <p>Bonnie Schulkin</p>
          <p>Dec 2021</p>
        </ChartItemBig>

        <ChartConnector
          flip={false}
          width={320}
          height={215}
          finalPoint="left"
          className={styles.connector7}
        />

        <ChartItemBig
          title="Git and GitHub"
          img={`${baseRoute}assets/images/git-academind.png`}
        >
          <p>Academind</p>
          <p>Nov 2021</p>
        </ChartItemBig>

        <ChartConnector
          flip={true}
          width={320}
          height={225}
          finalPoint="left"
          className={styles.connector8}
        />

        <ChartItemBig
          title="React"
          img={`${baseRoute}assets/images/react-academind.png`}
        >
          <p>Academind</p>
          <p>Aug 2021</p>
        </ChartItemBig>

        <ChartConnector
          flip={false}
          width={320}
          height={225}
          finalPoint="left"
          className={styles.connector9}
        />

        <ChartItemBig
          title="NodeJS"
          img={`${baseRoute}assets/images/nodejs-academind.png`}
        >
          <p>Academind</p>
          <p>Apr 2021</p>
        </ChartItemBig>

        <ChartConnector
          flip={true}
          width={320}
          height={225}
          finalPoint="left"
          className={styles.connector10}
        />

        <ChartItemBig
          title="Angular"
          img={`${baseRoute}assets/images/angular-academind.png`}
        >
          <p>Academind</p>
          <p>Dec 2020</p>
        </ChartItemBig>

        <ChartConnector
          flip={false}
          width={320}
          height={225}
          finalPoint="left"
          className={styles.connector11}
        />

        <ChartItemBig
          title="Angular"
          img={`${baseRoute}assets/images/angular-minin.png`}
        >
          <p>Vladilen Minin</p>
          <p>Sep 2020</p>
        </ChartItemBig>

        <ChartConnector
          flip={true}
          width={320}
          height={225}
          finalPoint="left"
          className={styles.connector12}
        />

        <ChartItemBig
          title="Advanced Analytics"
          img={`${baseRoute}assets/images/analytics-google.png`}
        >
          <p>Google</p>
          <p>Oct 2019</p>
        </ChartItemBig>

        <ChartConnector
          flip={false}
          width={320}
          height={225}
          finalPoint="left"
          className={styles.connector13}
        />

        <ChartItemBig
          title="Analytics"
          img={`${baseRoute}assets/images/analytics-google-2.png`}
        >
          <p>Google</p>
          <p>Sep 2019</p>
        </ChartItemBig>

        <ChartConnector
          flip={true}
          width={320}
          height={215}
          finalPoint="left"
          className={styles.connector14}
        />

        <ChartItemBig
          title="Animation and Computer Graphics"
          img={`${baseRoute}assets/images/spbgikit.webp`}
        >
          <p>University of Cinema and Television, St.Petersburg</p>
          <p>2017</p>
        </ChartItemBig>
      </div>
    </ChartPageLayout>
  );
}
