import { FlatList, View, Text, StyleSheet } from 'react-native';
import ArticuloParaProductoDeCompra from '../contenidos/articuloParaProductoDeCompra';
import { Producto } from '../../tipos/productos';

export default function ContenedorParaLista({
  items,
  toggleItem,
  removeItem,
}: {
  items: Producto[];
  toggleItem: (id: string) => void;
  removeItem: (id: string) => void;
}) {
  return (
    <FlatList
      data={items}
      keyExtractor={(it) => it.id}
      renderItem={({ item }) => (
        <ArticuloParaProductoDeCompra
          item={item}
          alPresionar={() => toggleItem(item.id)}
          alMantenerPresionado={() => removeItem(item.id)}
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