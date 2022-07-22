Os menus de navegação (ou simplesmente menus) são listas de categorias de conteúdo ou recursos, normalmente apresentados como um conjunto de links ou ícones agrupados com um estilo visual diferente do resto do design.

(documentação incompleta)

```js
import {Row, Col, Button, Menu} from '../index';
const imageSample = "";

<Row>
    <Col>
    <Button circle icon="fas fa-bars" data-target="#menuprincipal" data-toggle="menu"></Button>Acionar Menu
    <Menu
        id="menuprincipal"
        shadow
        systemName="Meu Sistema"
        systemLogoUrl={imageSample}
        data={[
        {
            label: "Teste 1",
            link: "https://google.com/",
            icon: "fas fa-moon"
        },
        {
            label: "Teste 2",
            icon: "fas fa-moon",
            submenu: [
            {
                label: "Teste 3",
                link: "https://google.com/",
                icon: "fas fa-moon"
            },
            {
                label: "Teste 3.4",
                icon: "fas fa-moon",
                submenu: [
                {
                    label: "Teste X",
                    icon: "fas fa-moon",
                    link: "https://google.com/"
                }
                ]
            },
            {
                label: "Teste 4",
                link: "https://google.com/",
                icon: "fas fa-moon"
            }
            ]
        }
        ]}
        logos={[
        {
            src: imageSample,
            alt: "Logo 01"
        },
        {
            src: imageSample,
            alt: "Logo 02"
        },
        ]}

        externalLinks={[
        {
            link: "https://google.com/",
            label: "Link externo 01"
        },
        {
            link: "https://google.com/",
            label: "Link externo 02"
        }
        ]}

        socialNetworks={[
        {
            link: "javascript:void(0)",
            icon: "fab fa-facebook-f",
            name: "Facebook"
        },
        {
            link: "javascript:void(0)",
            icon: "fab fa-twitter",
            name: "Twitter"
        },
        {
            link: "javascript:void(0)",
            icon: "fab fa-linkedin-in",
            name: "Linkedin"
        },
        {
            link: "javascript:void(0)",
            icon: "fab fa-whatsapp",
            name: "Whatsapp"
        }
        ]}

        info={<div className="text-center text-down-01">
        Todo o conteúdo deste site está publicado sob a licença <strong>Creative Commons Atribuição-SemDerivações 3.0</strong>
        </div>}

    />
    </Col>
</Row>

```