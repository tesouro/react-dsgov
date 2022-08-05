As Tabs (Abas) são Componentes de Navegação em Interface que tem a função de organizar o conteúdo da página em categorias ou seções, oferecendo maior usabilidade ao usuário.

### Tab Simples
```js
<Tab>
    <Tab.Content title="Sobre">
        Painel Sobre
    </Tab.Content>
    <Tab.Content title="Todos">
        Painel Todos
    </Tab.Content>
    <Tab.Content title="Notícias">
        Painel Notícias
    </Tab.Content>
    <Tab.Content title="Serviços">
        Painel Serviços
    </Tab.Content>
    <Tab.Content title="Aplicativos">
        Painel Aplicativos
    </Tab.Content>
    <Tab.Content title="Mídias">
        Painel Mídias
    </Tab.Content>
</Tab>
```
```js
<Tab>
    <Tab.Content title="Sobre" icon="fas fa-image">
        Painel Sobre
    </Tab.Content>
    <Tab.Content title="Todos" icon="fas fa-image">
        Painel Todos
    </Tab.Content>
    <Tab.Content title="Notícias" icon="fas fa-image">
        Painel Notícias
    </Tab.Content>
    <Tab.Content title="Serviços" icon="fas fa-image">
        Painel Serviços
    </Tab.Content>
    <Tab.Content title="Aplicativos" icon="fas fa-image">
        Painel Aplicativos
    </Tab.Content>
    <Tab.Content title="Mídias" icon="fas fa-image">
        Painel Mídias
    </Tab.Content>
</Tab>
```

### Tab com contadores
```js
<Tab>
    <Tab.Content title="Sobre" subTitle='(124)'>
        Painel Sobre
    </Tab.Content>
    <Tab.Content title="Todos" subTitle='(74)'>
        Painel Todos
    </Tab.Content>
    <Tab.Content title="Notícias" subTitle='(16)'>
        Painel Notícias
    </Tab.Content>
    <Tab.Content title="Aplicativos" subTitle='(12)'>
        Painel Aplicativos
    </Tab.Content>
</Tab>
```

### Somente Ícones
```js
<Tab>
    <Tab.Content title="Sobre" icon="fas fa-image" onlyIcon>
        Painel Sobre
    </Tab.Content>
    <Tab.Content title="Todos" icon="fas fa-image" onlyIcon>
        Painel Todos
    </Tab.Content>
    <Tab.Content title="Notícias" icon="fas fa-image" onlyIcon>
        Painel Notícias
    </Tab.Content>
    <Tab.Content title="Serviços" icon="fas fa-image" onlyIcon>
        Painel Serviços
    </Tab.Content>
    <Tab.Content title="Aplicativos" icon="fas fa-image" onlyIcon>
        Painel Aplicativos
    </Tab.Content>
    <Tab.Content title="Mídias" icon="fas fa-image" onlyIcon>
        Painel Mídias
    </Tab.Content>
</Tab>
```

### Densidades
```js
<Tab density="small">
    <Tab.Content title="Sobre">
        Painel Sobre
    </Tab.Content>
    <Tab.Content title="Todos">
        Painel Todos
    </Tab.Content>
    <Tab.Content title="Notícias">
        Painel Notícias
    </Tab.Content>
    <Tab.Content title="Serviços">
        Painel Serviços
    </Tab.Content>
    <Tab.Content title="Aplicativos">
        Painel Aplicativos
    </Tab.Content>
    <Tab.Content title="Mídias">
        Painel Mídias
    </Tab.Content>
</Tab>
```
```js
<Tab density="medium">
    <Tab.Content title="Sobre">
        Painel Sobre
    </Tab.Content>
    <Tab.Content title="Todos">
        Painel Todos
    </Tab.Content>
    <Tab.Content title="Notícias">
        Painel Notícias
    </Tab.Content>
    <Tab.Content title="Serviços">
        Painel Serviços
    </Tab.Content>
    <Tab.Content title="Aplicativos">
        Painel Aplicativos
    </Tab.Content>
    <Tab.Content title="Mídias">
        Painel Mídias
    </Tab.Content>
</Tab>
```
```js
<Tab density="large">
    <Tab.Content title="Sobre">
        Painel Sobre
    </Tab.Content>
    <Tab.Content title="Todos">
        Painel Todos
    </Tab.Content>
    <Tab.Content title="Notícias">
        Painel Notícias
    </Tab.Content>
    <Tab.Content title="Serviços">
        Painel Serviços
    </Tab.Content>
    <Tab.Content title="Aplicativos">
        Painel Aplicativos
    </Tab.Content>
    <Tab.Content title="Mídias">
        Painel Mídias
    </Tab.Content>
</Tab>
```

### Tab em fundo escuro
```js
<div class="bg-primary-darken-01 p-3">
    <Tab inverted>
        <Tab.Content title="Sobre">
            Painel Sobre
        </Tab.Content>
        <Tab.Content title="Todos">
            Painel Todos
        </Tab.Content>
        <Tab.Content title="Notícias">
            Painel Notícias
        </Tab.Content>
        <Tab.Content title="Serviços">
            Painel Serviços
        </Tab.Content>
        <Tab.Content title="Aplicativos">
            Painel Aplicativos
        </Tab.Content>
        <Tab.Content title="Mídias">
            Painel Mídias
        </Tab.Content>
    </Tab>
</div>
```