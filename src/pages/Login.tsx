import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonLoading
} from "@ionic/react";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { loginUser } from "../firebaseConfig";
import { toastMessageDuration } from "../utils";
import "./Login.css";
import { setUserState } from "../redux/action";
import { useDispatch } from "react-redux";

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function login() {
    setLoading(true);
    const res: any = await loginUser(email, senha);
    console.log(res);

    if (res) {
      dispatch(setUserState(res.user.email));
      toastMessageDuration("Login feito com sucesso", 2000);
      history.replace("/dashboard");
    }

    setLoading(false);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading
        message="Entrando..."
        duration={0}
        spinner="crescent"
        isOpen={loading}
      ></IonLoading>
      <IonContent class="ion-padding">
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput
            onIonChange={(e: any) => setEmail(e.target.value)}
            type="email"
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput
            onIonChange={(e: any) => setSenha(e.target.value)}
            type="password"
          ></IonInput>
        </IonItem>
        <IonButton class="btnLogin" expand="block" onClick={login}>
          Logar
        </IonButton>
        <p>
          Não tem Conta? <Link to="/register">Criar Conta</Link>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Home;
