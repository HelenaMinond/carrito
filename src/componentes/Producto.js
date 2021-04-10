import React from 'react';
import {Button, CardText, CardSubtitle, CardTitle, CardBody, CardImg, Col, Card} from 'reactstrap';
import './Producto.css';

function Producto(props) {
    return(
        <Col sm="4">
        <Card className="Card" body outline color="primary">
            <CardImg src={props.imagen}/>
            <CardBody>
                <CardTitle>{props.titulo}</CardTitle>
                <CardSubtitle><b>Valor: </b>{props.precio}</CardSubtitle>
                <CardText>
                    {props.descripcion}
                </CardText>
                <Button color="info"className="Button">Comprar</Button>
                <Button color="success"className="Button">Ver ficha</Button>
            </CardBody>
        </Card>
        </Col>
    );
}

export default Producto;