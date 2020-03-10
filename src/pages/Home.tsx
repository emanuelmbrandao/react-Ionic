import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonText,
  IonAvatar,
  IonLabel,
  IonItemOptions,
  IonItemSliding,
  IonItemOption,
  IonButton
} from "@ionic/react";
import React from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>First App React</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonButton routerLink="/login">Login</IonButton>
        <IonButton routerLink="/register">Register</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
