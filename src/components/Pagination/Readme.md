O Pagination é um Componente de interface que tem a função de organizar conteúdo de dados em páginas sequenciais, trazendo maior usabilidade durante o consumo da informação pelo usuário.


### Paginação padrão
```js
<Pagination pageCount={10} />
```

### Botão reticências
```js
import {Pagination, Divider} from '../index';
    <>
    <Pagination pageCount={10} ellipsis={[
        {ellipsisStart: 2, ellipsisEnd: 7}
    ]}/>

    <Divider />

    <Pagination pageCount={20} ellipsis={[
        {start: 2, end: 10},
        {start: 16, end: 19}
    ]}/>

    <Divider />

    <Pagination pageCount={20} ellipsis={[
        {start: 5, end: 9}
    ]}/>
</>
```

### Densidades
```js
import {Pagination, Divider} from '../index';
<>
    <Pagination pageCount={10} density="small" />
    <Divider />
    <Pagination pageCount={10} density="large" />
</>
```

### Paginação com mudança de estado
Apenas um exemplo de como fazer usando estado. Mostro páginas diferentes para seleções de páginas 1, 2 e 3.
```js
import {Row, Col, Pagination } from '../index';
import { useState } from 'react';

const [currentPage, setCurrentPage] = useState(1);

<Row>
    <Col>
        {currentPage === 1 && <span>Estou na Página 1</span>}
        {currentPage === 2 && <span>Estou na Página 2</span>}
        {currentPage === 3 && <span>Estou na Página 3</span>}
        
        <Pagination 
            onChange={(newPage) => setCurrentPage(newPage)} 
            pageCount={100} 
            ellipsis={[
                {start: 5, end: 95}
            ]}
        />
    </Col>
</Row>
```


### Paginação com contexto
```js
    <Pagination 
        type="contextual"
        itemCount={50}
    />
```