Componente utilizado para representar graficamente um usuário em ambientes virtuais. Pode apresentar-se como ilustração vetorial (avatar icônico), texto (avatar letra) e fotografia (avatar fotográfico).

### Tipos e densidades
```js
<>
    <Avatar mr={3} icon="fas fa-user" />
    <Avatar mr={3} icon="fas fa-user" density="medium" /> 
    <Avatar mr={3} icon="fas fa-user" density="large" /> 
</>
```

```js
<>
    <Avatar mr={3} imageSrc="https://picsum.photos/id/1005/400" />
    <Avatar mr={3} imageSrc="https://picsum.photos/id/287/400" density="medium" /> 
    <Avatar mr={3} imageSrc="https://picsum.photos/id/357/400" density="large" /> 
</>
```

```js
<>
    <Avatar mr={3} bgColor="bg-violet-50" letter="W" />
    <Avatar mr={3} bgColor="bg-orange-50" letter="A" density="medium" /> 
    <Avatar mr={3} bgColor="bg-green-50"  letter="H" density="large" /> 
</>
```

### Avatar com dropdown
```js
import { Avatar, List, Button, Tag } from '../index';
import { loremIpsum } from 'react-lorem-ipsum';

<Avatar imageSrc='https://picsum.photos/id/1005/400' dropdown>
    <List>
        <Button isItem>
            <Tag type="status" density='small' status="warning"/>
            <span className="text-bold">Título</span>
            <span className="d-block text-medium mb-2">25 de out</span>
            {loremIpsum({p:1, random:true}).map((text, index) => <span key={index}>{text}</span>)}
        </Button>
        <Button isItem>
            <Tag type="status" density='small' status="warning"/>
            <span className="text-bold">Título</span>
            <span className="d-block text-medium mb-2">25 de out</span>
            {loremIpsum({p:1, random:true}).map((text, index) => <span key={index}>{text}</span>)}
        </Button>
        <Button isItem>
            <Tag type="status" density='small' status="warning"/>
            <span className="text-bold">Título</span>
            <span className="d-block text-medium mb-2">25 de out</span>
            {loremIpsum({p:1, random:true}).map((text, index) => <span key={index}>{text}</span>)}
        </Button>
    </List>
</Avatar>
```