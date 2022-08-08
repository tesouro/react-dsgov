Lists são estruturas compostas por itens em sequência vertical ou horizontal que podem conter imagens, ícones e elementos interativos. Utilize lists quando precisar organizar conteúdos semelhantes em forma sequencial.

### Lista Vertical
```js
import {List, Item, Row, Col} from '../index';
const linhas = ['Texto 1', 'Texto 2', 'Texto 2'];
<List title="Título (opcional)">
    {linhas.map((linha, index) => (
        <Item key={`item-ex-1-${index}`} showDividerAfter>
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
```


### Lista Vertical com checkboxes
Lista vertical com checkboxes. Utilizando a biblioteca "core", resulta em um bug que não consegui identificar. 
```js
import {List, Item, Row, Col, Checkbox} from '../index';
const linhas = ['Texto 1', 'Texto 2', 'Texto 2'];
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
```


### Densidade Alta (padrão)
```js
import {List, Item, Row, Col} from '../index';
const linhas = ['Texto 1', 'Texto 2', 'Texto 2'];
<List title="Título (opcional)">
    {linhas.map((linha, index) => (
        <Item key={`item-ex-2-${index}`} showDividerAfter>
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
```


### Densidade Média
```js
import {List, Item, Row, Col} from '../index';
const linhas = ['Texto 1', 'Texto 2', 'Texto 2'];
<List title="Título (opcional)">
    {linhas.map((linha, index) => (
        <Item key={`item-ex-3-${index}`} py={3} showDividerAfter>
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
```



### Densidade Baixa 
```js
import {List, Item, Row, Col, Divider} from '../index';
const linhas = ['Texto 1', 'Texto 2', 'Texto 2'];
<List title="Título (opcional)">
    {linhas.map((linha, index) => (
        <Item key={`item-ex-4-${index}`} py={4} showDividerAfter>
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
```

### Agrupado
```js
import {List, Item, Row, Col, Group} from '../index';
const rotulos = ['RÓTULO 1', 'RÓTULO 2'];
const linhas = ['Texto 1', 'Texto 2', 'Texto 2'];
<List title="Título (opcional)">
    {rotulos.map((rotulo, indexGrupo) => (
        <Group key={`grupo-ex-4${indexGrupo}`} tagName="">
            <Item showDividerAfter>{rotulo}</Item>
            {linhas.map((linha, indexLinha) => (
                <Item key={`item-ex-4-${indexGrupo}-${indexLinha}`}>
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
        </Group>
    ))}
    
</List>
```

### Agrupado com expansão
```js
import {List, Item, Row, Col, Group} from '../index';
const rotulos = ['RÓTULO 1', 'RÓTULO 2'];
const linhas = ['Texto 1', 'Texto 2', 'Texto 2'];
<List title="Título (opcional)">
    {rotulos.map((rotulo, indexGrupo) => (
        <Group key={indexGrupo} >
            <Item 
                collapsable 
                showDividerAfter
                subItems={<>
                    {linhas.map((linha, indexLinha) => (
                        <Item key={`item-ex-4-${indexGrupo}-${indexLinha}`}>
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
                </>}
            >{rotulo}</Item>
            
                
            
        </Group>
    ))}
    
</List>
```


### Lista Horizontal
```js
import {List, Item, Row, Col} from '../index';
const linhas = ['Texto 1', 'Texto 2', 'Texto 2'];
<List title="Título (opcional)" horizontal>
    {linhas.map((linha, index) => (
        <Item key={`item-ex-1-${index}`} showDividerAfter>
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
```


### Lista Horizontal com expansão
```js
import {List, Item, Row, Col, Group} from '../index';
import CustomTag from '../CustomTag';
const rotulos = ['RÓTULO 1', 'RÓTULO 2'];
const linhas = ['Texto 1', 'Texto 2', 'Texto 2'];
<List title="Título (opcional)" horizontal>
    {rotulos.map((rotulo, indexGrupo) => (
        <Group key={indexGrupo} >
            <Item 
                collapsable 
                showDividerAfter
                subItems={<>
                    {linhas.map((linha, indexLinha) => (
                        <Item key={`item-ex-4-${indexGrupo}-${indexLinha}`}>
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
                </>}
            >{rotulo}</Item>
        </Group>
    ))}
    
</List>
```