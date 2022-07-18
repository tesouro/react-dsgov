DateTimePicker é um componente que auxilia o usuário na seleção de uma data a partir de um calendário e/ou uma hora a partir de um seletor de horas.

### Simples
```js
<DateTimePicker id="datetime-1" label="Label" />
```

### Timepicker
```js
<DateTimePicker id="datetime-2" dataType="time" placeholder="hh:mm" label="Label" />
```

### Com intervalo de datas
```js
<DateTimePicker id="datetime-3" dataMode="range" placeholder="dd/mm/yyyy até dd/mm/yyyy" label="Label" />
```

### Date + Timepicker
```js
<DateTimePicker id="datetime-4" dataType="datetime-local" placeholder="dd/mm/yyyy hh:mm" label="Label" />
```