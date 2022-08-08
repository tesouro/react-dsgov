Os botões são elementos interativos da interface, que permitem que os usuários acessem funcionalidades, executem ações ou naveguem pela interface.

### Botão Primário
```js
<Button primary>Primário</Button>
```
### Botão Secundário
```js
<Button secondary>Secundário</Button>
```
### Botão Terceário
```js
<Button>Terceário</Button>
```

### Botão Invertido
```js
<Button primary inverted>Invertido</Button>
```

### Botão em bloco
```js
<Button primary block>Invertido</Button>
```

### Botão carregando
```js
<Button primary loading>Invertido</Button>
```

### Botão pequeno
```js
<Button primary small>Invertido</Button>
```

### Botão grande
```js
<Button primary large>Invertido</Button>
```

### Botão com dropdown
```js
<Button circle
    icon='fas fa-ellipsis-v' 
    dropdownItems={
        <>
            <Button isItem icon="fas fa-heartbeat" >Link de Acesso</Button>
            <Button isItem icon="fas fa-heartbeat" >Link de Acesso</Button>
            <Button isItem icon="fas fa-heartbeat" >Link de Acesso</Button>
        </>
    }
/>
```
