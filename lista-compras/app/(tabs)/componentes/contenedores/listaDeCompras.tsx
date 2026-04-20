import { FlatList, View, Text, StyleSheet } from 'react-native';
import ArticuloParaProductoDeCompra  from "../contenidos/articuloParaProductoDeCompra";
import { Producto } from '../../tipos/productos';

export default function ListaDeCompras({
    items,
    alPresionarUnProducto,
    alMantenerPresionSobreUnItem,
  }: {
    items: Producto[];
    alPresionarUnProducto: (id: string) => void;
    alMantenerPresionSobreUnItem: (id: string) => void;
  }) {
    return (
      <FlatList
        data={items}
        keyExtractor={(it) => it.id}
        renderItem={({ item }) => (
          <ArticuloParaProductoDeCompra
            item={item}
            alPresionar={() => alPresionarUnProducto(item.id)}
            alMantenerPresionado={() => alMantenerPresionSobreUnItem(item.id)}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Sin productos. ¡Agregá el primero! 😊</Text>
        }
        ItemSeparatorComponent={() => <View style={styles.sep} />}
        contentContainerStyle={{ paddingBottom: 32 }}
      />
    );
  }
  
  const styles = StyleSheet.create({
    sep: { height: 1, backgroundColor: "#eee" },
    empty: { textAlign: "center", color: "#777", marginTop: 24 },
  });