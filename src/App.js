import React from 'react';
import Producto from './componentes/Producto';
import './App.css';
import {Container, Row} from 'reactstrap';
import Navegacion from './componentes/Navegacion';
import {listaProductos} from './listaProductos.json';

//console.log(listaProductos);
//function App() {
class App extends React.Component{
  constructor(){
    super();

    this.state = {
      listaProductos
    };
  }
  render(){
    const arregloComponentes = this.state.listaProductos.map(
      (listaProductos, i) => {
        return(
          <Producto
            key={i}
            titulo={listaProductos.titulo}
            imagen={listaProductos.imagen}
            descripcion={listaProductos.descripcion}
            precio={listaProductos.precio}
            stock={listaProductos.stock}
          />
        )
      }
    );

    return (
      <div>
      <Container>
        <Navegacion titulo="Mi primer sitio de compras en React"/>
        <Row>
          {arregloComponentes}
          {/* <Producto 
            titulo="Headphones Black and Blue" 
            imagen="https://image.freepik.com/vector-gratis/diseno-fondo-cascos_1063-131.jpg" 
            descripcion="Audifonos bluetooth duración máxima 20 horas." 
            precio="39.000"
          />
          <Producto
            titulo="Geneo+" 
            imagen="https://cdn.shopify.com/s/files/1/2676/2908/products/TriPollar_Geneo_FacialDeviceKit_Green_Ecomm_1_1_1200x_c4211d78-0d78-4985-aa05-eaa18e631210_2000x.jpg?v=1598319655" 
            descripcion="Equipo de tratamiento facial profesional." 
            precio="179.000"
          />
          <Producto
            titulo="Huion Inspiroy H950P" 
            imagen="https://http2.mlstatic.com/D_NQ_NP_719628-MLC44924182329_022021-O.webp" 
            descripcion="Tableta digitalizadora de última generación. Incluye funda." 
            precio="79.990"
          />
          <Producto
            titulo="Cerradura Tecnológica Samsung" 
            imagen="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS3Zg3eWE9B_-h3A_kHNGp8j1NSFbvanp-emjBW7C_ieHi2suLyx71nKFQ5nIoeYd_EvmvRp6OO4-jwGFCpSiaiZ2X_RkDeD66amHdUdTAohVfkj02q30qfdQ&usqp=CAE" 
            descripcion="Cerrojo digital con programación de contraseña." 
            precio="39.000"
          /> */}
          
        </Row>
      </Container>
      </div>
    );
  }
}

export default App;
