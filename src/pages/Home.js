import React, { useEffect, useState } from "react";
import {
  IonPage,
  IonList,
  IonItem,
  IonLabel,
  IonTitle,
  IonHeader,
  IonContent,
  IonToolbar
} from "@ionic/react";

import { getTasks } from "../api/home";

export default () => {
  const [tasks, setTasks] = useState([]);
  const refreshTasks = () => getTasks().then(setTasks);

  useEffect(() => {
    refreshTasks();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
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
    </IonPage>
  );
};
