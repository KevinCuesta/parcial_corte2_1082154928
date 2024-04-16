import React from 'react';
import { IonInput, IonItem, IonList, IonCardTitle,IonContent } from '@ionic/react';

function Example() {
  return (
    <IonContent>
    <IonList>
        <IonCardTitle>Crear Categoria </IonCardTitle>
      <IonItem>
        <IonInput label="Nombre" placeholder="Enter text"></IonInput>
      </IonItem>
      <IonItem>
        <IonInput label="Codigo" type="number" placeholder="000"></IonInput>
      </IonItem>
    </IonList>
    </IonContent>
  );
}
export default Example;