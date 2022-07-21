O Textarea é um campo de entrada de texto que permite que seu aplicativo aceite um valor de texto potencialmente longo do usuário.

### Textarea simples
```js
<Textarea label="Label" placeholder="Exemplo de textarea simples" />
```

### Densidade baixa
```js
<Textarea density="small" label="Label" placeholder="Exemplo de textarea simples" />
```

### Densidade alta
```js
<Textarea density="large" label="Label" placeholder="Exemplo de textarea simples" />
```
### Validação e estados
```js
import {Row, Col, Textarea} from '../index';
<Row>
    <Col>
        <Textarea 
            status="success" 
            feedbackText="Campo correto" 
            label="Label" 
            placeholder="Exemplo de textarea com sucesso" 
        />
    </Col>
    <Col>
        <Textarea 
            status="danger" 
            feedbackText="Campo com erro" 
            label="Label" 
            placeholder="Exemplo de textarea com erro" 
        />
    </Col>
    <Col>
        <Textarea 
            status="warning" 
            disabled 
            feedbackText="Campo desabilitado" 
            label="Label" 
            placeholder="Exemplo de textarea desabilitado" 
        />
    </Col>
</Row>
```

### Textarea com contador de caracteres
```js
<Textarea 
    label="Label" 
    placeholder="Exemplo de textarea com contador de caracteres" 
    showCharacterCounter 
    maxLength={300}
/>
```


### Textarea com contador de caracteres, sem limite
```js
<Textarea 
    label="Label" 
    placeholder="Exemplo de textarea com contador de caracteres sem limite" 
    showCharacterCounter 
/>
```

### Textarea com label à esquerda
```js
<Textarea inline label="Label" placeholder="Exemplo de textarea com label à esquerda" />
```

### Textarea em fundo escuro
```js
<div class="p-3 bg-primary-darken-02">
    <Textarea inverted label="Label" placeholder="Exemplo de textarea simples" />
</div>
```
