import BackToMenuButton from '../../components/BackToMenuButton/BackToMenuButton';
import PageWithViewer from '../../components/PageWithViewer/PageWithViewer';
import PageWithViewerContent from '../../components/PageWithViewer/PageWithViewerContent/PageWithViewerContent';
import PageWithViewerViewer from '../../components/PageWithViewer/PageWithViewerViewer/PageWithViewerViewer';

export default function AboutPage() {
  return (
    <PageWithViewer>
      <PageWithViewerContent title="About">
        <p>
          Frontend web developer with over 5 years of commercial experience.{' '}
        </p>
        <p>
          - Leveraged cutting-edge frontend development tools, including React,
          Angular, TypeScript, JavaScript (and more), to create dynamic,
          adaptive and responsive interfaces.
        </p>
        <p>
          - Developed the web applications for large and small companies in the
          USA, Ukraine and Russia. Collaborated seamlessly with
          cross-functional, international teams, including designers, project
          managers, product managers, and backend developers.
        </p>
        <p>
          - Delivered high-load corporate applications and landing pages in
          various industries, such as: Internet communications and connection,
          advertising, metal trading, recycling, insurance, events, restaurants
          and food delivery.
        </p>
        <p>
          - Specialized in adaptive designs for optimal user experiences across
          desktop, tablet, and mobile platforms.
        </p>
        <p>
          - Proficient in creating intuitive and visually appealing user
          interfaces (UI) to optimize user experiences (UX) and drive engagement
          with a proven ability to seamlessly translate both self-generated
          designs and designs by other designers into functional code.
        </p>
        <p>
          - Elevated user engagement through the integration of high-quality
          animations and interactive features. Implemented SEO best practices to
          enhance website and application visibility on leading search engines.
          Successfully optimized the application to improve search engine
          rankings and enhance overall performance.
        </p>
        <p>
          - Conceptualized, designed, and executed a full-cycle web application,
          overseeing all aspects from initial idea to deployment.
        </p>
        <p>
          - Played a key role in mentoring and guiding junior developers,
          fostering their growth and skill development.
        </p>
        <p>
          - Demonstrated strong leadership skills in collaborative team
          environments, ensuring effective communication and project execution.
        </p>
      </PageWithViewerContent>
      <PageWithViewerViewer menuItems={[<BackToMenuButton />]}>
        <img src={'/assets/images/bg1.png'} />
      </PageWithViewerViewer>
    </PageWithViewer>
  );
}
