import { IonApp, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonPage, IonRow, IonText, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import './Login.css';
import { logoGoogle, logoFacebook, logoTwitter } from 'ionicons/icons';
import maxlogo from '../assets/images/maxlogo.jpg';

const Login: React.FC = () => {
  return (
   <IonApp>
    <IonContent className='ion-text-center ion-margin ion-padding'>
      <IonImg src={maxlogo} style={{ height: '150px' }}/>
       <IonText>
        <h1>Sign In</h1>
       </IonText>
       <IonItem fill='outline' className='ion-margin'>
        <IonLabel position='floating'>Username</IonLabel>
        <IonInput id='username' placeholder='Enter username'></IonInput>
       </IonItem>
       <IonItem fill='outline' className='ion-margin'>
        <IonLabel position='floating'>Password</IonLabel>
        <IonInput id='password' placeholder='Enter Password' type='password'></IonInput>
       </IonItem>
       <IonGrid>
        <IonRow>
          <IonCol >
            Remember me
          </IonCol>
          <IonCol>
            <IonToggle checked={true} color='success'></IonToggle>
          </IonCol>
        </IonRow>
       </IonGrid>
       <IonButton className='ion-padding' color='success' expand='full' shape='round'>Login</IonButton>
       <IonText>You can also sign in using ...</IonText>
       <IonGrid>
        <IonRow>
          <IonCol>
            <IonIcon icon={logoGoogle} size='large'/>
          </IonCol>
          <IonCol>
            <IonIcon icon={logoFacebook} size='large' color='primary'/>
          </IonCol>
          <IonCol>
              <IonIcon icon={logoTwitter} size='large' color='primary'/>
          </IonCol>
        </IonRow>
       </IonGrid>
    </IonContent>
   </IonApp>
  );
};

export default Login;
