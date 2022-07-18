Componente que permite a entrada de dados textuais por parte do usuário.

### Input padrão
```js
    <Input id="input-1" label="Label / Rótulo">
        <p>Texto auxiliar. Função de previnir erros.</p>
    </Input>
```

### Densidades
```js
    <Input id="input-dnormal" label="Densidade padrão"/>
    <Input density="small" id="input-dbaixa" label="Baixa densidade"/>
    <Input density="large" id="input-dalta" label="Alta densidade"/>
```


### Input com ícones
```js
    <Input id="input-icon-1" label="Login" icon="fas fa-user-tie" />
    <Input id="input-icon-2" label="Nome" icon="fas fa-user" />
    <Input id="input-icon-3" label="Grupo" icon="fas fa-users" />
```

### Input com botões
```js
import { Button } from '../index';
<>
    <Input id="input-btn-1" label="Login" button={<Button type="button" icon="fas fa-eye" />} />
    <Input id="input-btn-2" label="Nome"  button={<Button type="button" icon="fas fa-arrow-right" />} />
    <Input id="input-btn-3" label="Grupo" button={<Button type="button" icon="fas fa-search" />} />
</>
```

### Input com destaque
```js
import { Button } from '../index';
<>
    <Input highlight id="input-high-1" label="Login" button={<Button type="button" icon="fas fa-eye" />} />
    <Input highlight id="input-high-2" label="Nome"  button={<Button type="button" icon="fas fa-arrow-right" />} />
    <Input highlight id="input-high-3" label="Grupo" icon="fas fa-users" button={<Button type="button" icon="fas fa-search" />} />
</>
```

### Input com validações e estados
```js
    <Input id="input-ve-1" label="Label / Rótulo" status="success" feedbackText="Mensagem de Sucesso" />
    <Input id="input-ve-2" label="Label / Rótulo" status="danger" feedbackText="Mensagem de Erro" />
    <Input id="input-ve-3" label="Label / Rótulo" status="info" feedbackText="Mensagem informativa" />
    <Input id="input-ve-4" label="Label / Rótulo" status="warning" feedbackText="Mensagem de aleta" />
```

### Input com rótulo lateral
```js
    <Input inline id="input-ve-1" label="Label / Rótulo" />
```