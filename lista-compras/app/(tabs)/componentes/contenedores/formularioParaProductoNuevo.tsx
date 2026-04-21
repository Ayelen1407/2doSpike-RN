import { useState } from "react";
import { View } from "react-native";  
import InputParaProducto from "../contenidos/inputParaProducto";
import BotonParaAgregarProducto from "../contenidos/botonParaAgregarProducto";

export default function FormularioParaProductoNuevo({
  alCompletarFormulario,
}: {
  alCompletarFormulario: (texto: string) => void;
}) {
  const [texto, setTexto] = useState("");

  const manejarEnvio = () => {
    const trimmed = texto.trim();
    if (trimmed) {
      alCompletarFormulario(trimmed);
      setTexto("");
    }
  };

  return (
    <View style={{ flexDirection: "row", gap: 8 }}>
      <InputParaProducto
        valor={texto}
        alCambiar={setTexto}
        alEnviar={manejarEnvio}
      />
      <BotonParaAgregarProducto alPresionar={manejarEnvio} />
    </View>
  );
}