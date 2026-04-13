import { Pressable, Text, StyleSheet } from 'react-native';

export function BotonParaAgregarProducto({ alPresionar }: any) {
  return (
    <Pressable style={styles.addBtn} onPress={alPresionar}>
      <Text style={styles.addTxt}>Agregar</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  addBtn: {
    backgroundColor: '#1e90ff',
    paddingHorizontal: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addTxt: { color: '#fff', fontWeight: '600' },
});