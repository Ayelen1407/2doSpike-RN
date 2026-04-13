import { useState } from "react";
import { View } from "react-native";
import { InputParaProducto } from "../contenidos/inputParaProducto"; 
import { BotonParaAgregarProducto } from "../contenidos/botonParaAgregarProducto";

export default function FormularioParaItemNuevo({
  alCompletarFormulario,
}: {
  alCompletarFormulario: (texto: string) => void;
}) {
  const [texto, setTexto] = useState("");

  const handleAgregar = () => {
    alCompletarFormulario(texto);
    setTexto("");
  };

  return (
    <View style={{ flexDirection: "row", gap: 8 }}>
      <InputParaProducto
        valor={texto}
        alCambiar={setTexto}
        alEnviar={handleAgregar}
      />
      <BotonParaAgregarProducto alPresionar={handleAgregar} />
    </View>
  );
}