import { IonApp, IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

const Cart: React.FC = () => {
    return(
        <IonApp>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Cart
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent></IonContent>
        </IonApp>
    );
}
export default Cart