import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonLoading
} from "@ionic/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { logoutUser } from "../firebaseConfig";
import { useHistory } from "react-router";

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const username = useSelector((state: any) => state.user.username);
  const history = useHistory();

  async function logout() {
    setLoading(true);
    await logoutUser();
    setLoading(false);
    history.replace("");
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading
        message="Deslogando..."
        duration={0}
        spinner="crescent"
        isOpen={loading}
      ></IonLoading>
      <IonContent class="ion-padding">
        <p>Bem-Vindo {username}</p>
        <IonButton onClick={logout}>Logout</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
