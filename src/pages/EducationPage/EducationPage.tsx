import BackToMenuButton from '../../components/_ui/BackToMenuButton/BackToMenuButton';
import PageWithViewerLayout from '../../components/_layouts/PageWithViewerLayout/PageWithViewerLayout';
import PageWithViewerLayoutContent from '../../components/_layouts/PageWithViewerLayout/PageWithViewerLayoutContent/PageWithViewerLayoutContent';
import PageWithViewerLayoutViewer from '../../components/_layouts/PageWithViewerLayout/PageWithViewerLayoutViewer/PageWithViewerLayoutViewer';
import { GridItemType } from '../../types/grid-item.types';
import Grid from '../../components/_ui/Grid/Grid';

const items: GridItemType[] = [
  { id: 1, title: '1', img: '/assets/images/avatar.jpg' },
  { id: 2, title: '2', img: '/assets/images/avatar.jpg' },
  { id: 3, title: '3', img: '/assets/images/avatar.jpg' },
  { id: 4, title: '4', img: '/assets/images/avatar.jpg' },
  { id: 5, title: '5', img: '/assets/images/avatar.jpg' },
  { id: 6, title: '6', img: '/assets/images/avatar.jpg' },
  { id: 7, title: '7', img: '/assets/images/avatar.jpg' },
  { id: 8, title: '8', img: '/assets/images/avatar.jpg' },
  { id: 9, title: '9', img: '/assets/images/avatar.jpg' },
  { id: 10, title: '10', img: '/assets/images/avatar.jpg' },
  { id: 11, title: '11', img: '/assets/images/avatar.jpg' },
  { id: 12, title: '12', img: '/assets/images/avatar.jpg' },
  { id: 13, title: '13', img: '/assets/images/avatar.jpg' },
];

export default function EducationPage() {
  return (
    <PageWithViewerLayout>
      <PageWithViewerLayoutContent
        title="Education"
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
