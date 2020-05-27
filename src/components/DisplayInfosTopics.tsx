import React from 'react';
import { IonLabel, IonList, IonItem } from '@ionic/react';
import { useLocation } from 'react-router';

interface DataFormat {
    items: Project[],
}

interface Project {
    name: string,
    description: string,
    created_by: string,
}



const DisplayInfos: React.FC<DataFormat> = ({ items }) => {
    const location = useLocation()


    return (

        <IonList>

            {items ? (items
                .map((item) => (


                    <IonItem >

                        <IonLabel>
                            <h2>{item.name}</h2>
                            <p>Created by :  {item.created_by}</p>
                            <p>Description : {item.description}</p>
                        </IonLabel>
                    </IonItem>
                ))) : <div>No data available for this research</div>}
        </IonList>

    )
}



export default DisplayInfos;

