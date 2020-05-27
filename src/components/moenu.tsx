import React, { useState } from 'react';
import { RouteComponentProps, withRouter, useLocation } from 'react-router';

import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonToggle } from '@ionic/react';
import { hammer, moonOutline, help, informationCircleOutline, logIn, logOut, mapOutline, peopleOutline, person, personAdd, statsChartOutline, cartOutline, pulseOutline, optionsOutline } from 'ionicons/icons';
import './Menu.css'


const routes = {
    appPages: [
        { title: 'Preferences', path: '/AjoutPreference', icon: pulseOutline },
        { title: 'FrameWork & Informatique', path: '/tabs/tab1', icon: optionsOutline },
        { title: 'Organisations', path: '/tabs/tab2', icon: optionsOutline },
        { title: 'Topics', path: '/tabs/tab3', icon: optionsOutline },
        { title: 'About', path: '/tabs/tab1', icon: informationCircleOutline },
        { title: 'Contact', path: '/contact', icon: help },
    ]
};

interface Pages {
    title: string,
    path: string,
    icon: string,
}
type Props = RouteComponentProps<{}>;

const Menue = ({ history }: Props) => {
    const [activePage, setActivePage] = useState(routes.appPages[0].title);


    function renderlistItems(list: Pages[]) {
        return list
            .filter(route => !!route.path)
            .map(page => (

                <IonMenuToggle key={page.title} menu="first" autoHide={false}>
                    <IonItem button
                        color={page.title === activePage ? 'primary' : ''}
                        onClick={() => navigateToPage(page)}>

                        <IonIcon slot="start" name={page.icon}></IonIcon>
                        <IonLabel>
                            {page.title}
                        </IonLabel>
                    </IonItem>
                </IonMenuToggle>
            ));
    }

    const navigateToPage = (page: Pages) => {
        history.push(page.path);
        setActivePage(page.title);
    }



    return (
        <IonMenu type="overlay" contentId="main" menuId="first" side="start">

            <IonContent forceOverscroll={false}>

                <IonList>
                    <IonListHeader>Menu</IonListHeader>

                    {renderlistItems(routes.appPages)}
                </IonList>

            </IonContent>
        </IonMenu>


    );
};


export default withRouter(
    Menue
);