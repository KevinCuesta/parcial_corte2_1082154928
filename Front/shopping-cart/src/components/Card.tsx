import React from 'react';
import { IonCard, IonItem, IonNote, IonSearchbar, IonButton,useIonToast , IonCardContent, IonCardHeader, IonCardTitle,  } from '@ionic/react';
import './Card.css';

function Card() {
  const [present] = useIonToast();
  const presentToast = (position: 'top' | 'middle' | 'bottom') => {
    present({
      message: 'Abajo vas a ver los libros',
      duration: 1500,
      position: position,
    });
  };
  return (
    <IonCard>
            <IonCardTitle>Buscar libro </IonCardTitle>
      <IonCardHeader>
      <IonItem>
      <IonSearchbar value="F455"></IonSearchbar>
        </IonItem>
      </IonCardHeader>
      <IonButton expand="block" onClick={() => presentToast('top')}>Buscar</IonButton>
      <IonCardContent><IonNote>Tener en cuenta que debes buscar por el codigo del libro</IonNote></IonCardContent>
    </IonCard>
  );
}
export default Card;
