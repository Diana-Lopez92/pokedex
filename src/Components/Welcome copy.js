import React, { useState } from 'react';
import {View, Text, Button, TextInput, Image} from 'react-native';
import {getPokemon} from '../Services/Service';

export default Welcome = (props) => {
  const [pokemon, setPokemon] = useState('')
  const [data, setData] = useState([]) // Para recibir los datos del servicio
  const [loading, setLoading] = useState(true)

  const setSearch = () => {
    getPokemon(pokemon)
    .then(response => setData(response))
    .catch(err => console.log(err)); // Error
    setLoading(false)

    //console.log("Pokemon info: ", data.sprites.front_default);
    //console.log("Pokemon info: ", data)
    //const test = data.sprites;
    //console.log("Sprites: ", test)
    //const front_default = test;
    //console.log("Url: ", front_default)
  }

  const capitalizeText  = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  return(
    <View style={{backgroundColor:'azure'}}>
      <View style={style.containerTitulo}>
        <Text style={style.titulo}>Pokédex</Text>
      </View>
      <View style={style.containerBusqueda}>
        <Text style={style.busquedaText}>Pokémon:</Text>
        <TextInput style={style.busquedaTextInput} onChangeText={value => setPokemon(value.toLowerCase())}></TextInput>
      </View>
      <View style={style.containerBoton}>
        <Button onPress={() => setSearch()} title="Search"></Button>
      </View>

      <View style={style.containerResultado}>
        <Image style={style.imagen}
        source={!data.sprites?require('../images/pokeball.jpg') : {uri:data.sprites.front_default}}
        ></Image>

        <View>
          <Text style={style.textResultado}>Name: {!data.name ? '' : capitalizeText(data.name)}</Text>
          <Text style={style.textResultado}>Height: {!data.height ? '' : data.height/10}m</Text>
          <Text style={style.textResultado}>Weight: {!data.weight ? '' : data.weight/10}kg</Text>
          <Text style={style.textResultado}>Abilities: {!data.abilities ? '' : data.abilities[1].ability.name}</Text>
          <Text style={style.textResultado}>Type: {!data.types ? '' : data.types[0].type.name}</Text>

          {/*
            data.abilities.map((item, index) => (
              <Text key={index}>Abilities2: {item.ability.name}</Text>
            ))
            */}
          
          {/*console.log(data.abilities.map(x => x.ability.name))*/}

          {/*
            data.abilities.forEach(item => 
              <Text>Abilities: {item.ability.name}</Text>
            )
            */}

          {/*
            data.abilities.map((item) =>
              <Text>Abilities: {item.ability.name}</Text>
            )
          */}

          {/*
            data.abilities.map((item, index) =>
              <Text key={index}>Abilities: {item.ability.name}</Text>
            )
          */}

          {/*
            data.types.map((type, index) =>

              type.map((item, i) =>
                <Text key={index}>Type: {item.name}</Text>              
              )
            )
          */}

          
          {/*console.log(data.abilities)*/}
        </View>
        
        
      </View>
      
    </View>
  )
}


const style = {
  containerTitulo: {
    flex: 1,
    alignItems: 'center'
  },
  titulo: {    
    color: 'steelblue',
    fontWeight: 'bold',
    fontSize: 40,
  },
  containerBusqueda: {
    marginTop: 70,
  },
  busquedaText : {
    color: 'steelblue',
    fontWeight: 'bold',
    fontSize: 20
  },
  busquedaTextInput : {
    fontSize: 20,
    color: 'steelblue',
    borderWidth: 1
  },
  containerBoton: {
    marginTop: 10
  },
  containerResultado: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 200
  },
  imagen: {
    width: 150,
    height: 150,
    marginHorizontal: 10
  },
  textResultado: {
    fontSize: 20,
    color: 'steelblue',
    marginHorizontal: 30
  } 
}