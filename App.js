import React,{useState} from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Button,
  SafeAreaView,
  Image,
} from 'react-native';

export default function App() {
  const moedas=[
    require('./imgs/cara.jpg'),
    require('./imgs/coroa.jpg'),
  ]

  let iMoeda=1
  const maxGiros=20

  const [moedaAtual,setMoedaAtual] = useState(moedas[iMoeda])

  async function espera(tmp){
    function tempo(ms){
      return new Promise((resolve)=>{(setTimeout(resolve,ms))
        })
      }
      await tempo(tmp)
  }

  async function girarMoeda(){
    iMoeda = 0
    for (let i=0; i<(maxGiros*2); i++){
      iMoeda++
      if (iMoeda>1){
        iMoeda=0
    }
    await espera(0,2)
    setMoedaAtual(moedas[iMoeda])
    }
    let res=Math.floor(Math.random()*10)+1;
    if (res <= 5){
      res = 0
    }
    else{
      res = 1
    }
    setMoedaAtual(moedas[res])
  }

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.titulo }>Cara ou Coroa?</Text>
        <Image style={styles.imagem} source={moedaAtual}/>
        <Button
          title='Girar'
          onPress={()=>{girarMoeda()}}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  titulo:{
    fontSize:20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem:{
    width: 300,
    height: 300,
    margin: 15
  }

});
