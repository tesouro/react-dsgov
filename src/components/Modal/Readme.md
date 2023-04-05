Modal é uma janela que exibe um conteúdo adicional em uma camada acima da página atual, com uma sobreposição de superfície (overlay) cobrindo a página e tornando-a temporáriamente inacessível.

### Modal Alerta
```js
import { Modal, Button } from '../index';
<Modal title="Retornar para página inicial?">
    <Modal.Body>
        Você está sendo redirecionado para a página inicial do sistema
    </Modal.Body>
    <Modal.Footer justify-content='end'>
        <Button secondary small m={2}>Cancelar</Button>
        <Button primary small m={2}>Retornar</Button>
    </Modal.Footer>
</Modal>
```

### Modal com Scrim
```js
import { Modal, Button } from '../index';
const [modalAberta, setModalAberta] = useState(false);
<>
    <Modal useScrim showCloseButton modalOpened={modalAberta} onCloseButtonClick={() => setModalAberta(false)}>
            Teste.
    </Modal>

    <Button primary onClick={() => setModalAberta(true)}>Abrir Modal</Button>
</>
```

### Modal Alerta com ícone de fechar
```js
import { Modal, Button } from '../index';
<Modal showCloseButton title="Retornar para página inicial?">
    <Modal.Body>
        Você está sendo redirecionado para a página inicial do sistema
    </Modal.Body>
    <Modal.Footer justify-content='end'>
        <Button secondary small m={2}>Ação 1</Button>
        <Button secondary small m={2}>Ação 2</Button>
    </Modal.Footer>
</Modal>
```

### Modal Alerta com título de duas linhas
```js
import { Modal, Button } from '../index';
<Modal showCloseButton title="Título do modal de exemplo com uso de duas linhas, título do modal de exemplo com uso de duas linhas">
    <Modal.Body>
        Texto com duas linhas Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Modal.Body>
    <Modal.Footer justify-content='end'>
        <Button secondary small m={2}>Ação 1</Button>
        <Button secondary small m={2}>Ação 2</Button>
    </Modal.Footer>
</Modal>
```


### Modal sem título
```js
import { Modal, Button } from '../index';
<Modal>
    <Modal.Body>
        Modal de alerta sem título Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Modal.Body>
    <Modal.Footer justify-content='end'>
        <Button secondary small m={2}>Ação 1</Button>
        <Button secondary small m={2}>Ação 2</Button>
    </Modal.Footer>
</Modal>
```


### Modal com temporizador
```js
import { Modal, Button } from '../index';
<Modal>
    <Modal.Body loading>
    </Modal.Body>
    <Modal.Footer justify-content='end'>
        <Button secondary small m={2}>Cancelar</Button>
    </Modal.Footer>
</Modal>
```



### Modal com entrada de dados
```js
import { Modal, Button, Row, Col, Select, Input } from '../index';
<Modal showCloseButton title="Título">
    <Modal.Body>
        <Row>
            <Col my={2}>
                <Select 
                    label="Domínio de Autenticação"
                    options={[
                        {label: "GOV.BR", value: "1"}
                    ]}
                    value={"1"}
                />
            </Col>
        </Row>
        <Row>
            <Col my={2}>
                <Input label="Usuário" placeholder="Insira um texto" />
            </Col>
        </Row>
        <Row>
            <Col my={2}>
                <Input label="Senha" type="password" placeholder="Digite sua senha" />
            </Col>
        </Row>
    </Modal.Body>
    <Modal.Footer justify-content='end'>
        <Button secondary small m={2}>Ação 1</Button>
        <Button secondary small m={2}>Ação 2</Button>
    </Modal.Footer>
</Modal>
```



### Modal com lista de itens
```js
import { Modal, Button, Row, Col, List, Item } from '../index';
<Modal showCloseButton title="Título">
    <Modal.Body>
        <List>
            <Item link="javascript:void(0)" showDividerAfter>
                <Row align-items-center>
                    <Col auto>
                        <img class="rounded" src="https://picsum.photos/40/40" alt="imagem de exemplo 1"/>
                    </Col>
                    <Col>Opção 1</Col>
                </Row>
            </Item>
            <Item link="javascript:void(0)" showDividerAfter>
                <Row align-items-center>
                    <Col auto>
                        <img class="rounded" src="https://picsum.photos/40/40" alt="imagem de exemplo 1"/>
                    </Col>
                    <Col>Opção 2</Col>
                </Row>
            </Item>
            <Item link="javascript:void(0)">
                <Row align-items-center>
                    <Col auto>
                        <img class="rounded" src="https://picsum.photos/40/40" alt="imagem de exemplo 1"/>
                    </Col>
                    <Col>Opção 3</Col>
                </Row>
            </Item>
        </List>
    </Modal.Body>
</Modal>
```

### Modal com escolha de opção
```js
import { Modal, Button, Row, Col, Radio } from '../index';
<Modal showCloseButton title="Título">
    <Modal.Body>
        <Radio label="Fotos"  name="group-modal" value="op-fotos" />
        <Radio label="Filmes" name="group-modal" value="op-filmes" />
        <Radio label="Audio"  name="group-modal" value="op-audio" />
        <Radio label="Todas"  name="group-modal" value="op-todas" />
    </Modal.Body>
    <Modal.Footer justify-content='end'>
        <Button secondary small m={2}>Ação 1</Button>
        <Button primary small m={2}>Ação 2</Button>
    </Modal.Footer>
</Modal>
```


### Modal com termo de aceite
```js
import { Modal, Button } from '../index';
<Modal title="Concorda com os termos?">
    <Modal.Body>
        <div className="terms">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Mauris id gravida nulla. Cras sagittis dapibus felis vitae semper. Donec vel hendrerit ante. Etiam sed blandit nisi. Praesent iaculis, nisl eget rutrum vehicula, lacus tortor feugiat diam, et euismod lacus metus eget nisi. Sed fermentum, nunc nec efficitur pharetra, felis dolor feugiat massa, et semper turpis felis quis ligula. Quisque non metus at risus maximus ultrices. Nam vel massa tellus. Vestibulum lobortis dui et pellentesque porta. Cras rhoncus augue a mauris porttitor, in malesuada metus eleifend. Praesent ac lacinia lorem. Sed cursus nisl ligula, vel ultrices ex pellentesque eu. Curabitur facilisis egestas libero, non pharetra lacus ultricies quis. Mauris non finibus justo, eu varius metus. Donec nec eros semper, consequat turpis id, fermentum dolor.
        </div>
    </Modal.Body>
    <Modal.Footer justify-content='end'>
        <Button secondary small m={2}>Negar</Button>
        <Button primary small m={2}>Aceitar</Button>
    </Modal.Footer>
</Modal>
```