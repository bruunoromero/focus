import React from "react";
import {
  IonPage,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonModal,
  IonTitle,
  IonSelect,
  IonHeader,
  IonButton,
  IonToolbar,
  IonContent,
  IonButtons,
  IonDatetime,
  IonSelectOption
} from "@ionic/react";

export default ({ isOpen, onDismiss, dismiss }) => {
  return (
    <IonModal isOpen={isOpen} onDismiss={onDismiss}>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Modal</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={dismiss}>
                <IonIcon slot="icon-only" name="close" />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonList>
            <IonItem>
              <IonLabel position="stacked">Nome da tarefa</IonLabel>
              <IonInput />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">
                Quantos tempo após acordar?
              </IonLabel>
              <IonDatetime displayFormat="HH mm" />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Quantos tempo após acordar</IonLabel>
              <IonDatetime displayFormat="HH mm" />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Repetir tarefa</IonLabel>
              <IonSelect multiple={true}>
                <IonSelectOption value="mon">Segunda-Feira</IonSelectOption>
                <IonSelectOption value="tue">Terça-Feira</IonSelectOption>
                <IonSelectOption value="wed">Quarta-Feira</IonSelectOption>
                <IonSelectOption value="thu">Quinta-Feira</IonSelectOption>
                <IonSelectOption value="fri">Sexta-Feira</IonSelectOption>
                <IonSelectOption value="sat">Sabado</IonSelectOption>
                <IonSelectOption value="sun">Domingo</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Severidade da tafera</IonLabel>
              <IonSelect>
                <IonSelectOption value="1">Pouco Importante</IonSelectOption>
                <IonSelectOption value="2">Importante</IonSelectOption>
                <IonSelectOption value="3">Muito Importante</IonSelectOption>
                <IonSelectOption value="4">
                  Extremamente Importante
                </IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonList>
          <IonButton expand="block">Criar tarefa</IonButton>
        </IonContent>
      </IonPage>
    </IonModal>
  );
};
