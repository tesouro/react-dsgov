Itens são blocos compactos e altamente flexível diagramados para exibir uma ampla variedade de conteúdo de forma repetida.

Úteis para serem utilizados dentro do elemento List.

### Itens com elementos interativos
```js
import { Row, Col, Button, Item} from '../index';
<Item>
    <Row align-items-center>
        <Col>
            Lorem ipsum <a href="javascript:void(0);">dolor</a>, sit amet consectetur <a href="javascript:void(0);">adipisicing</a> elit.
        </Col>
        <Col auto>
            <Button circle aria-label="Interagir com item" icon="fas fa-city" /> 
        </Col>
    </Row>
</Item>

```

### Itens com radio
```js
import { Radio, Item} from '../index';
<>
    <Item align-items-center data-toggle="selection">
        <Radio id="radio-item-01" label="Rótulo do Radio 01" value="radio-01" name="radio-items" />
    </Item>
    <Item align-items-center data-toggle="selection">
        <Radio id="radio-item-02" label="Rótulo do Radio 02" value="radio-02" name="radio-items" />
    </Item>
</>
```

### Itens com selecao
```js
import { Checkbox, Item} from '../index';
<>
    <Item align-items-center data-toggle="selection">
        <Checkbox id="checkbox-item-01" label="Rótulo do Checkbox 01" value="checkbox-01" name="radio-items" />
    </Item>
    <Item align-items-center data-toggle="selection">
        <Checkbox id="checkbox-item-02" label="Rótulo do Checkbox 02" value="checkbox-02" name="radio-items" />
    </Item>
</>
```

### Item desativado
```js
import { Row, Col, Item} from '../index';
<Item align-items-center disabled>
    <Row align-items-center>
        <Col auto>
            <img class="rounded" src="https://picsum.photos/40/40" alt="imagem de exemplo 1"/>
        </Col>
        <Col>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
        </Col>
    </Row>
</Item>
```