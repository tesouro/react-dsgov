O componente Radio permite selecionar apenas uma opção em uma lista de opções.

O ID é opcional. Pode ser explicitado por meio da propriedade "id", do contrário é gerado um id automático.

### Exemplo completo
```js
import { Row, Col, Message, Radio} from '../index';
<>
    <p class="help-text">Informações adicionais</p>
    <Radio name="radio-ex-1" value="op-1" label="opcao-1" />
    <Radio name="radio-ex-1" value="op-2" label="opcao-2" />
    <Radio name="radio-ex-1" value="op-3" label="opcao-3" />
    <Radio name="radio-ex-1" value="op-4" label="opcao-4" />
    <div class="mt-3">
        <Message category="feedback" type="warning" icon="fas fa-exclamation-triangle">
            Texto da mensagem
        </Message>
    </div>
</>
```

### Estados
```js
import { Row, Col, Message, Radio} from '../index';
<>
    <Radio defaultChecked={true} name="radio-ex-2" value="op-1" label="Checado" />
    <Radio disabled name="radio-ex-2" value="op-2" label="Desativado" />
    <Radio state="invalid" name="radio-ex-2" value="op-3" label="Inválido" />
    <Radio state="valid" name="radio-ex-2" value="op-4" label="Válido" />
</>
```

### Listagem horizontal
```js
import { Row, Col, Message, Radio} from '../index';
<>
    <Radio inline name="radio-ex-horizontal" value="op-1" label="Opção 1" />
    <Radio inline name="radio-ex-horizontal" value="op-2" label="Opção 2" />
    <Radio inline name="radio-ex-horizontal" value="op-3" label="Opção 3" />
    <Radio inline name="radio-ex-horizontal" value="op-4" label="Opção 4" />
</>
```