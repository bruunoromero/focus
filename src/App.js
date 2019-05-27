import React from "react";
import { useStore } from "effector-react";
import { IonApp, IonPage } from "@ionic/react";
import { Route, Switch } from "react-router-dom";

import { appStore, wakeUp } from "./stores/app";
import HomePage from "./pages/Home";

export default () => {
  const state = useStore(appStore);

  return (
    <IonApp>
      <IonPage>
        <Switch>
          <Route path="/" exatc component={HomePage} />
        </Switch>
      </IonPage>
    </IonApp>
  );
};
