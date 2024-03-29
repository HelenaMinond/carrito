import React from 'react';
import {Badge, Button, PopoverBody, PopoverHeader, Popover, Table} from 'reactstrap';
import {listaCarrito} from '../listaCarrito';

class Carro extends React.Component{
  constructor(){
    super();
    this.state = {
      popoverOpen: false,
      listaCarrito
    };

    this.toggle = this.toggle.bind(this);
    //console.log(props.props);
  }

  toggle(){
    this.setState(prevState => ({
      popoverOpen: !prevState.popoverOpen
    }));
  }

  render(){ 
    const arregloCarrito = this.state.listaCarrito.map(
      (listaCarrito, i) => {
        return (
          <tr>
            <td>{(i += 1)}</td>
            <td>{listaCarrito.titulo}</td>
            <td>{listaCarrito.precio}</td>
          </tr>
        );
      }
    )
    return(
      <div>
        <Button id="Popover1" color="info" >
          <span className="material-icons">shopping_cart</span>
          <Badge color="secondary">{arregloCarrito.length}</Badge>
        </Button>
        <Popover target="Popover1" placement="bottom" isOpen={this.state.popoverOpen} toggle={this.toggle}>
          <PopoverHeader>Listado de compras</PopoverHeader>
          <PopoverBody>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Producto</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                {arregloCarrito}
              </tbody>
            </Table>
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}

export default Carro;