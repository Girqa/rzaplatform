import React from "react";
import { IonContent, IonHeader, IonItem, IonImg, IonButton, IonList, IonTitle } from '@ionic/react';


var news = [];

var articles = "1, #, https://sun2-3.userapi.com/NIvPEOi3RVofNAaI4UtfPU4erKqnAQFWdFEYTg/2VSjr4PQNEs.jpg;"+
"2, #, https://sun2-4.userapi.com/vQvbVYQjjRXslxo91Vzfz7QElmxhnolo3k3jxg/aeX3z7ETYao.jpg";

var ListOfArticles = articles.split(";");
for (var i=0;i<ListOfArticles.length;i++){
	let args = ListOfArticles[i].split(", ");
	news.push({
		name:args[0],
		src:args[1],
		preview:args[2]});
}


const NewsScroller = (news:[]) =>
	<IonContent>
      <IonHeader className="header">
        <IonTitle>Новости</IonTitle>
      </IonHeader>
       <IonList className="news">
        <IonButton className="newsButtom">🠜</IonButton>
        
       <IonButton className="newsButtom">🠞</IonButton>
      </IonList>
    </IonContent>;

export default NewsScroller;
