O componente checkbox permite selecionar uma ou mais opções em uma lista de opções.


### Exemplo completo
```js
<Checkbox id="checkbox-1" label="Opção 1" mb={1} />
<Checkbox id="checkbox-2" label="Opção 2" mb={1} />
<Checkbox id="checkbox-3" label="Opção 3" mb={1} />
```

### Estados
```js
<Checkbox disabled id="checkbox-4" label="Opção 1" mb={1} />
<Checkbox state="valid" id="checkbox-5" label="Opção 2" mb={1} />
<Checkbox state="invalid" id="checkbox-6" label="Opção 3" mb={1} />
```

### Checkbox sem label
```js
<Checkbox id="checkbox-7" />
```

### Listagem horizontal
```js
<Checkbox inline id="checkbox-8" label="Opção 1" mb={1} />
<Checkbox inline id="checkbox-9" label="Opção 2" mb={1} />
<Checkbox inline id="checkbox-10" label="Opção 3" mb={1} />
```

### Selectionar todos + estado intermediário
```js
<Checkbox id="check-1" indeterminate parentGroup="checkgroup01" label="Selecionar Todos" mb={1} />
<Checkbox id="check-2" childOf="checkgroup01" label="Opção 1" mb={1} />
<Checkbox id="check-3" childOf="checkgroup01" label="Opção 2" mb={1} />
<Checkbox id="check-4" childOf="checkgroup01" label="Opção 3" mb={1} />
```