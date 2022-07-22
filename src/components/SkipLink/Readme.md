O componente skip link consiste em hyperlinks internos que auxiliam usuários a navegarem por uma página com o auxílio do teclado sendo extremamente útil ou até mesmo indispensável para aqueles que dependem do teclado para a navegação.

### Tipo Simples
```js
<>
    <p>Para visualizar o comportamento dos links use a tecla "tab" do teclado.</p>
    <SkipLink 
        data={[
            {
            label: "Ir para o conteúdo (1/4)",
            link: "#main-component"
            },
            {
            label: "Ir para o conteúdo (2/4)",
            link: "#main-component"
            },
            {
            label: "Ir para o conteúdo (3/4)",
            link: "#main-component"
            },
            {
            label: "Ir para o conteúdo (4/4)",
            link: "#main-component"
            }
        ]}        
    />
</>
```

### Tipo Composto
```js
<>
    <p>Para visualizar o comportamento dos links use a tecla "tab" do teclado.</p>
    <SkipLink full 
        data={[
            {
            label: "Ir para o conteúdo (1/4)",
            link: "#main-component"
            },
            {
            label: "Ir para o conteúdo (2/4)",
            link: "#main-component"
            },
            {
            label: "Ir para o conteúdo (3/4)",
            link: "#main-component"
            },
            {
            label: "Ir para o conteúdo (4/4)",
            link: "#main-component"
            }
        ]}        
    />
</>
```