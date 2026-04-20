import { TextInput, StyleSheet } from 'react-native';

export default function InputParaProducto({ valor, alCambiar, alEnviar }: any) {
  return (
    <TextInput
      value={valor}
      onChangeText={alCambiar}
      placeholder="Agregar producto (ej: Leche)"
      style={styles.input}
      returnKeyType="done"
      onSubmitEditing={alEnviar}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
  },
});