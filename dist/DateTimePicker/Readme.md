DateTimePicker é um componente que auxilia o usuário na seleção de uma data a partir de um calendário e/ou uma hora a partir de um seletor de horas.

O ID é opcional. Pode ser explicitado por meio da propriedade "id", do contrário é gerado um id automático.

### Simples
```js
<DateTimePicker label="Label" />
```

### Timepicker
```js
<DateTimePicker dataType="time" placeholder="hh:mm" label="Label" />
```

### Com intervalo de datas
```js
<DateTimePicker dataMode="range" placeholder="dd/mm/yyyy até dd/mm/yyyy" label="Label" />
```

### Date + Timepicker
```js
<DateTimePicker dataType="datetime-local" placeholder="dd/mm/yyyy hh:mm" label="Label" />
```