Switches são controles usados para alternar rapidamente entre dois estados possíveis. São usados ​​apenas para ações binárias que ocorrem imediatamente após o usuário “girar” o botão de alternância. São comumente usados ​​para interruptores “liga/desliga”.

### Switch padrão
```js
<Switch label="Label" />
```

### Switch padrão com ID explícito
```js
<Switch id="switch-0" label="Label"  />
```

### Switch usando estado
```js
const [valor, setValor] = React.useState();

<Switch label="Label" value={valor} onChange={(event) => setValor(event.currentTarget.value)}/>
```

### Desabilitado
```js
<Switch label="Label" disabled />
```


### Densidade baixa
```js
<Switch label="Pequeno" density="small" />
```

### Densidade média
```js
<Switch label="Médio" density="medium" />
```

### Densidade alta
```js
<Switch label="Grande" density="large" />
```

### Com rótulo (Ligado/Desligado)
```js
<Switch label="Grande" enabledText="Ligado" disabledText="Desligado" />
```

### Switch com label em cima
```js
<Switch label="Label" labelPosition="top" />
```

### Switch com label à direita 
```js
<Switch label="Label" labelPosition="right" />
```

### Switch com ícone
```js
<Switch label="Label" showIcon />
```