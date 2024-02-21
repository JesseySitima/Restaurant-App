import { IonApp, IonContent, IonImg, IonText, IonItem, IonLabel, IonInput, IonButton } from "@ionic/react";
import React, { useState } from "react";
import maxlogo from '../assets/images/maxlogo.jpg'
import { Link } from "react-router-dom";
import { Storage } from "@ionic/storage";
import { useHistory } from "react-router-dom";

const Register: React.FC = () => {
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [comfirmPassword, setComfirmPassword] = useState<string>();
    const history = useHistory();
    const storage = new Storage();
    storage.create();
    

    const handleRegister = async () => {
        if (password !== comfirmPassword) {
            alert('passwords do not match');
            return;
        }

        //save the user details to storage
        await storage.set('username', username);
        await storage.set('password', password);
        alert('Registration successful');

        history.push('/login');
    };

    return(
       <IonApp>
        <IonContent className="ion-text-center ion-margin ion-padding">
            <IonImg
                src={maxlogo}
                style={{ height:150 }}
            />
            <IonText>
                <h1>Register</h1>
            </IonText>
            <IonItem fill="outline" className="ion-margin" >
                <IonLabel position="floating">Username</IonLabel>
                <IonInput id="username" placeholder="Enter Username" value={username} onIonChange={(e) => setUsername(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem fill="outline" className="ion-margin">
                <IonLabel position="floating">Password</IonLabel>
                <IonInput id="password" type="password" placeholder="Enter Password" value={password} onIonChange={(e) => setPassword(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem fill="outline" className="ion-margin">
                <IonLabel position="floating">Comfirm Password</IonLabel>
                <IonInput id="confirmPassword" type="password" placeholder="Comfirm Password" value={comfirmPassword} onIonChange={(e) => setComfirmPassword(e.detail.value!)}></IonInput>
            </IonItem>

            <IonButton color='success' onClick={handleRegister} expand="full" shape="round">Register</IonButton>
            
            <IonText >
                Already have an account? <Link to='login'>Login</Link>
            </IonText>
        </IonContent>
       </IonApp>
    );

};
export default Register