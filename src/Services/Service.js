import axios from 'axios'

async function getPokemon(pokemon){

    try{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        return response.data
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getPokemon
}