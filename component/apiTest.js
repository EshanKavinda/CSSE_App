import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

export default Apitest = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  //http://localhost:3001/category/getall
  //https://reactnative.dev/movies.json
  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  //   useEffect(() => {
  //     fetch('http://10.101.147.59:3001/category/getall')
  //       .then((response) => response.json())
  //       .then((json) => {
  //         console.log(json);
  //       })
  //       .catch((error) => console.error(error));
  //   }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}
    </View>
  );
};
