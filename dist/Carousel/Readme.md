Carousel é um componente que permite que vários conteúdos ocupem um único espaço na tela e que o usuário navegue por eles de forma sequencial e controlada.

O ID é opcional. Pode ser explicitado por meio da propriedade "id", do contrário é gerado um id automático.

### Carousel padrão
Neste caso, os botões de navegação e de passos são mostrados fora do terminal.
```js
import { Row, Col, Carousel } from '../index';
<Row>
    <Col sm={12} md={8}>
        <Carousel>
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
```


### Carousel interno
Neste caso, os botões de navegação e de passos são mostrados dentro do carousel, e não fora.
```js
import { Row, Col, Carousel } from '../index';
<Row>
    <Col sm={12} md={8}>
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
```



### Carousel híbrido horizontal
Neste caso, os botões de navegação são mostrados fora do terminal, mas os de passos são mostrados dentro.
```js
import { Row, Col, Carousel } from '../index';
<Row>
    <Col sm={12} md={8}>
        <Carousel hybrid="horizontal">
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
```



### Carousel híbrido vertical
Neste caso, os botões de navegação são mostrados dentro do terminal, mas os de passos são mostrados fora.
```js
import { Row, Col, Carousel } from '../index';
<Row>
    <Col sm={12} md={8}>
        <Carousel hybrid="vertical">
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
```


### Carousel circular
Neste caso, o carousel é circular. Ou seja, se estiver no primeiro e navegar para o anterior, vai para o último. Se estiver no último e navegar para o próximo, vai para o primeiro.
```js
import { Row, Col, Carousel } from '../index';
<Row>
    <Col sm={12} md={8}>
        <Carousel circular>
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
```


### Carousel com indicador de página textual
O indicador de passos é textual, ou seja, mostra o número do passo atual, e o total de passos.
```js
import { Row, Col, Carousel } from '../index';
<Row>
    <Col sm={12} md={8}>
        <Carousel textual>
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
```