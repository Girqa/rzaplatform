import React from "react";
import { IonContent, IonRow, IonCol, IonHeader, IonItem, IonImg, IonButton, IonList, IonTitle } from '@ionic/react';
import './Tab1.css';

function Items(props: any){
	let k = Object.keys(props.links);
	var items = props.links;
	return (<IonRow>
			{k.map((src, index) => (
				<IonCol  className="col" >
        			  <img className="img"  src={items[src]}/>
        		</IonCol>
			))}
			</IonRow>
		);
};

export default Items;