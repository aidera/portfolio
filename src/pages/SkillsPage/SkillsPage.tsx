import BackToMenuButton from '../../components/_ui/BackToMenuButton/BackToMenuButton';
import PageWithViewerLayout from '../../components/_layouts/PageWithViewerLayout/PageWithViewerLayout';
import PageWithViewerLayoutContent from '../../components/_layouts/PageWithViewerLayout/PageWithViewerLayoutContent/PageWithViewerLayoutContent';
import PageWithViewerLayoutViewer from '../../components/_layouts/PageWithViewerLayout/PageWithViewerLayoutViewer/PageWithViewerLayoutViewer';
import { GridItemType } from '../../types/grid-item.types';
import Grid from '../../components/_ui/Grid/Grid';

const items: GridItemType[] = [
  { id: 1, title: 'React.js', img: '/assets/images/react.webp' },
  { id: 2, title: 'Next.js', img: '/assets/images/next.webp' },
  { id: 3, title: 'Angular', img: '/assets/images/angular.png' },
  { id: 4, title: 'Typescript', img: '/assets/images/typescript.webp' },
  { id: 5, title: 'Javascript', img: '/assets/images/js.png' },
  { id: 6, title: 'Redux', img: '/assets/images/redux.png' },
  { id: 9, title: 'RxJs', img: '/assets/images/rxjs.png' },
  { id: 7, title: 'NgRx', img: '/assets/images/ngrx.svg' },
  { id: 22, title: 'Three.js', img: '/assets/images/threejs.png' },
  { id: 13, title: 'Node.js', img: '/assets/images/nodejs.png' },
  { id: 18, title: 'Material', img: '/assets/images/material.png' },
  { id: 14, title: 'Bootstrap', img: '/assets/images/bootstrap.webp' },
  { id: 15, title: 'HTML5', img: '/assets/images/html5.png' },
  { id: 16, title: 'CSS3', img: '/assets/images/css.png' },
  { id: 17, title: 'SASS/SCSS', img: '/assets/images/sass.png' },
  { id: 10, title: 'Docker', img: '/assets/images/docker.webp' },
  { id: 12, title: 'Git', img: '/assets/images/git.webp' },
  { id: 11, title: 'Github', img: '/assets/images/github.webp' },
  { id: 19, title: 'RestAPI', img: '/assets/images/restapi.png' },
  { id: 20, title: 'GraphQL', img: '/assets/images/graphql.png' },
  { id: 21, title: 'VS Code', img: '/assets/images/vscode.png' },
  { id: 8, title: 'Figma', img: '/assets/images/figma.webp' },
  { id: 23, title: 'Autodesk Maya', img: '/assets/images/maya.png' },
  { id: 24, title: 'Blender', img: '/assets/images/blender.png' },
  { id: 25, title: 'Adobe Photoshop', img: '/assets/images/photoshop.png' },
  { id: 26, title: 'Adobe Illustrator', img: '/assets/images/illustrator.png' },
  {
    id: 27,
    title: 'Adobe Substance Painter',
    img: '/assets/images/substance.png',
  },
  { id: 28, title: 'ZBrush', img: '/assets/images/zbrush.png' },
];

export default function SkillsPage() {
  return (
    <PageWithViewerLayout>
      <PageWithViewerLayoutContent
        title="Skills"
        menuItems={[<BackToMenuButton />]}
      >
        <Grid items={items} />
      </PageWithViewerLayoutContent>
      <PageWithViewerLayoutViewer menuItems={[<BackToMenuButton />]}>
        <img src={'/assets/images/bg1.png'} />
      </PageWithViewerLayoutViewer>
    </PageWithViewerLayout>
  );
}
