O componente select permite selecionar itens em uma lista de opções.


### Select simples
```js
<Select 
    id="select-simples"
    placeholder="Selecione..."
    label="Label"
    options={[
        {label: "Opção 1", value: "1"},
        {label: "Opção 2", value: "2"},
        {label: "Opção 3", value: "3"},
        {label: "Opção 4", value: "4"},
        {label: "Opção 5", value: "5"}
    ]}
/>
```


### Select simples desabilitado
```js
<Select 
    id="select-simples"
    placeholder="Selecione..."
    label="Label"
    disabled
    options={[
        {label: "Opção 1", value: "1"},
        {label: "Opção 2", value: "2"},
        {label: "Opção 3", value: "3"},
        {label: "Opção 4", value: "4"},
        {label: "Opção 5", value: "5"}
    ]}
/>
```

### Select simples associado a um estado
```js
const [valor, setValor] = React.useState("1");

<Select 
    id="select-simples-estado"
    placeholder="Selecione..."
    label="Label"
    value={valor}
    onChange={(valor) => setValor(valor)}
    options={[
        {label: "Opção 1", value: "1"},
        {label: "Opção 2", value: "2"},
        {label: "Opção 3", value: "3"},
        {label: "Opção 4", value: "4"},
        {label: "Opção 5", value: "5"}
    ]}
/>
```

### Select múltiplo
```js
const [valor, setValor] = React.useState(['1', '2']);

<Select 
    id="select-multiplo"
    placeholder="Selecione..."
    label="Label"
    type="multiple"
    value={valor}
    onChange={(valor) => setValor(valor)}
    options={[
        {label: "Opção 1", value: "1"},
        {label: "Opção 2", value: "2"},
        {label: "Opção 3", value: "3"},
        {label: "Opção 4", value: "4"},
        {label: "Opção 5", value: "5"}
    ]}
/>
```