O componente Radio permite selecionar apenas uma opção em uma lista de opções.


### Exemplo completo
```js
import { Row, Col, Message, Radio} from '../index';
<>
    <p class="help-text">Informações adicionais</p>
    <Radio id="op-ex-radio-1" name="radio-ex-1" value="op-1" label="opcao-1" />
    <Radio id="op-ex-radio-2" name="radio-ex-1" value="op-2" label="opcao-2" />
    <Radio id="op-ex-radio-3" name="radio-ex-1" value="op-3" label="opcao-3" />
    <Radio id="op-ex-radio-4" name="radio-ex-1" value="op-4" label="opcao-4" />
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
    <Radio defaultChecked={true} id="op-ex-radio-checado" name="radio-ex-2" value="op-1" label="Checado" />
    <Radio disabled id="op-ex-radio-desativado" name="radio-ex-2" value="op-2" label="Desativado" />
    <Radio state="invalid" id="op-ex-radio-invalido" name="radio-ex-2" value="op-3" label="Inválido" />
    <Radio state="valid" id="op-ex-radio-valido" name="radio-ex-2" value="op-4" label="Válido" />
</>
```

### Listagem horizontal
```js
import { Row, Col, Message, Radio} from '../index';
<>
    <Radio inline id="op-ex-horizontal-radio-1" name="radio-ex-horizontal" value="op-1" label="Opção 1" />
    <Radio inline id="op-ex-horizontal-radio-2" name="radio-ex-horizontal" value="op-2" label="Opção 2" />
    <Radio inline id="op-ex-horizontal- radio-3" name="radio-ex-horizontal" value="op-3" label="Opção 3" />
    <Radio inline id="op-ex-horizontal- radio-4" name="radio-ex-horizontal" value="op-4" label="Opção 4" />
</>
```