import ContenedorParaPantallaPrincipal from './componentes/contenedores/contenedorParaPantallaPrincipal';
import FormularioParaProductoNuevo from './componentes/contenedores/formularioParaProductoNuevo';
import ContenedorParaLista from './componentes/contenedores/contenedorParaLista';
import TituloDePagina from './componentes/contenidos/tituloDePagina';
import useItemsDeCompra from './hooks/usarProductos';

export default function App() {
  const { productos, agregarProducto, cambiarProducto, eliminarProducto } = useItemsDeCompra();

  return (
    <ContenedorParaPantallaPrincipal>
      <TituloDePagina />
      <FormularioParaProductoNuevo alCompletarFormulario={agregarProducto} />
      <ContenedorParaLista
        items={productos}
        toggleItem={cambiarProducto}
        removeItem={eliminarProducto}
      />
    </ContenedorParaPantallaPrincipal>
  );
}