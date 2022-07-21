
### Tabela baseada em um endpoint 
```js
<Table
    title="Minha Tabela"
    headers={[
        {field: "codigo", label: "Código"},
        {field: "nome", label: "Nome"},
        {field: "endereco", label: "Endereço"}
        
    ]} 
    endpoint="https://sisweb.tesouro.gov.br/apex/cosis/public/sistemas?pageSize=10&pageNumber=0"
/>

```

Os dados do endpoint devem vir da seguinte forma, para que a paginação funcione corretamente:
```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "recordCount": {
      "type": "integer"
    },
    "pageNumber": {
      "type": "integer"
    },
    "pageSize": {
      "type": "integer"
    },
    "records": {
      "type": "array",
      "items": {}
    }
  },
  "required": [
    "recordCount",
    "pageNumber",
    "pageSize",
    "records"
  ]
}

```

Exemplo:

```json
{
   "recordCount":2
  ,"pageNumber":0
  ,"pageSize":10
  ,"records":[
        {
            id: 1,
            nome: "Jacinda"
        },
        {
            id: 2,
            nome: "Lorena"
        },
	]
}
```


### Tabela custom
```js
<Table title="Minha Tabela">
    <thead>
        <tr>
            <th className="border-bottom" scope="col">Poster name</th>
            <th className="border-bottom border-left" scope="col">Color</th>
            <th className="border-bottom border-left" colSpan={3} scope="colgroup">Sizes available</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th className="border-right" rowSpan={3} scope="rowgroup">Zodiac</th>
            <td>Full color</td>
            <td>A2</td>
            <td>A3</td>
            <td>A4</td>
        </tr>
        <tr>
            <td>Black and white</td>
            <td>A1</td>
            <td>A2</td>
            <td>A3</td>
        </tr>
        <tr>
            <td>Sepia</td>
            <td>A3</td>
            <td>A4</td>
            <td>A5</td>
        </tr>
    </tbody>
    <tbody>
        <tr>
            <th className="border-right" rowSpan={2} scope="rowgroup">Angels</th>
            <td>Black and white</td>
            <td>A1</td>
            <td>A3</td>
            <td>A4</td>
        </tr>
        <tr>
            <td>Sepia</td>
            <td>A2</td>
            <td>A3</td>
            <td>A5</td>
        </tr>
    </tbody>
</Table>

```