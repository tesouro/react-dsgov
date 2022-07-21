Componente que permite a entrada de dados textuais por parte do usuário.

O ID é opcional. Pode ser explicitado por meio da propriedade "id", do contrário é gerado um id automático.

### Input padrão
```js
    <Input label="Label / Rótulo">
        <p>Texto auxiliar. Função de previnir erros.</p>
    </Input>
```

### Densidades
```js
    <Input label="Densidade padrão"/>
    <Input density="small" label="Baixa densidade"/>
    <Input density="large" label="Alta densidade"/>
```


### Input com ícones
```js
    <Input label="Login" icon="fas fa-user-tie" />
    <Input label="Nome" icon="fas fa-user" />
    <Input label="Grupo" icon="fas fa-users" />
```

### Input com botões
```js
import { Button } from '../index';
<>
    <Input label="Login" button={<Button type="button" icon="fas fa-eye" />} />
    <Input label="Nome"  button={<Button type="button" icon="fas fa-arrow-right" />} />
    <Input label="Grupo" button={<Button type="button" icon="fas fa-search" />} />
</>
```

### Input com destaque
```js
import { Button } from '../index';
<>
    <Input highlight label="Login" button={<Button type="button" icon="fas fa-eye" />} />
    <Input highlight label="Nome"  button={<Button type="button" icon="fas fa-arrow-right" />} />
    <Input highlight label="Grupo" icon="fas fa-users" button={<Button type="button" icon="fas fa-search" />} />
</>
```

### Input com validações e estados
```js
    <Input label="Label / Rótulo" status="success" feedbackText="Mensagem de Sucesso" />
    <Input label="Label / Rótulo" status="danger" feedbackText="Mensagem de Erro" />
    <Input label="Label / Rótulo" status="info" feedbackText="Mensagem informativa" />
    <Input label="Label / Rótulo" status="warning" feedbackText="Mensagem de aleta" />
```

### Input com rótulo lateral
```js
    <Input inline label="Label / Rótulo" />
```