import ContenedorParaPantallaPrincipal from "./componentes/contenedores/contenedorParaPantallaPrincipal";
import TituloDePagina from "./componentes/contenidos/tituloDePagina";
import FormularioParaProductoNuevo from "./componentes/contenedores/formularioParaProductoNuevo";
import ListaDeCompras from "./componentes/contenedores/listaDeCompras";
import usarProductosDeCompra from "./hooks/usarProductos";

export default function App() {
  const { productos, eliminarProducto, cambiarProducto, agregarProducto } = usarProductosDeCompra();

  return (
    <ContenedorParaPantallaPrincipal>
      <TituloDePagina/>

      <ListaDeCompras
      items= {productos}
      alPresionarUnProducto={cambiarProducto}
      alMantenerPresionSobreUnItem={eliminarProducto}/>

      <FormularioParaProductoNuevo
      alCompletarFormulario={agregarProducto}/>

    </ContenedorParaPantallaPrincipal>
  );
}