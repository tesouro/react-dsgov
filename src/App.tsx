import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Breadcrumb from './components/react-dsgov/Breadcrumb';
import Button from './components/react-dsgov/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Card from './components/react-dsgov/Card';
import Row from './components/react-dsgov/Row';
import Container from './components/react-dsgov/Container';
import Col from './components/react-dsgov/Col';
import Carousel from './components/react-dsgov/Carousel';
import Checkbox from './components/react-dsgov/Checkbox';
import DateTimePicker from './components/react-dsgov/DateTimePicker';
import Divider from './components/react-dsgov/Divider';
import Input from './components/react-dsgov/Input';
import Radio from './components/react-dsgov/Radio';
import Select from './components/react-dsgov/Select';
import AnyAttribute, { asObject, asString } from 'react-any-attr';
import Loading from './components/react-dsgov/Loading';
import MagicButton from './components/react-dsgov/MagicButton';
import Message from './components/react-dsgov/Message';
import Textarea from './components/react-dsgov/Textarea';
import Switch from './components/react-dsgov/Switch';
import Upload from './components/react-dsgov/Upload';


function App() {
  const [teste, setTeste] = useState<boolean>(true);
  const [teste2, setTeste2] = useState<string>("");
  const [radioSelecionado, setRadioSelecionado] = useState<string>("");

  
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
        <Row>
          <Col>
            <Carousel interno>
              <Carousel.Page active pageTitle='Teste1' backgroundColor='blue-10' stepName="Step 01">

              </Carousel.Page>
              <Carousel.Page pageTitle='Teste2' backgroundColor='blue-10'>

              </Carousel.Page>

              <Carousel.Page pageTitle='Teste3' backgroundColor='blue-10'>

              </Carousel.Page>

              <Carousel.Page pageTitle='Teste4' backgroundColor='blue-10'>

              </Carousel.Page>
              <Carousel.Page pageTitle='Teste5' backgroundColor='blue-10'>

              </Carousel.Page>
            </Carousel>
          </Col>
        </Row>
        <Row></Row>
        <Row>
          <Col>
            <Checkbox checked={teste || false} state="invalid" id="checkbox-1" onChange={(event) => {setTeste(event.currentTarget.checked);}} label="Teste"></Checkbox>
          </Col>
        </Row>
        
        <Row>
          <Col>
            <DateTimePicker />
          </Col>
        </Row>

        <Row>
          <Col>
          <Divider dashed lg mx="2" />
          </Col>
          
        </Row>
        <br/><br/><br/><br/><br/>

        </Container>

        <Container fluid>
          <Row>
            <Col sm="2">
              <Input id="testeInput" label="Teste de Input"/>
            </Col>
            <Col>
              <Input id="testeInput2" label="Teste de Input 2" icon="fas fa-user-tie" button={<Button type="button" icon="fas fa-eye" />} />
            </Col>
            <Col>
              <DateTimePicker id="inputDateTime" label="Informe a Data" />
            </Col>
          </Row>
          <Row>
            <Col> 
            <Input id="testeInput3" label="Teste de Input 2" icon="fas fa-user-tie" highlight />
            </Col>
          </Row>
          <Row>
            <Col>
            <Input id="testeInput4" label="Teste de Input" inline value={teste2} onChange={(event) => setTeste2(event.currentTarget.value)}  />
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row>
            <Col>
              <Radio id="op-1" name="radio" value="op-1" label="opcao-1" checked={radioSelecionado === "op-1"} onChange={(event) => setRadioSelecionado(event.currentTarget.value)} />
              <Radio id="op-2" name="radio" value="op-2" label="opcao-2" checked={radioSelecionado === "op-2"} onChange={(event) => setRadioSelecionado(event.currentTarget.value)} />
              <Radio id="op-3" name="radio" value="op-3" label="opcao-3" checked={radioSelecionado === "op-3"} onChange={(event) => setRadioSelecionado(event.currentTarget.value)} />
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row>
            <Col>
              <Select id="select1" type="single"  label="Selecione abaixo" onChange={(evento : any) => console.log(evento)} options={[
                {label: "Teste 1", value: "1"},
                {label: "Teste 2", value: "2"},
                {label: "Teste 3", value: "3"},
                {label: "Teste 4", value: "4"}
              ]} />

            </Col>
          </Row>
        </Container>
       
        <Container>
          <Row>
            <Col>
              <Loading progress={15} />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              <MagicButton>Teste</MagicButton>
            </Col>
          </Row>
        </Container>
        <br/><br/><br/><br/><br/>
        <Container>
          <Row>
            <Col>
              <p><Message category='feedback' type="danger" icon="fas fa-times-circle">O CPF deve conter apenas dígitos.</Message></p>
              <p><Message category='feedback' type="success" icon="fas fa-check-circle">Campo correto.</Message></p>
              <p><Message category='feedback' type="warning" icon="fas fa-exclamation-triangle">A tecla CAPS-LOCK está ativada.</Message></p>
              <p><Message category='feedback' type="info" icon="fas fa-check-circle">Os arquivos devem ser no formato PNG, JPG, PDF e ter no máximo 1GB.</Message></p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Message category='message' messageTitle="Data de início do afastamento inválida." type="danger" icon="fas fa-times-circle">O CPF deve conter apenas dígitos.</Message>
              <Message category='message' messageTitle="Sucesso." type="success" icon="fas fa-check-circle">Campo correto.</Message>
              <Message category='message' messageTitle="Informação." type="warning" icon="fas fa-exclamation-triangle">A tecla CAPS-LOCK está ativada.</Message>
              <Message category='message' messageTitle="Atenção." type="info" icon="fas fa-check-circle">Os arquivos devem ser no formato PNG, JPG, PDF e ter no máximo 1GB.</Message>
            </Col>
          </Row>
        </Container>




        <br/><br/><br/><br/><br/>

        <Container fluid>
          <Row>
            <Col>
              <Textarea maxLength={100} showCharacterCounter label="teste" id="teste" status="success" feedbackText="Deu muito ruim kkkk"></Textarea>
            </Col>
          </Row>

        </Container>

        <br/><br/>

        <Container>
          <Row>
            <Col>
              <Switch id="testeSwitch" label="Teste" />
            </Col>
          </Row>
        </Container>

        <br/><br/><br/><br/><br/><br/>

        <Container>
          <Row>
            <Col>
              <Upload id="meuupload" label="Teste Upload" uploadTimeout={() => {return new Promise((resolve) => {
    
              return setTimeout(resolve, 3000)
            })}}/>
            </Col>
          </Row>
        </Container>


        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
       
              
      
    </>
  );
}

export default App;
