import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import axios from '../../../axios';

import styles from './styles';

const Detail = props => {
  useEffect(() => {
    console.log(JSON.parse(props.details));
  }, []);

  const detailList = JSON.parse(props.details).map(v => {
    return (
      <View key={v.title}>
        <View style={styles.title}>
          <Text>{v.title}</Text>
        </View>
        <Text>{v.text}</Text>
      </View>
    );
  });

  return <View style={styles.container}>{detailList}</View>;
};

export default Detail;
