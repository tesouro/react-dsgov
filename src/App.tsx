import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import AnyAttribute, { asObject, asString } from 'react-any-attr';


import { Breadcrumb, Button, Card, Row, Container, Col, Carousel, Checkbox, DateTimePicker, Divider, Input, Radio, Select, Loading, MagicButton, Message, Textarea, Switch, Upload, Wizard, List, Item } from './components';
import CustomTag from './components/CustomTag';
import Table from './components/Table';

function App() {
  const [teste, setTeste] = useState<boolean>(true);
  const [teste2, setTeste2] = useState<string>("");
  const [radioSelecionado, setRadioSelecionado] = useState<string>("");

  const rotulos = ['RÓTULO 1', 'RÓTULO 2', 'RÓTULO 3'];
  const linhas = ['Texto 1', 'Texto 2', 'Texto 2', 'Texto 3'];
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
          <Col sm={4}>
            <Card>
              <Card.Header cardImageUrl='https://picsum.photos/id/823/400' cardTitle='Título' cardSubtitle='Subtítulo'></Card.Header>
              <Card.Content>Conteúdo</Card.Content>
              <Card.Footer>Footer do Card</Card.Footer>
            </Card> 
          </Col>
          <Col lg={2} sm={3}>
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
            <Checkbox id="check-1" indeterminate parentGroup="checkgroup01" label="Selecionar Todos"></Checkbox>
            <Checkbox id="check-2" childOf="checkgroup01" label="Opção 1"></Checkbox>
            <Checkbox id="check-3" childOf="checkgroup01" label="Opção 2"></Checkbox>
            <Checkbox id="check-4" childOf="checkgroup01" label="Opção 3"></Checkbox>

            <div className="mb-1">
              <div className="br-checkbox">
                <AnyAttribute attributes={{indeterminate: "indeterminate"}}><input id="checkbox-ind1" name="checkbox-ind1" type="checkbox" aria-label="selecionar tudo" defaultChecked={true} data-parent="check-01"/></AnyAttribute> 
                
                <label htmlFor="checkbox-ind1">Selecionar tudo</label>
              </div>
            </div>
            <div className="mb-1">
              <div className="br-checkbox">
                <input id="checkbox-01" name="checkbox-01" type="checkbox" aria-label="opção 1" defaultChecked={true} data-child="check-01"/>
                <label htmlFor="checkbox-01">Opção 1</label>
              </div>
            </div>
            <div className="mb-1">
              <div className="br-checkbox">
                <input id="checkbox-02" name="checkbox-02" type="checkbox" aria-label="opção 2" data-child="check-01"/>
                <label htmlFor="checkbox-02">Opção 2</label>
              </div>
            </div>
            <div className="mb-1">
              <div className="br-checkbox">
                <input id="checkbox-03" name="checkbox-03" type="checkbox" aria-label="opção 3" data-child="check-01"/>
                <label htmlFor="checkbox-03">Opção 3</label>
              </div>
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col>
            <DateTimePicker />
          </Col>
        </Row>

        <Row>
          <Col>
          <Divider dashed size="lg" mx="2" />
          </Col>
          
        </Row>
        <br/><br/><br/><br/><br/>

        </Container>

        <Container fluid>
          <Row>
            <Col sm={2}>
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


        <br/><br/><br/><br/>
       
        <Container>
            <Row>
              <Col>
                  <Wizard height="400px" onConclude={(event) => alert("risos")}>
                    <Wizard.Panel title="Dados Pessoais">
                      Conteúdo aqui - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </Wizard.Panel>
                    <Wizard.Panel title="Validar Dados">
                      Conteúdo aqui - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </Wizard.Panel>
                    <Wizard.Panel title="Habilitar Cadastro">
                      Conteúdo aqui - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </Wizard.Panel>
                    <Wizard.Panel title="Cadastrar Senha">
                      Conteúdo aqui - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </Wizard.Panel>
                    <Wizard.Panel title="Finalizar">
                      Conteúdo aqui - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </Wizard.Panel>
                  </Wizard>

                  <Wizard vertical height="400px" onConclude={(event) => alert("risos")}>
                    <Wizard.Panel title="Dados Pessoais">
                      Conteúdo aqui - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </Wizard.Panel>
                    <Wizard.Panel title="Validar Dados">
                      Conteúdo aqui - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </Wizard.Panel>
                    <Wizard.Panel title="Habilitar Cadastro">
                      Conteúdo aqui - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </Wizard.Panel>
                    <Wizard.Panel title="Cadastrar Senha">
                      Conteúdo aqui - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </Wizard.Panel>
                    <Wizard.Panel title="Finalizar">
                      Conteúdo aqui - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </Wizard.Panel>
                  </Wizard>
              </Col>
            </Row>
        </Container>

        <Container>
        

          
          <List title="Título (opcional)">
              {rotulos.map((rotulo, index) => (
                  <CustomTag key={`grupo-${index}`}>
                      <Item collapsable target={`lista-${index}`} showDividerAfter>{rotulo}</Item>
                      <List hidden id={`lista-${index}`}>
                          {linhas.map((linha, index2) => (
                              <Item key={`item-${index}-${index2}`} >
                                  <Row>
                                      <Col auto>
                                          <i className="fas fa-heartbeat" aria-hidden="true"></i>
                                      </Col>
                                      <Col>
                                      ITEM
                                      {linha}
                                      </Col>
                                      <Col auto>
                                          META
                                      </Col>
                                  </Row>
                              </Item>
                          ))}
                      </List>
                  </CustomTag>
              ))}
              
          </List>
        </Container>

        <br/><br/><br/><br/>
      
        <List title="Título (opcional)">
    {linhas.map((linha, index) => (
        <Item key={`item-ex-1-${index}`} className="align-items-center" showDividerAfter>
            <Row>
                <Col auto>
                    <i className="fas fa-heartbeat" aria-hidden="true"></i>
                </Col>
                <Col>
                ITEM
                {linha}
                </Col>
                <Col auto>
                    <Checkbox id={`check-lista-${index}`} />
                </Col>
            </Row>
        </Item>
    ))}
</List>

<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

  <Container fluid>
    <Row>
      <Col>
        <Table id="minhatabela01" headers={[
          {
            field: "id",
            label: "ID"
          },
          {
            field: "name",
            label: "Name"
          }
        ]}
          data={
              [
                {
                  id: 1,
                  name: "Maria"
                },
                {
                  id: 2,
                  name: "Josefina"
                }
              ]
          }>
         
        </Table>
      </Col>
    </Row>
  </Container>
    </>
  );
}

export default App;
