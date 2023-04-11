import '@govbr-ds/core/dist/components/list/list.min.css';

import classNames from 'classnames';
import React, { memo, useEffect, useImperativeHandle, useRef } from 'react';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';
import Divider from '../Divider';
import uniqueId from 'lodash.uniqueid';
import useCommonProperties from '../Util/useCommonProperties';
import useUniqueId from '../Util/useUniqueId';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const core = require('@govbr-ds/core/dist/core-base');

export interface ListProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Título da lista, opcional. */
    title?: string;
    /** Se a lista é horizontal. */
    horizontal?: boolean;
    /** Se a lista está escondida inicialmente. */
    hidden?: boolean;
    /** Expandida ou não */
    expanded?: boolean;
}

export interface ListRef extends HTMLDivElement {
    element: HTMLDivElement
}

const List = React.forwardRef<ListRef, ListProps>(
    ({ className, id, children, role = 'list', title, horizontal = false, hidden = false, expanded, ...props }, ref) => {
        const fid = useUniqueId(id, 'list_____');
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);
        const refElemento = useRef(null);
        const refDiv = useRef<HTMLDivElement>(null);

        useCommonProperties<ListRef>(ref, refDiv, {
            get element() {
                return refDiv.current;
            }
        });

        useEffect(() => {
            if(refDiv.current && !refElemento.current) {
                refElemento.current = new core.BRList('br-list', refDiv.current);
            }
            
        }, []);

        return (
            <div
                ref={refDiv}
                id={fid}
                className={classNames(
                    'br-list',
                    (horizontal && 'horizontal'),
                    className,

                    ...mtProps
                )}
                {...role && { role: role }}
                {...hidden && { hidden: 'hidden' }}
                {...expanded && { expanded: 'expanded' }}
                {...spreadProps}

            >
                {title && 
                <>
                    <div className="header">
                        <div className="title">{title}</div>
                    </div>
                    <Divider />
                </>}
                {children}
            </div>
        );
    }
);

List.displayName = 'List';

export default memo(List);