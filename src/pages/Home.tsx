import { IonButton, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import React from "react";
import { Redirect, Route } from "react-router";
import Dashboard from "./Dashboard";
import Cart from "./Cart";
import Orders from "./Orders";
import { homeOutline, fileTrayStackedOutline, cartOutline } from "ionicons/icons";

const Home: React.FC = () => {
    return(
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Redirect exact path="/home" to='/dashboard' />
                   <Route path='/dashboard' render={() => <Dashboard/>} exact={true} />
                   <Route path='/orders' render={() => <Orders/>} exact={true} />
                   <Route path='/cart' render={() => <Cart/>} exact={true} />
                </IonRouterOutlet>

                <IonTabBar slot="bottom">
                    <IonTabButton tab="dashboard" href="/dashboard">
                        <IonIcon icon={homeOutline} />
                        <IonLabel>Dashboard</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="orders" href="/orders">
                        <IonIcon icon={fileTrayStackedOutline} />
                        <IonLabel>Orders</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="cart" href="/cart">
                        <IonIcon icon={cartOutline} />
                        <IonLabel>Cart</IonLabel>
                    </IonTabButton>

                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    );
};

export default Home;