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
import "./Home.css";
import { Link } from "react-router-dom";
import { toastMessageDuration } from "../utils";
import { registerUser } from "../firebaseConfig";

const Register: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confsenha, setConfSenha] = useState("");

  async function register() {
    setLoading(true);
    if (senha !== confsenha) {
      toastMessageDuration("Senhas devem ser iguais!", 2000);
      setLoading(false);
      return;
    }

    if (email.trim() === "" || senha.trim() === "") {
      toastMessageDuration("Email e senha são requiridos", 2000);
      setLoading(false);
      return;
    }

    const result: any = await registerUser(email, senha);
    if (result) {
      toastMessageDuration("Cadastro realizado com sucesso", 2000);
    }
    setLoading(false);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading
        message="Entrando..."
        duration={0}
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
          <IonLabel position="floating">Senha</IonLabel>
          <IonInput
            type="password"
            onIonChange={(e: any) => setSenha(e.target.value)}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Confirmar Senha</IonLabel>
          <IonInput
            type="password"
            onIonChange={(e: any) => setConfSenha(e.target.value)}
          ></IonInput>
        </IonItem>
        <IonButton expand="block" onClick={register}>
          Register
        </IonButton>

        <p>
          Já tem uma conta? <Link to="/login">Login</Link>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Register;
