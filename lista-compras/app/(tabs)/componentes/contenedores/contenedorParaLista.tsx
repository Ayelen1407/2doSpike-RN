import { FlatList, View, Text, StyleSheet } from 'react-native';
import ArticuloParaProductosDeCompra from '../contenidos/articuloParaProductoDeCompra';

export function ContenedorParaLista({ items, toggleItem, removeItem }: any) {
  return (
    <FlatList
      data={items}
      keyExtractor={(it) => it.id}
      renderItem={({ item }) => (
        <ArticuloParaProductosDeCompra
          item={item}
          alPresionar={() => toggleItem(item.id)}
          alMantener={() => removeItem(item.id)}
        />
      )}
      ListEmptyComponent={<Text style={styles.empty}>Sin productos. ¡Agregá el primero! 😊</Text>}
      ItemSeparatorComponent={() => <View style={styles.sep} />}
      contentContainerStyle={{ paddingBottom: 32 }}
    />
  );
}

const styles = StyleSheet.create({
  sep: { height: 1, backgroundColor: '#eee' },
  empty: { textAlign: 'center', color: '#777', marginTop: 24 },
});