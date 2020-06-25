import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function Cotizacion({resultado}) {
  if (Object.keys(resultado).length === 0) return null;

  return (
    <View style={styles.resultado}>
      <Text style={[styles.texto, styles.precio]}>
        <Text style={styles.span}>{resultado.PRICE}</Text>
      </Text>
      <Text style={styles.texto}>
        {' '}
        Precio más alto del día:{' '}
        <Text style={styles.span}>{resultado.HIGHDAY}</Text>
      </Text>
      <Text style={styles.texto}>
        {' '}
        Precio más bajo del día:{' '}
        <Text style={styles.span}>{resultado.LOWDAY}</Text>
      </Text>
      <Text style={styles.texto}>
        {' '}
        Variación últimas 24 horas:{' '}
        <Text style={styles.span}>{resultado.CHANGEPCT24HOUR} % </Text>
      </Text>
      <Text style={styles.texto}>
        Última Actualización:{' '}
        <Text style={styles.span}>{resultado.LASTUPDATE}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  resultado: {
    backgroundColor: '#5E49E2',
    padding: 20,
  },
  texto: {
    color: 'white',
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    marginBottom: 10,
  },
  precio: {
    fontSize: 35,
  },
  span: {
    fontFamily: 'Lato-Black',
  },
});
