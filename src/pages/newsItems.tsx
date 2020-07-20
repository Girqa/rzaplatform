import React from "react";
import { IonContent, IonHeader, IonItem, IonImg, IonButton, IonList, IonTitle } from '@ionic/react';
import Items from "./Items";


class NewsComps extends React.Component{
  constructor(props:Object) {
    super(props);
   this.state = {
    item1: "https://sun2-3.userapi.com/NIvPEOi3RVofNAaI4UtfPU4erKqnAQFWdFEYTg/2VSjr4PQNEs.jpg",
    item2: "https://sun2-4.userapi.com/vQvbVYQjjRXslxo91Vzfz7QElmxhnolo3k3jxg/aeX3z7ETYao.jpg",
    item3: "https://sun1-17.userapi.com/q-Kk9Om39NIYFfk6NXFDdDs0jQIQtJ-bxiRSAw/n3E7sQDjoOc.jpg",
    item4: "https://sun1-30.userapi.com/pYf3VKxExg0Md29EPW3aO3UZ1vB2pJ5_grVYIA/oF30vHh2ccw.jpg",
    item5: "https://sun2-4.userapi.com/GvI7-QUMq6XoVOTJmFD7IOqLkenJX7dXa4IDaQ/7Uc2qPXnKtY.jpg",
    item6: "https://sun2-3.userapi.com/HzIwv503YGp6nnI64B7AKh2X1HH7CFUJMF5a4w/St7p9A4vLsY.jpg",
    item7: "https://sun2-3.userapi.com/i1Hqd_nFAXnRKAKW2d5FippyhoXuCpvzT_oUNA/aQttC4XAq8Q.jpg",
    item8: "https://sun2-3.userapi.com/NoYfrIi2xPF5vzFokWRSksqIYyI8KT_wCy6TkA/7EY7imJnoKI.jpg",
    item9: "https://sun1-99.userapi.com/5R8V3wkIVARFIv3nS-4J8fRsVzp-_ybcKJ3DnA/_01_L4rp22Q.jpg",
    item10: "https://sun2-4.userapi.com/pT81PwTUxaM2ik6cX-w9ZCIcKM9SogePQrgOqg/gBdxA1WT-8k.jpg",
   };
  }

  render(){
    return(
      <IonContent>
        <header  className="header">
          <h2>Новости</h2>
        </header>
          <IonList className="news">
            <IonButton className="newsButtom">🠜</IonButton>
            
            <Items links={this.state} />
  
            <IonButton className="newsButtom">🠞</IonButton>
          </IonList>
      </IonContent>
  )}
}

export default NewsComps;
