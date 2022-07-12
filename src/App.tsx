import React from 'react';
import './App.css';
import Breadcrumb from './components/react-dsgov/Breadcrumb';
import Button from './components/react-dsgov/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Card from './components/react-dsgov/Card';
import Row from './components/react-dsgov/Row';
import Container from './components/react-dsgov/Container';
import Col from './components/react-dsgov/Col';

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Breadcrumb>
            <Breadcrumb.Item home></Breadcrumb.Item>
            <Breadcrumb.Item href="#" target="_blank">Teste 1</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Página Ancestral Com Título Grande</Breadcrumb.Item>
          </Breadcrumb>
        </Row>

        <Row>
          <Button primary><FontAwesomeIcon icon={faCoffee} className="mr-1" />Primário</Button>
          <Button secondary><FontAwesomeIcon icon={faCoffee} className="mr-1" />Secundário</Button>
          <Button>Terceário</Button>
          <Button primary inverted>Invertido</Button>
          <Button type="submit" onClick={() => alert("risos")} primary circle><FontAwesomeIcon icon={faCoffee} className="mr-1" /></Button>
          <Button primary inverted block>Invertido</Button>
        </Row>
        <br/>
        <Row>
          <Col sm="4">
            <Card>
              <Card.Header cardImageUrl='https://picsum.photos/id/823/400' cardTitle='Título' cardSubtitle='Subtítulo'></Card.Header>
              <Card.Content>Conteúdo</Card.Content>
              <Card.Footer>Footer do Card</Card.Footer>
            </Card> 
          </Col>
          <Col lg="2" sm="3">
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
