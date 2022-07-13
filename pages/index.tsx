import SolarSystem from '../components/SolarSystem';
import ChooseAge from '../components/ChooseAge';
import Header from '../components/Header';
import SatelitesList from '../components/SatelitesList';

export default function Home() {
  return (
    <>
      <head >
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        ></meta>
      </head>
      <Header header='А вдруг СМА?' text='Выберите, кто Ваш пациент:' />
      <ChooseAge />
      <SolarSystem />
      <SatelitesList />
    </>
  );
}
