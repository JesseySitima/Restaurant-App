import { IonApp, IonButton, IonContent, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar, IonSearchbar, IonText, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from "@ionic/react";
import React from "react";
import { personCircleOutline } from "ionicons/icons";
import starterImage from '../assets/images/soup.jpg';
import mainsImage from '../assets/images/batala.jpg';
import desertImage from '../assets/images/cake2.png';
import specialImage from '../assets/images/mbalanga.jpg';

const Dashboard: React.FC = () => {

    const categories = [
        {
            "name": "Starters",
            "image": starterImage,
            "dishes": [
                {
                    "name": "Dish 1",
                    "description": "Description of Dish 1"
                },
                {
                    "name": "Dish 2",
                    "description": "Description of Dish 2"
                }
            ]
        },
        {
            "name": "Mains",
            "image": mainsImage,
            "dishes": [
                {
                    "name": "Dish 3",
                    "description": "Description of Dish 3"
                },
                {
                    "name": "Dish 4",
                    "description": "Description of Dish 4"
                }
            ]
        },
        {
            "name": "Dessert",
            "image": desertImage,
            "dishes": [
                {
                    "name": "Dish 3",
                    "description": "Description of Dish 3"
                },
                {
                    "name": "Dish 4",
                    "description": "Description of Dish 4"
                }
            ]
        },
        {
            "name": "Specials",
            "image": specialImage,
            "dishes": [
                {
                    "name": "Dish 3",
                    "description": "Description of Dish 3"
                },
                {
                    "name": "Dish 4",
                    "description": "Description of Dish 4"
                }
            ]
        }
    ];


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
                    {categories.map((category, index) => (
                        <IonCol size="12" key={index}>
                            <IonCard button>
                                <IonCardContent>
                                    <IonGrid>
                                        <IonRow>
                                            <IonCol size="3">
                                                <img src={category.image} alt="Placeholder" style={{ borderRadius: '50%', }}/>
                                            </IonCol>
                                            <IonCol size="9">
                                                <IonText>
                                                    <h2>{category.name}</h2>
                                                </IonText>
                                              
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