Geralmente localizado na parte inferior das páginas, o footer (rodapé) pode ser organizado de formas distintas. Normalmente essa organização é definida através da combinação de elementos que reforçam a identidade visual com o conteúdo a ser informado, respeitando os objetivos de negócio e as necessidades do usuário.

### Tema Normal
```js
<Footer 
    urlLogo={'https://cdngovbr-ds.estaleiro.serpro.gov.br/design-system/images/logo-negative.png'} 
    links={[
        {
            category: 'Categoria 1',
            items: [
                {
                    label: 'Ad deserunt nostrud',
                    link: 'javascript:void(0);'
                },
                {
                    label: 'Nulla occaecat eiusmod',
                    link: 'javascript:void(0);'
                },
                {
                    label: 'Nulla occaecat eiusmod',
                    link: 'javascript:void(0);'
                }

            ]
        },
        {
            category: 'Categoria 2',
            items: [
                {
                    label: 'Ex qui laborum consectetur aute commodo',
                    link: 'javascript:void(0);'
                },
                {
                    label: 'Nulla occaecat eiusmod',
                    link: 'javascript:void(0);'
                },
                {
                    label: 'Ex qui laborum consectetur aute commodo',
                    link: 'javascript:void(0);'
                }

            ]
        },
        {
            category: 'Categoria 3',
            items: [
                {
                    label: 'Ad deserunt nostrud',
                    link: 'javascript:void(0);'
                },
                {
                    label: 'Ex qui laborum consectetur aute commodo',
                    link: 'javascript:void(0);'
                },
                {
                    label: 'Nulla occaecat eiusmod',
                    link: 'javascript:void(0);'
                }

            ]
        },
        {
            category: 'Categoria 4',
            items: [
                {
                    label: 'Ad deserunt nostrud',
                    link: 'javascript:void(0);'
                },
                {
                    label: 'Ex qui laborum consectetur aute commodo',
                    link: 'javascript:void(0);'
                },
                {
                    label: 'Nulla occaecat eiusmod',
                    link: 'javascript:void(0);'
                }

            ]
        },
        {
            category: 'Categoria 5',
            items: [
                {
                    label: 'Ex qui laborum consectetur aute commodo',
                    link: 'javascript:void(0);'
                },
                {
                    label: 'Nulla occaecat eiusmod',
                    link: 'javascript:void(0);'
                },
                {
                    label: 'Nulla occaecat eiusmod',
                    link: 'javascript:void(0);'
                }

            ]
        },
        {
            category: 'Categoria 6',
            items: [
                {
                    label: 'Ex qui laborum consectetur aute commodo',
                    link: 'javascript:void(0);'
                },
                {
                    label: 'Nulla occaecat eiusmod',
                    link: 'javascript:void(0);'
                },
                {
                    label: 'Nulla occaecat eiusmod',
                    link: 'javascript:void(0);'
                }

            ]
        },
    ]} 
    socialNetworks={[
        {name: 'Facebook', link: 'javascript:void(0);', icon: 'fab fa-facebook-square'},
        {name: 'Twitter', link: 'javascript:void(0);', icon: 'fab fa-twitter-square'},
        {name: 'Linkedin', link: 'javascript:void(0);', icon: 'fab fa-linkedin'}
    ]}

    userLicenseText={<>Texto destinado a exibição de informações relacionadas à&nbsp;<b>licença de uso.</b></>}
/>
```
### Tema Invertido
```js
<Footer 
    inverted
    urlLogo={'https://cdngovbr-ds.estaleiro.serpro.gov.br/design-system/images/logo-positive.png'} 
    links={[
        {
            category: 'Categoria 1',
            items: [
                {
                    label: 'Ad deserunt nostrud',
                    link: 'javascript:void(0);'
                },
                {
                    label: 'Nulla occaecat eiusmod',
                    link: 'javascript:void(0);'
                },
                {
                    label: 'Nulla occaecat eiusmod',
                    link: 'javascript:void(0);'
                }

            ]
        },
        {
            category: 'Categoria 2',
            items: [
                {
                    label: 'Ex qui laborum consectetur aute commodo',
                    link: 'javascript:void(0);'
                },
                {
                    label: 'Nulla occaecat eiusmod',
                    link: 'javascript:void(0);'
                },
                {
                    label: 'Ex qui laborum consectetur aute commodo',
                    link: 'javascript:void(0);'
                }

            ]
        },
        {
            category: 'Categoria 3',
            items: [
                {
                    label: 'Ad deserunt nostrud',
                    link: 'javascript:void(0);'
                },
                {
                    label: 'Ex qui laborum consectetur aute commodo',
                    link: 'javascript:void(0);'
                },
                {
                    label: 'Nulla occaecat eiusmod',
                    link: 'javascript:void(0);'
                }

            ]
        },
        {
            category: 'Categoria 4',
            items: [
                {
                    label: 'Ad deserunt nostrud',
                    link: 'javascript:void(0);'
                },
                {
                    label: 'Ex qui laborum consectetur aute commodo',
                    link: 'javascript:void(0);'
                },
                {
                    label: 'Nulla occaecat eiusmod',
                    link: 'javascript:void(0);'
                }

            ]
        },
        {
            category: 'Categoria 5',
            items: [
                {
                    label: 'Ex qui laborum consectetur aute commodo',
                    link: 'javascript:void(0);'
                },
                {
                    label: 'Nulla occaecat eiusmod',
                    link: 'javascript:void(0);'
                },
                {
                    label: 'Nulla occaecat eiusmod',
                    link: 'javascript:void(0);'
                }

            ]
        },
        {
            category: 'Categoria 6',
            items: [
                {
                    label: 'Ex qui laborum consectetur aute commodo',
                    link: 'javascript:void(0);'
                },
                {
                    label: 'Nulla occaecat eiusmod',
                    link: 'javascript:void(0);'
                },
                {
                    label: 'Nulla occaecat eiusmod',
                    link: 'javascript:void(0);'
                }

            ]
        },
    ]} 
    socialNetworks={[
        {name: 'Facebook', link: 'javascript:void(0);', icon: 'fab fa-facebook-square'},
        {name: 'Twitter', link: 'javascript:void(0);', icon: 'fab fa-twitter-square'},
        {name: 'Linkedin', link: 'javascript:void(0);', icon: 'fab fa-linkedin'}
    ]}

    userLicenseText={<>Texto destinado a exibição de informações relacionadas à&nbsp;<b>licença de uso.</b></>}
/>
```
