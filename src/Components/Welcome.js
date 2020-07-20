import React, { useState } from 'react';
import {View, Text, Button, TextInput, Image, FlatList} from 'react-native';
import {getPokemon} from '../Services/Service';

export default Welcome = (props) => {
  const [pokemon, setPokemon] = useState('')
  const [data, setData] = useState([]) // Para recibir los datos del servicio
  const [message, setMessage] = useState('Please enter a Pokemon')

  const setSearch = () => {
    getPokemon(pokemon)
    .then(response => setData(response))
    .catch(err => (console.log(err), setMessage('Pokemon not found'))); // Error
    setPokemon('')
    setMessage('Please enter a Pokemon')
  }

  const capitalizeText  = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  return(
    <View style={style.containerPrincipal}>

      <Text style={style.titulo}>Pokédex</Text>

      <Text style={style.busquedaText}>Pokémon:</Text>
      <TextInput style={style.busquedaTextInput} onChangeText={value => setPokemon(value.toLowerCase())} value={pokemon} placeholder={message}></TextInput>
      <Button onPress={() => setSearch()} title="Search"></Button>


      <View style={style.containerResultado}>
        <Image style={style.imagen}
        source={!data.sprites?require('../images/pokeball.jpg') : {uri:data.sprites.front_default}}
        ></Image>

        <View>
          <Text style={style.textResultado}># {!data.id ? '' : data.id}</Text>
          <Text style={style.textResultado}>Name: {!data.name ? '' : capitalizeText(data.name)}</Text>
          <Text style={style.textResultado}>Height: {!data.height ? '' : data.height/10} m</Text>
          <Text style={style.textResultado}>Weight: {!data.weight ? '' : data.weight/10} kg</Text>
          {/*<Text style={style.textResultado}>Abilities: {!data.abilities ? '' : data.abilities[0].ability.name}</Text>
          <Text style={style.textResultado}>Type: {!data.types ? '' : data.types[0].type.name}</Text>*/}
          <Text style={style.textResultado}>Abilities:</Text>
          <FlatList
            data = {data.abilities} renderItem = {({item}) => (
              <View>
                <Text style={style.textResultado}>    * {capitalizeText(item.ability.name)}</Text>
              </View>
            )}
            keyExtractor = {(item, index) => {
              return index.toString();
            }}>
          </FlatList>

          <Text style={style.textResultadoType}>Type:</Text>
          <FlatList
            data = {data.types} renderItem = {({item}) => (
              <View>
                {
                  (() => {
                    if(item.type.name == 'normal'){
                      return (<Text style={[style.textResultadoBadges, {backgroundColor:'lightgrey'}]}>{capitalizeText(item.type.name)}</Text>)
                    }
                    else if(item.type.name == 'steel'){
                      return (<Text style={[style.textResultadoBadges, {backgroundColor:'gray'}]}>{capitalizeText(item.type.name)}</Text>)
                    }
                    else if(item.type.name == 'water'){
                      return (<Text style={[style.textResultadoBadges, {backgroundColor:'dodgerblue'}]}>{capitalizeText(item.type.name)}</Text>)
                    }
                    else if(item.type.name == 'bug'){
                      return (<Text style={[style.textResultadoBadges, {backgroundColor:'olivedrab'}]}>{capitalizeText(item.type.name)}</Text>)
                    }
                    else if(item.type.name == 'dragon'){
                      return (<Text style={[style.textResultadoBadges, {backgroundColor:'slateblue'}]}>{capitalizeText(item.type.name)}</Text>)
                    }
                    else if(item.type.name == 'electric'){
                      return (<Text style={[style.textResultadoBadges, {backgroundColor:'gold'}]}>{capitalizeText(item.type.name)}</Text>)
                    }
                    else if(item.type.name == 'ghost'){
                      return (<Text style={[style.textResultadoBadges, {backgroundColor:'indigo'}]}>{capitalizeText(item.type.name)}</Text>)
                    }
                    else if(item.type.name == 'fire'){
                      return (<Text style={[style.textResultadoBadges, {backgroundColor:'red'}]}>{capitalizeText(item.type.name)}</Text>)
                    }
                    else if(item.type.name == 'fairy'){
                      return (<Text style={[style.textResultadoBadges, {backgroundColor:'orchid'}]}>{capitalizeText(item.type.name)}</Text>)
                    }
                    else if(item.type.name == 'ice'){
                      return (<Text style={[style.textResultadoBadges, {backgroundColor:'skyblue'}]}>{capitalizeText(item.type.name)}</Text>)
                    }
                    
                    else if(item.type.name == 'fighting'){
                      return (<Text style={[style.textResultadoBadges, {backgroundColor:'firebrick'}]}>{capitalizeText(item.type.name)}</Text>)
                    }
                    
                    else if(item.type.name == 'grass'){
                      return (<Text style={[style.textResultadoBadges, {backgroundColor:'limegreen'}]}>{capitalizeText(item.type.name)}</Text>)
                    }
                    
                    else if(item.type.name == 'psychic'){
                      return (<Text style={[style.textResultadoBadges, {backgroundColor:'deeppink'}]}>{capitalizeText(item.type.name)}</Text>)
                    }
                    
                    else if(item.type.name == 'rock'){
                      return (<Text style={[style.textResultadoBadges, {backgroundColor:'darkgoldenrod'}]}>{capitalizeText(item.type.name)}</Text>)
                    }
                    
                    else if(item.type.name == 'dark'){
                      return (<Text style={[style.textResultadoBadges, {backgroundColor:'darkslategrey'}]}>{capitalizeText(item.type.name)}</Text>)
                    }
                    
                    else if(item.type.name == 'ground'){
                      return (<Text style={[style.textResultadoBadges, {backgroundColor:'goldenrod'}]}>{capitalizeText(item.type.name)}</Text>)
                    }
                    
                    else if(item.type.name == 'poison'){
                      return (<Text style={[style.textResultadoBadges, {backgroundColor:'darkmagenta'}]}>{capitalizeText(item.type.name)}</Text>)
                    }
                    
                    else if(item.type.name == 'flying'){
                      return (<Text style={[style.textResultadoBadges, {backgroundColor:'cornflowerblue'}]}>{capitalizeText(item.type.name)}</Text>)
                    }

                  })
                ()}
                
              </View>
            )}
            keyExtractor = {(item, index) => {
              return index.toString();
            }}>
          </FlatList>
          
          {/*console.log(data.abilities)*/}
        </View> 
        
      </View>   
      
    </View>
  )
}

const style = {

  containerPrincipal: {
    flex:1,
    backgroundColor: 'thistle',
    alignItems: 'center'
  },
  titulo: {    
    color: 'royalblue',
    fontWeight: 'bold',
    fontSize: 40,
  },
  busquedaText: {
    color: 'royalblue',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 30,
    marginHorizontal:20,
    alignSelf: 'flex-start'
  },
  busquedaTextInput: {
    fontSize: 20,
    color: 'royalblue',
    borderWidth: 1,
    alignSelf: 'stretch',
    marginBottom: 10,
    marginHorizontal: 20
  },  
  containerResultado: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    marginTop: 110,
    marginHorizontal: 20
  },
  imagen: {
    width: 150,
    height: 150
  },
  textResultado: {
    fontSize: 20,
    color: 'royalblue',
    marginHorizontal: 20
  },
  textResultadoType: {
    fontSize: 20,
    color: 'royalblue',
    marginHorizontal: 20,
    marginTop: -10
  },
  textResultadoBadges: {
    fontSize: 20,
    color: 'white',
    marginHorizontal: 20,
    borderWidth: 1,
    borderRadius: 13,
    textAlign: 'center',
    marginTop: 10
  }
}