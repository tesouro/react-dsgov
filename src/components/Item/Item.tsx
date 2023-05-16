import '@govbr-ds/core/dist/components/item/item.min.css';

import classNames from 'classnames';
import React, { ComponentType, memo, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';
import Divider from '../Divider';
import CustomTag from '../CustomTag';
import List from '../List/List';
import useCommonProperties from '../Util/useCommonProperties';
import styles from './Item.module.scss';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const core = require('@govbr-ds/core/dist/core-base');

export interface ItemProps  extends React.HTMLAttributes<HTMLElement>, IMtProps {
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
    subItems?: React.ReactElement

    onClick?: (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => void

    /** Se é inicialmente expandido. */
    initiallyExpanded?: boolean;
} 

export interface ItemRef extends HTMLDivElement {
    element: HTMLElement
}

const Item = React.forwardRef<ItemRef, ItemProps>(
    ({className, children, highlighted, divider, role = 'listItem', disabled = false, showDividerAfter = false, target, collapsable = false, initiallyExpanded = false, link, subItems, onClick, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);
        const refDiv = useRef<HTMLDivElement>(null);
        const refElemento = useRef(null);

        const [expanded, setExpanded] = useState<boolean>(initiallyExpanded);


        useCommonProperties<ItemRef>(ref, refDiv, {
            get element() {
                return refDiv.current;
            }
        });

        useEffect(() => {
            if(refDiv.current && !refElemento.current) {
                refElemento.current = new core.BRItem('br-item', refDiv.current);
            }            
        }, []);

        const handleOnClick = useCallback((event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            onClick?.(event);
            setExpanded(oldExpanded => !oldExpanded);
        }, [onClick]);

        return (
            <>
                <CustomTag
                    ref={refDiv}
                    tagName={link ? 'a' : 'div'}
                    onClick={handleOnClick}
                    className={classNames(
                        'br-item',
                        (highlighted && 'highlighted'),
                        (divider && 'divider'),
                        className,
                        ...mtProps
                    )}
                    {...role && {role: role}}
                    {...disabled && {disabled: true}}
                    {...target && {'data-target': target}}
                    {...collapsable && {'data-toggle': 'collapse'}}
                    {...collapsable && subItems && {'data-visible': expanded}}
                    {...collapsable && subItems && {'aria-expanded': expanded}}
                    {...spreadProps}
                    {...link && {href: link}}
                    
                >
                    {children}
                    {collapsable &&  <i className={classNames('fas', expanded ? 'fa-chevron-up' : 'fa-chevron-down', styles['icon-expansion'])} aria-hidden="true"></i>}
                </CustomTag>
                {showDividerAfter && <Divider />}
                {subItems &&
                    <List hidden={!expanded && collapsable} aria-hidden={!expanded && collapsable}>
                        {subItems}
                    </List>
                }
            </>
        );
    }
); 

Item.displayName = 'Item';

export default memo(Item);