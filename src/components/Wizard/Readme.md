Wizard é um processo passo a passo que permite ao usuário inserir informações em uma ordem prescrita e na qual as etapas subsequentes podem depender das informações inseridas nas etapas anteriores.


### Wizard na Horizontal
```js
<Wizard height="400px" onConclude={(event) => alert("Cliquei em Concluir")}>
    <Wizard.Panel title="Dados Pessoais">
        Conteúdo aqui - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    </Wizard.Panel>
    <Wizard.Panel title="Validar Dados">
        Conteúdo aqui - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    </Wizard.Panel>
    <Wizard.Panel title="Habilitar Cadastro">
        Conteúdo aqui - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    </Wizard.Panel>
    <Wizard.Panel title="Cadastrar Senha">
        Conteúdo aqui - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    </Wizard.Panel>
    <Wizard.Panel title="Finalizar">
        Conteúdo aqui - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    </Wizard.Panel>
</Wizard>
```

### Wizard na Vertical
```js
<Wizard vertical height="400px" onConclude={(event) => alert("Cliquei em Concluir")}>
    <Wizard.Panel title="Dados Pessoais">
        Conteúdo aqui - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    </Wizard.Panel>
    <Wizard.Panel title="Validar Dados">
        Conteúdo aqui - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    </Wizard.Panel>
    <Wizard.Panel title="Habilitar Cadastro">
        Conteúdo aqui - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    </Wizard.Panel>
    <Wizard.Panel title="Cadastrar Senha">
        Conteúdo aqui - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    </Wizard.Panel>
    <Wizard.Panel title="Finalizar">
        Conteúdo aqui - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    </Wizard.Panel>
</Wizard>
```