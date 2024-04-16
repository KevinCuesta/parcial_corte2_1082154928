import React from 'react';
import { IonContent, IonItem, IonLabel, IonList, IonCardTitle } from '@ionic/react';

function Example() {
  return (
    <IonContent color="light">
        <IonCardTitle>Libros</IonCardTitle>
      <IonList inset={true}>
        <IonItem>
          <IonLabel>En busca del tiempo perdido - f345</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>El Principitos - k221</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>El fin despues de la muerte - r2324</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Corhuila Lo Mejor - t325</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Biblia - d243</IonLabel>
        </IonItem>
      </IonList>
    </IonContent>
  );
}
export default Example;