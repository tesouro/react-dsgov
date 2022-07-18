Cards são cartões (ou superfícies) que contêm conteúdo e ações diversas sobre um único assunto (ou tópico).

### Card Simples
```js
import { Row, Col, Card } from '../index';
 
<Row>
    <Col sm={6} md={4} lg={3}>
        <Card>
            <Card.Content>
                <img src="https://picsum.photos/id/0/500" alt="Imagem de exemplo"/>
            </Card.Content>
        </Card> 
    </Col>
</Row>

```

### Card completo
```js
import { Row, Col, Button, Card } from '../index';

<Row>
    <Col sm={6} md={4} lg={3}>
        <Card>
            <Card.Header cardImageUrl='https://picsum.photos/id/823/400' cardTitle='Maria Amorim' cardSubtitle='UX Designer'></Card.Header>
            <Card.Content>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore perferendis nam porro atque ex at, numquam non optio ab eveniet error vel ad exercitationem, earum et fugiat recusandae harum? Assumenda.
            </Card.Content>
            <Card.Footer>
                <div className="d-flex">
                    <div>
                        <Button>Button</Button>
                    </div>
                    <div className="ml-auto">
                        <Button circle aria-label="Ícone ilustrativo" icon="fas fa-heart" />
                        <Button circle aria-label="Ícone ilustrativo 3" icon="fas fa-share-alt" />
                    </div>
                </div>
            </Card.Footer>
        </Card> 
    </Col>
</Row>

```


### Card com hover
```js
import { Row, Col, Button, Card } from '../index';

<Row>
    <Col sm={6} md={4} lg={3}>
        <Card hover>
            <Card.Header cardImageUrl='https://picsum.photos/id/823/400' cardTitle='Maria Amorim' cardSubtitle='UX Designer'></Card.Header>
            <Card.Content>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore perferendis nam porro atque ex at, numquam non optio ab eveniet error vel ad exercitationem, earum et fugiat recusandae harum? Assumenda.
            </Card.Content>
            <Card.Footer>
                <div className="d-flex">
                    <div>
                        <Button>Button</Button>
                    </div>
                    <div className="ml-auto">
                        <Button circle aria-label="Ícone ilustrativo" icon="fas fa-heart" />
                        <Button circle aria-label="Ícone ilustrativo 3" icon="fas fa-share-alt" />
                    </div>
                </div>
            </Card.Footer>
        </Card> 
    </Col>
</Row>

```


### Card com altura fixa
```js
import { Row, Col, Button, Card } from '../index';

<Row>
    <Col sm={6} md={4} lg={3}>
        <Card hFixed>
            <Card.Header cardImageUrl='https://picsum.photos/id/823/400' cardTitle='Maria Amorim' cardSubtitle='UX Designer'></Card.Header>
            <Card.Content>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore perferendis nam porro atque ex at, numquam non optio ab eveniet error vel ad exercitationem, earum et fugiat recusandae harum? Assumenda. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore perferendis nam porro atque ex at, numquam non optio ab eveniet error vel ad exercitationem, earum et fugiat recusandae harum? Assumenda. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore perferendis nam porro atque ex at, numquam non optio ab eveniet error vel ad exercitationem, earum et fugiat recusandae harum? Assumenda. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore perferendis nam porro atque ex at, numquam non optio ab eveniet error vel ad exercitationem, earum et fugiat recusandae harum? Assumenda. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore perferendis nam porro atque ex at, numquam non optio ab eveniet error vel ad exercitationem, earum et fugiat recusandae harum? Assumenda. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore perferendis nam porro atque ex at, numquam non optio ab eveniet error vel ad exercitationem, earum et fugiat recusandae harum? Assumenda.
            </Card.Content>
            <Card.Footer>
                <div className="d-flex">
                    <div>
                        <Button>Button</Button>
                    </div>
                    <div className="ml-auto">
                        <Button circle aria-label="Ícone ilustrativo" icon="fas fa-heart" />
                        <Button circle aria-label="Ícone ilustrativo 3" icon="fas fa-share-alt" />
                    </div>
                </div>
            </Card.Footer>
        </Card> 
    </Col>
</Row>

```


### Card desabilitado
```js
import { Row, Col, Button, Card } from '../index';

<Row>
    <Col sm={6} md={4} lg={3}>
        <Card disabled>
            <Card.Header cardImageUrl='https://picsum.photos/id/823/400' cardTitle='Maria Amorim' cardSubtitle='UX Designer'></Card.Header>
            <Card.Content>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore perferendis nam porro atque ex at, numquam non optio ab eveniet error vel ad exercitationem, earum et fugiat recusandae harum? Assumenda.
            </Card.Content>
            <Card.Footer>
                <div className="d-flex">
                    <div>
                        <Button>Button</Button>
                    </div>
                    <div className="ml-auto">
                        <Button circle aria-label="Ícone ilustrativo" icon="fas fa-heart" />
                        <Button circle aria-label="Ícone ilustrativo 3" icon="fas fa-share-alt" />
                    </div>
                </div>
            </Card.Footer>
        </Card> 
    </Col>
</Row>

```