import React from 'react';
import { IonInput, IonItem, IonCard, IonList, IonCardTitle } from '@ionic/react';

function Example() {
  return (
    <IonCard>
        <IonCardTitle>Crear libro </IonCardTitle>
    <IonList>
      <IonItem>
        <IonInput label="Titulo" placeholder="Escribe aqui el titulo"></IonInput>
      </IonItem>
      <IonItem>
        <IonInput label="Autor" placeholder="Escribe aqui el Autor"></IonInput>
      </IonItem>
      <IonItem>
        <IonInput label="Categoria" placeholder="Escribe aqui el Categoria" ></IonInput>
      </IonItem>
    </IonList>
    </IonCard>
  );
}
export default Example;