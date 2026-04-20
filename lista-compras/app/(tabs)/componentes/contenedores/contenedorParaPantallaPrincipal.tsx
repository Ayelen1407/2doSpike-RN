import { View, StyleSheet } from "react-native";

export default function ContenedorParaPantallaPrincipal ({ children }: any) {
    return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
    container: {flex: 1, padding: 16, gap: 12, backgroundColor: "#ffff"},
});