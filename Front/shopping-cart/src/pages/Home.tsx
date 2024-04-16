import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Card from '../components/Card';
import './Home.css';
import Libros from '../components/Libros';
import NuevosLibros from '../components/NuevosLibros';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biblioteca</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Card/>
        <Libros/>
        <NuevosLibros/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
