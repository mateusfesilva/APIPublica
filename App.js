import React,{useState,useEffect} from 'react';
import { Font } from 'expo';
import { StyleSheet, Text, View, FlatList, Image, ScrollView} from 'react-native';

const request = async(callback) => {
  const response = await fetch('https://api.disneyapi.dev/characters');
  const parsed = await response.json();
  callback(parsed.data);

}

export default function App()  {
  
  const [anime,setAnime] = useState([]);

  useEffect(()=>{

    request(setAnime);

  },[]);

  return (

    <View style={styles.container}>
    <ScrollView>

      <Text style={styles.titulo}>Séries da Disney</Text>

      <FlatList

      data={anime}

      keyExtractor={(item)=> item.videoGames.toString()}

      renderItem={({item})=>
      
      <View style={styles.container2}>
      <Text style={styles.texto}>

        Nome da série: {item.tvShows} {'\n'}

      </Text>
      </View>
      }
      />
    </ScrollView>
    </View>

  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },

    container2: {
    flex:2,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#171717',
    borderRadius: 5,
    marginTop: 15
  },

  titulo:{
    marginTop: 50,
    color: 'ccc',
    textAlign: 'center',
    fontSize: 40
  },

  texto:{
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20
  }

});