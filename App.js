import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createContext, useContext, useEffect, useState } from 'react';
import { fetchAllPokemon, fetchPokemonDetailsByName } from './api';

const PokemonContext = createContext({
  search: '',
  setSearch: () => {},
  pokemonIndex: [],
  setPokemonIndex: () => {},
});

function PokemonIndex() {
  const context = useContext(PokemonContext);
  const { setPokemonIndex: setPokemonIndexContext } = context
  const [pokemonIndex, setPokemonIndex] = useState([]);

  useEffect(() => {
    fetchAllPokemon().then(({ results }) => {
      setPokemonIndex(results);
      setPokemonIndexContext(results);
    });
  }, [setPokemonIndexContext]);

  return (
    <FlatList
      style={{ flex: 1 }}
      contentInsetAdjustmentBehavior={'automatic'}
      keyExtractor={(pokemon) => pokemon.name}
      data={pokemonIndex.filter((p) => !p.name.includes(context.search.toLowerCase()))}
      renderItem={({ item: pokemon }) => <PokemonListItem pokemon={pokemon} />}
    />
  );
}

const PokemonListItem = ({ pokemon }) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigate('PokemonDetails', { pokemon })}>
      <View style={{ flex: 1 }}>
        <Text>{pokemon.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

function PokemonDetails({ route, navigation }) {
  return (
    <View style={{ flex: 1 }}>
       <Text>Pokemon details here</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  const [pokemonIndex, setPokemonIndex] = useState([]);
  const [search, setSearch] = useState('');

  return (
    <NavigationContainer>
      <PokemonContext.Provider value={{ pokemonIndex, setPokemonIndex, search, setSearch }}>
        <Stack.Navigator>
          <Stack.Screen
            name="Pokedex"
            options={{
              headerSearchBarOptions: {
                onChangeText: (e) => {
                  setSearch(e.nativeEvent.text);
                },
              },
            }}
            component={PokemonIndex}
          />
          <Stack.Screen
            name="PokemonDetails"
            options={{
              headerTitle: 'Pokemon Details',
            }}
            component={PokemonDetails}
          />
        </Stack.Navigator>
      </PokemonContext.Provider>
    </NavigationContainer>
  );
}

export default App;
