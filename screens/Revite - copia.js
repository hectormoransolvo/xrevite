import { useContext , useEffect } from 'react';
import { Text, View } from 'react-native';
import { useState } from "react";
import axios from "axios";
import  GrillaVencimientos  from '../components/GrillaVencimientos';

function Revite() {
 
  let mostrarvencimientos;
 
  const [vencimientos,setVencimientos] = useState([])

 

  useEffect(async () => {
 
    let mostrarvencimientos='';
 
    let cCadena = "http://www.revite.com.ar/ven/33708907079";
 
    
    await axios
      .get(
        cCadena,
        //{ auth: { username: apiu, password: apit } }
      )

      .then((respuesta) => {
        //console.log('respuesta.data:', respuesta.data);
        if (respuesta.data) {
          console.log("LINEA 38",respuesta.data);

          setVencimientos( respuesta.data );
          //mostrarvencimientos =  <GrillaVencimientos param_vencimientos={vencimientos}/>         ;
 
        }
      })
      .catch(err => {
        console.log(err);
      });},[]);

  

  return (
      <View>
          <Text>
          Revité
          </Text>
          <GrillaVencimientos vencimientos={vencimientos}/>  

           </View>
 
  );
}

export default Revite;
