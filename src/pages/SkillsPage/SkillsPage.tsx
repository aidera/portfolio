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
  const handleItemClick = (item: GridItemType) => {
    switch (item.id) {
      case 1:
        window.open('https://react.dev/');
        break;
      case 2:
        window.open('https://nextjs.org/');
        break;
      case 3:
        window.open('https://angular.dev/');
        break;
      case 4:
        window.open('https://www.typescriptlang.org/');
        break;
      case 5:
        window.open('https://www.javascript.com/');
        break;
      case 6:
        window.open('https://redux-toolkit.js.org/');
        break;
      case 9:
        window.open('https://rxjs.dev/');
        break;
      case 7:
        window.open('https://ngrx.io/');
        break;
      case 22:
        window.open('https://threejs.org/');
        break;
      case 13:
        window.open('https://nodejs.org');
        break;
      case 18:
        window.open('https://mui.com/');
        break;
      case 14:
        window.open('https://getbootstrap.com/');
        break;
      case 15:
        window.open('https://developer.mozilla.org/en-US/docs/Glossary/HTML5');
        break;
      case 16:
        window.open('https://en.wikipedia.org/wiki/CSS');
        break;
      case 17:
        window.open('https://sass-lang.com/');
        break;
      case 10:
        window.open('https://www.docker.com/');
        break;
      case 12:
        window.open('https://git-scm.com/');
        break;
      case 11:
        window.open('https://github.com/aidera');
        break;
      case 19:
        window.open(
          'https://www.google.com/search?q=rest+api&sca_esv=35b2ac92d41e214b&sxsrf=ADLYWIL-LdtNv3s3yrIRCa0IGjbqItqT9g%3A1716747045524&ei=JXtTZvzRH8LdptQPmfmS6Ak&udm=&ved=0ahUKEwi8-MSO9auGAxXCrokEHZm8BJ0Q4dUDCBA&uact=5&oq=rest+api&gs_lp=Egxnd3Mtd2l6LXNlcnAiCHJlc3QgYXBpMgQQABhHMgQQABhHMgQQABhHMgQQABhHMgQQABhHMgQQABhHMgQQABhHMgQQABhHSNQFUGpYanABeAKQAQCYAQCgAQCqAQC4AQPIAQD4AQGYAgKgAgbCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBZgDAOIDBRIBMSBAiAYBkAYIkgcBMqAHAA&sclient=gws-wiz-serp'
        );
        break;
      case 20:
        window.open('https://graphql.org/');
        break;
      case 21:
        window.open('https://code.visualstudio.com/');
        break;
      case 8:
        window.open('https://www.figma.com/');
        break;
      case 23:
        window.open(
          'https://www.autodesk.com/ca-en/products/maya/overview?term=1-YEAR&tab=subscription'
        );
        break;
      case 24:
        window.open('https://www.blender.org/');
        break;
      case 25:
        window.open('https://www.adobe.com/products/photoshop.html');
        break;
      case 26:
        window.open('https://www.adobe.com/ca/products/illustrator.html');
        break;
      case 27:
        window.open(
          'https://www.adobe.com/ca/products/substance3d-painter.html'
        );
        break;
      case 28:
        window.open('https://www.maxon.net/en/zbrush');
        break;
    }
  };

  return (
    <PageWithViewerLayout>
      <PageWithViewerLayoutContent
        title="Skills"
        menuItems={[<BackToMenuButton />]}
      >
        <Grid items={items} onClick={handleItemClick} />
      </PageWithViewerLayoutContent>
      <PageWithViewerLayoutViewer menuItems={[<BackToMenuButton />]}>
        <img draggable={false} src={'/assets/images/skills.jpg'} />
      </PageWithViewerLayoutViewer>
    </PageWithViewerLayout>
  );
}
