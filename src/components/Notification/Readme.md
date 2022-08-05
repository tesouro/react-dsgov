Notification (notificação) são mensagens enviadas por aplicativos ou sites que fornecem informações curtas, oportunas e relevantes ao usuário.

### Notification
```js
import { Tab, List, Notification, Button, Tag } from '../index';
import { loremIpsum } from 'react-lorem-ipsum';
<Notification name="Fulano da Silva" email="nome.sobrenome@dominio.gov">
    <Tab>
        <Tab.Content icon="fas fa-bell" title="Notificações" onlyIcon>
            <List>
                <Button isItem icon="fas fa-heartbeat" >Link de Acesso</Button>
                <Button isItem icon="fas fa-heartbeat" >Link de Acesso</Button>
                <Button isItem icon="fas fa-heartbeat" >Link de Acesso</Button>
            </List>
        </Tab.Content>
        <Tab.Content icon="fas fa-envelope" title="Mensagens" onlyIcon>
            <List>
                <Button isItem>
                    <Tag type="status" density='small' status="warning"/><Tag type="status" density='small' status="warning"/>
                    <span className="text-bold">Título</span><span className="text-medium mb-2">25 de out</span>
                    {loremIpsum({p:1, random:true}).map((text, index) => <span key={index}>{text}</span>)}
                </Button>
                <Button isItem>
                    <Tag type="status" density='small' status="warning"/><Tag type="status" density='small' status="warning"/>
                    <span className="text-bold">Título</span><span className="text-medium mb-2">25 de out</span>
                    {loremIpsum({p:1, random:true}).map((text, index) => <span key={index}>{text}</span>)}
                </Button>
                <Button isItem>
                    <Tag type="status" density='small' status="warning"/><Tag type="status" density='small' status="warning"/>
                    <span className="text-bold">Título</span><span className="text-medium mb-2">25 de out</span>
                    {loremIpsum({p:1, random:true}).map((text, index) => <span key={index}>{text}</span>)}
                </Button>
            </List>
        </Tab.Content>
    </Tab>
</Notification>
```