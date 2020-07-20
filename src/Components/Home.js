import React from 'react';
import {Text, View, ImageBackground, Button} from 'react-native';

export default Home = props => {

  //console.log(props)
  return (
    <View>
      <ImageBackground 
        style={style.fondo}
        source={require('../images/pikachuBackground.png')}
        resizeMode='cover'>

        <View style={style.boton}>
          <Text style={style.titulo}>Pokédex</Text>

          <Button color="green"
            title="Click to Search"
            onPress={()=>props.switchScreen('Welcome')}
          ></Button>
        </View>

      </ImageBackground>
    </View>
  )
}

const style = {
  fondo: {
    height: '100%',
    width: '100%'
  },
  boton: {
    flex: 1,
    alignContent: 'center',
    marginTop: 0,
    marginHorizontal: 100
  },
  titulo: {
    marginTop: 8,
    marginHorizontal: 25,
    color: 'royalblue',
    fontWeight: 'bold',
    fontSize: 40,
  }
}
