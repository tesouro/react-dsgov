O componente checkbox permite selecionar uma ou mais opções em uma lista de opções.

O ID é opcional. Pode ser explicitado por meio da propriedade "id", do contrário é gerado um id automático.

### Exemplo completo
```js
<Checkbox label="Opção 1" mb={1} />
<Checkbox label="Opção 2" mb={1} />
<Checkbox label="Opção 3" mb={1} />
```

### Estados
```js
<Checkbox disabled ilabel="Opção 1" mb={1} />
<Checkbox state="valid" label="Opção 2" mb={1} />
<Checkbox state="invalid" label="Opção 3" mb={1} />
```

### Checkbox sem label
```js
<Checkbox />
```

### Listagem horizontal
```js
<Checkbox inline label="Opção 1" mb={1} />
<Checkbox inline label="Opção 2" mb={1} />
<Checkbox inline label="Opção 3" mb={1} />
```

### Selectionar todos + estado intermediário
```js
<Checkbox indeterminate parentGroup="checkgroup01" label="Selecionar Todos" mb={1} />
<Checkbox childOf="checkgroup01" label="Opção 1" mb={1} />
<Checkbox childOf="checkgroup01" label="Opção 2" mb={1} />
<Checkbox childOf="checkgroup01" label="Opção 3" mb={1} />
```