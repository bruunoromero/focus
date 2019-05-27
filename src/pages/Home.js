import React, { useEffect, useState } from "react";
import {
  IonPage,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonTitle,
  IonHeader,
  IonButton,
  IonContent,
  IonToolbar,
  IonButtons
} from "@ionic/react";

import { getTasks } from "../api/tasks";
import CreateTask from "../modals/CreateTask";

export default () => {
  const [tasks, setTasks] = useState([]);
  const [isCreateTaskOpen, setCreateTaskOpen] = useState(false);
  const refreshTasks = () => getTasks().then(setTasks);
  useEffect(() => {
    refreshTasks();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
          <IonButtons slot="primary">
            <IonButton onClick={() => setCreateTaskOpen(true)}>
              <IonIcon slot="icon-only" name="add" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList>
          {tasks.map((el, index) => (
            <IonItem key={index}>
              <IonLabel>{el.name}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
      <CreateTask
        isOpen={isCreateTaskOpen}
        dismiss={() => setCreateTaskOpen(false)}
      />
    </IonPage>
  );
};
