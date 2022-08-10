import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
export interface ItemProps extends React.HTMLAttributes<HTMLElement>, IMtProps {
    /** Se o item tem um highlight ao passar o mouse em cima. */
    highlighted?: boolean;
    /** Se o item tem um divider */
    divider?: boolean;
    /** Se o item está desabilitado. */
    disabled?: boolean;
    /** Se adiciona um Divider após o item. */
    showDividerAfter?: boolean;
    /** Target do item, referenciando o ID de uma lista, caso este item sirva para abrir/fechar a lista. */
    target?: string;
    /** Se abre/fecha. */
    collapsable?: boolean;
    /** Link do item */
    link?: string;
    /** Sub-lista de itens associados a este item. */
    subItems?: React.ReactElement;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
declare const Item: React.ForwardRefExoticComponent<ItemProps & React.RefAttributes<HTMLElement>>;
export default Item;
