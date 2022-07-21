Upload é um componente que permite ao usuário selecionar um ou mais arquivos e os enviar por meio de um servidor de aplicação.

### Upload
```js
<Upload label="Teste Upload" uploadTimeout={() => {
    return new Promise((resolve) => {
        // Aqui incluir a lógica de upload
        return setTimeout(resolve, 3000)
    })
}} />
```

### Upload desabilitado
```js
<Upload disabled label="Teste Upload" uploadTimeout={() => {
    return new Promise((resolve) => {
        // Aqui incluir a lógica de upload
        return setTimeout(resolve, 3000)
    })
}} />
```