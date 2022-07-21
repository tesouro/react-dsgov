O Message (Mensagem) é um Componente de Interface que tem como finalidade proporcionar feedback ao usuário sobre o que ocorre no sistema.


### Mensagens
```js
<Message category='message' messageTitle="Data de início do afastamento inválida." type="danger" icon="fas fa-times-circle">
    O CPF deve conter apenas dígitos.
</Message>
<Message category='message' messageTitle="Sucesso." type="success" icon="fas fa-check-circle">
    Campo correto.
</Message>
<Message category='message' messageTitle="Informação." type="warning" icon="fas fa-exclamation-triangle">
    A tecla CAPS-LOCK está ativada.
</Message>
<Message category='message' messageTitle="Atenção." type="info" icon="fas fa-check-circle">
    Os arquivos devem ser no formato PNG, JPG, PDF e ter no máximo 1GB.
</Message>
```

### Feedback
```js
<p><Message category='feedback' type="danger" icon="fas fa-times-circle">O CPF deve conter apenas dígitos.</Message></p>
<p><Message category='feedback' type="success" icon="fas fa-check-circle">Campo correto.</Message></p>
<p><Message category='feedback' type="warning" icon="fas fa-exclamation-triangle">A tecla CAPS-LOCK está ativada.</Message></p>
<p><Message category='feedback' type="info" icon="fas fa-check-circle">Os arquivos devem ser no formato PNG, JPG, PDF e ter no máximo 1GB.</Message></p>
```