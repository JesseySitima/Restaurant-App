import { IonApp, IonButton, IonContent, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar, IonSearchbar, IonText, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from "@ionic/react";
import React from "react";
import { personCircleOutline } from "ionicons/icons";
import

const Dashboard: React.FC = () => {
    return(
         <IonApp>
            <IonHeader>
            <IonToolbar>
                <IonButtons slot="secondary">
                    <IonButton>
                        <IonIcon slot="icon-only" icon={personCircleOutline}></IonIcon>
                    </IonButton> 
                </IonButtons> 
                <IonTitle>Welcome, User</IonTitle>
            </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding ion-margin ">
               <IonGrid>
                <IonRow>
                    <IonCol>
                        <IonText><h3>Menu Categories</h3></IonText>
                    </IonCol>
                    <IonCol>
                        <IonSearchbar></IonSearchbar>
                    </IonCol>
                </IonRow>
                <IonRow>
                    {[1, 2, 3, 4, 5].map((item) => (
                        <IonCol size="12" key={item}>
                            <IonCard button>
                                <IonCardContent>
                                    <IonGrid>
                                        <IonRow>
                                            <IonCol size="3">
                                                <img src={`https://picsum.photos/seed/${item}/100/100`} alt="Placeholder" style={{ borderRadius: '50%' }}/>
                                            </IonCol>
                                            <IonCol size="9">
                                                <IonText>
                                                    <h2>Title {item}</h2>
                                                </IonText>
                                                <p>
                                                    This is a description for card {item}. You can add any content here.
                                                </p>
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    ))}
                </IonRow>

               </IonGrid>
            </IonContent>
         </IonApp>
    );
}
export default Dashboard