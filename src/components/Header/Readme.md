O componente Header é o principal elemento de uma página, onde podem ser agrupados componentes predefinidos que tem como finalidade auxiliar o usuário no acesso ou mesmo execução das funcionalidades principais site/sistema.

Obs.: no Styleguide, o Header não está sendo mostrado da maneira correta, por algum motivo.

### Header padrão
```js
import { Header, Avatar } from '../index';
import { useState } from 'react';
const [loggedIn, setLoggedIn] = useState(false);
<Header 
    urlLogo="https://sisweb.tesouro.gov.br/apex/f?p=2501:9::::9:P9_ID_PUBLICACAO_ANEXO:16884" 
    systemName="Assinatura" 
    title="Título do Header" 
    subTitle="Subtítulo do Header"

    quickAccessLinks={[
        {label: 'Acesso Rápido 1', href: 'javascript:void(0);'},
        {label: 'Acesso Rápido 2', href: 'javascript:void(0);'},
        {label: 'Acesso Rápido 3', href: 'javascript:void(0);'},
        {label: 'Acesso Rápido 4', href: 'javascript:void(0);'}
    ]}

    features={[
        {label: 'Funcionalidade 1', icon: 'fas fa-chart-bar', href: 'https://google.com/'},
        {label: 'Funcionalidade 2', icon: 'fas fa-headset', onClick: () => {alert('Clicou!');} },
        {label: 'Funcionalidade 3', icon: 'fas fa-comment'},
        {label: 'Funcionalidade 4', icon: 'fas fa-adjust'},
    ]}

    loggedIn={loggedIn}
    onClickLogin={() => {
        /** Realizar as ações necessárias para o login */
        setLoggedIn(true);
    }}

    onSearch={(searchTerm) => {
        alert(`Buscando o termo "${searchTerm}"`);
    }}

    avatar={<Avatar imageSrc='https://picsum.photos/id/823/400' />}
/>
```


### Header compacto
```js
import { Header, Avatar } from '../index';
import { useState } from 'react';
const [loggedIn, setLoggedIn] = useState(false);
<Header 
    compact
    urlLogo="https://sisweb.tesouro.gov.br/apex/f?p=2501:9::::9:P9_ID_PUBLICACAO_ANEXO:16884" 
    systemName="Assinatura" 
    title="Título do Header" 
    subTitle="Subtítulo do Header"

    quickAccessLinks={[
        {label: 'Acesso Rápido 1', href: 'javascript:void(0);'},
        {label: 'Acesso Rápido 2', href: 'javascript:void(0);'},
        {label: 'Acesso Rápido 3', href: 'javascript:void(0);'},
        {label: 'Acesso Rápido 4', href: 'javascript:void(0);'}
    ]}

    features={[
        {label: 'Funcionalidade 1', icon: 'fas fa-chart-bar', href: 'https://google.com/'},
        {label: 'Funcionalidade 2', icon: 'fas fa-headset', onClick: () => {alert('Clicou!');} },
        {label: 'Funcionalidade 3', icon: 'fas fa-comment'},
        {label: 'Funcionalidade 4', icon: 'fas fa-adjust'},
    ]}

    loggedIn={loggedIn}
    onClickLogin={() => {
        /** Realizar as ações necessárias para o login */
        setLoggedIn(true);
    }}
    onSearch={(searchTerm) => {
        alert(`Buscando o termo "${searchTerm}"`);
    }}
    avatar={<Avatar imageSrc='https://picsum.photos/id/823/400' />}
/>
```


### Densidades
```js
import { Header, Avatar } from '../index';
import { useState } from 'react';
const [loggedIn, setLoggedIn] = useState(false);
<Header 
    density="small"
    urlLogo="https://sisweb.tesouro.gov.br/apex/f?p=2501:9::::9:P9_ID_PUBLICACAO_ANEXO:16884" 
    systemName="Assinatura" 
    title="Título do Header" 
    subTitle="Subtítulo do Header"

    quickAccessLinks={[
        {label: 'Acesso Rápido 1', href: 'javascript:void(0);'},
        {label: 'Acesso Rápido 2', href: 'javascript:void(0);'},
        {label: 'Acesso Rápido 3', href: 'javascript:void(0);'},
        {label: 'Acesso Rápido 4', href: 'javascript:void(0);'}
    ]}

    features={[
        {label: 'Funcionalidade 1', icon: 'fas fa-chart-bar', href: 'https://google.com/'},
        {label: 'Funcionalidade 2', icon: 'fas fa-headset', onClick: () => {alert('Clicou!');} },
        {label: 'Funcionalidade 3', icon: 'fas fa-comment'},
        {label: 'Funcionalidade 4', icon: 'fas fa-adjust'},
    ]}

    loggedIn={loggedIn}
    onClickLogin={() => {
        /** Realizar as ações necessárias para o login */
        setLoggedIn(true);
    }}
    onSearch={(searchTerm) => {
        alert(`Buscando o termo "${searchTerm}"`);
    }}
    avatar={<Avatar imageSrc='https://picsum.photos/id/823/400' />}
/>
```
```js
import { Header, Avatar } from '../index';
import { useState } from 'react';
const [loggedIn, setLoggedIn] = useState(false);
<Header 
    density="large"
    urlLogo="https://sisweb.tesouro.gov.br/apex/f?p=2501:9::::9:P9_ID_PUBLICACAO_ANEXO:16884" 
    systemName="Assinatura" 
    title="Título do Header" 
    subTitle="Subtítulo do Header"

    quickAccessLinks={[
        {label: 'Acesso Rápido 1', href: 'javascript:void(0);'},
        {label: 'Acesso Rápido 2', href: 'javascript:void(0);'},
        {label: 'Acesso Rápido 3', href: 'javascript:void(0);'},
        {label: 'Acesso Rápido 4', href: 'javascript:void(0);'}
    ]}

    features={[
        {label: 'Funcionalidade 1', icon: 'fas fa-chart-bar', href: 'https://google.com/'},
        {label: 'Funcionalidade 2', icon: 'fas fa-headset', onClick: () => {alert('Clicou!');} },
        {label: 'Funcionalidade 3', icon: 'fas fa-comment'},
        {label: 'Funcionalidade 4', icon: 'fas fa-adjust'},
    ]}

    loggedIn={loggedIn}
    onClickLogin={() => {
        /** Realizar as ações necessárias para o login */
        setLoggedIn(true);
    }}
    onSearch={(searchTerm) => {
        alert(`Buscando o termo "${searchTerm}"`);
    }}
    avatar={<Avatar imageSrc='https://picsum.photos/id/823/400' />}
/>
```