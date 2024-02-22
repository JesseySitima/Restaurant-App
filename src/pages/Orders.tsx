import { IonApp, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

const Orders: React.FC = () => {
    return(
        <IonApp>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Orders</IonTitle>
                </IonToolbar>
            </IonHeader>
        </IonApp>
    );
}
export default Orders