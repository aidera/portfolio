import ChartPageLayout from '../../components/_layouts/ChartPageLayout/ChartPageLayout';
import ChartConnector from '../../components/_ui/ChartConnector/ChartConnector';
import ChartItemBig from '../../components/_ui/ChartItemBig/ChartItemBig';
import styles from './ExperiencePage.module.scss';

export default function ExperiencePage() {
  return (
    <ChartPageLayout title="Experience">
      <div className={styles.items}>
        <ChartItemBig
          title="Neyra Labs"
          img="/assets/images/avatar.jpg"
        >
          <p>Frontend Developer</p>
          <p>Toronto, Canada</p>
          <p>Mar 2024 - Present</p>
        </ChartItemBig>

        <ChartConnector
          flip={false}
          width={400}
          height={200}
          finalPoint="left"
        />

        <ChartItemBig title="Connectbase" img="/assets/images/bg1.png">
          <p>Frontend Developer</p>
          <p>Westborough, USA</p>
          <p>Apr 2021 - Jul 2023</p>
        </ChartItemBig>

        <ChartConnector
          flip={true}
          width={400}
          height={200}
          finalPoint="left"
        />

        <ChartItemBig title="Self Employed" img="/assets/images/avatar.jpg">
          <p>Frontend Developer</p>
          <p>Kyiv, Ukraine</p>
          <p>Mar 2020 - Apr 2021</p>
        </ChartItemBig>

        <ChartConnector
          flip={false}
          width={400}
          height={200}
          finalPoint="left"
        />

        <ChartItemBig title="Newage" img="/assets/images/bg1.png">
          <p>Web Traffic Manager</p>
          <p>Kyiv, Ukraine</p>
          <p>Mar 2019 - Mar 2020</p>
        </ChartItemBig>

        <ChartConnector
          flip={true}
          width={400}
          height={200}
          finalPoint="left"
        />

        <ChartItemBig title="Vbiznese" img="/assets/images/avatar.jpg">
          <p>Frontend Developer</p>
          <p>St.Petersburg, Russia</p>
          <p>Oct 2017 - Mar 2019</p>
        </ChartItemBig>
      </div>
    </ChartPageLayout>
  );
}
