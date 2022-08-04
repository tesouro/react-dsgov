Steps são indicadores de etapas e progresso que auxiliam os usuários durante um fluxo de trabalho, seguindo uma sequência lógica linear, aleatória, numeradas ou não.

### Step utilizando um estado
```js
import { useState } from 'react';
import { Container, Row, Col} from '../index';
const [currentStep, setCurrentStep] = useState(1);
<Container>
    <Row>
        <Col auto>
            <Step 
                steps={['Exemplo de Rótulo 1', 'Exemplo de Rótulo 2', 'Exemplo de Rótulo 3']}
                orientation="vertical"
                labelPosition="right" 
                initialStep={1}
                onChange={(value) => setCurrentStep(value)}
                value={currentStep}
            />
            <div>Estou no step {currentStep}.</div>
        </Col>
    </Row>
</Container>
```


### Layout na vertical
```js
import { Container, Row, Col} from '../index';
<Container>
    <Row>
        <Col auto>
            <Step 
                steps={['Exemplo de Rótulo 1', 'Exemplo de Rótulo 2', 'Exemplo de Rótulo 3']}
                orientation="vertical"
                labelPosition="right" 
            />
        </Col>
        <Col auto>
            <Step 
                steps={['Exemplo de Rótulo 1', 'Exemplo de Rótulo 2', 'Exemplo de Rótulo 3']}
                orientation="vertical"
                labelPosition="left" 
            />
        </Col>
    </Row>
</Container>
```

### Layout Horizontal
```js
<Step
    my={5}
    steps={[
        {
            label: 'Acesse sua conta',
            status: 'success'
        },
        {
            label: 'Dados da entrega',
            status: 'info'
        },
        {
            label: 'Dados de pagamento',
            status: 'danger'
        },
        {
            label: 'Finalizar',
            status: 'warning'
        }
    ]}
    labelPosition="top" 
/>
```
```js
<Step 
    my={5}
    steps={['Exemplo de Rótulo 1', 'Exemplo de Rótulo 2', 'Exemplo de Rótulo 3']}
    orientation="horizontal"
    labelPosition="bottom" 
/>
```
```js
<Step 
    my={5}
    steps={[
        {
            label: 'Acesse sua conta',
            icon: 'fas fa-lock'
        },
        {
            label: 'Dados da entrega',
            icon: 'fas fa-truck'
        },
        {
            label: 'Dados de pagamento',
            icon: 'fas fa-credit-card'
        },
        {
            label: 'Finalizar',
            icon: 'fas fa-check'
        }
    ]}
    orientation="horizontal"
    labelPosition="right" 
/>
```
```js
<Step 
    my={5}
    steps={['Exemplo de Rótulo 1', 'Exemplo de Rótulo 2', 'Exemplo de Rótulo 3']}
    orientation="horizontal"
    labelPosition="left" 
/>
```

### Steps sem rótulo
```js
<Step 
    my={5}
    type="void"
    steps={['Exemplo de Rótulo 1', 'Exemplo de Rótulo 2', 'Exemplo de Rótulo 3']}
    orientation="horizontal"
    labelPosition="left" 
/>
```
```js
<Step 
    my={5}
    type="void"
    steps={[
        {
            label: 'Acesse sua conta',
            icon: 'fas fa-lock',
            status: 'success'
        },
        {
            label: 'Dados da entrega',
            icon: 'fas fa-truck',
            status: 'info'
        },
        {
            label: 'Dados de pagamento',
            icon: 'fas fa-credit-card',
            status: 'danger'
        },
        {
            label: 'Finalizar',
            icon: 'fas fa-check',
            status: 'warning'
        }
    ]}
    orientation="horizontal"
    labelPosition="left" 
/>
```
```js
<Step 
    my={5}
    type="simple"
    steps={['Exemplo de Rótulo 1', 'Exemplo de Rótulo 2', 'Exemplo de Rótulo 3']}
    orientation="horizontal"
    labelPosition="left" 
/>
```
```js
<Step 
    my={5}
    type="text"
    steps={['Exemplo de Rótulo 1', 'Exemplo de Rótulo 2', 'Exemplo de Rótulo 3']}
    orientation="horizontal"
    labelPosition="left" 
/>
```