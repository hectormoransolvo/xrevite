// PANTALLA CONEXION API 
// FECHA DE INICIO DEL PROYECTO:  
// FECHA ULTIMA MODIF          : 19/5/2022
// CONEXION AXIOS API
//  -> LLAMA A UGRID 
import { useContext , useEffect } from 'react';
import { Text, View } from 'react-native';
import { useState } from "react";
import axios from "axios";
import  GrillaVencimientos  from '../components/GrillaVencimientos';
import Ugrid from '../components/Ugrid'

function Revite( props ) {

  console.log("props REVITE :", props.route.params.cliente );   

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
          //console.log("LINEA 38",respuesta.data);

          setVencimientos( respuesta.data );
          //mostrarvencimientos =  <GrillaVencimientos param_vencimientos={vencimientos}/>         ;
 
        }
      })
      .catch(err => {
        console.log(err);
      });},[]);

  

  return (
      <View>

          <Ugrid 
            datos={vencimientos}
            TextoSinDatos="No hay vencimientos!"
          > </Ugrid>

      </View>
 
  );
}

export default Revite;
