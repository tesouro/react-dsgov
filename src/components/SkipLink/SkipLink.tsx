import '@govbr-ds/core/dist/components/skiplink/skiplink.min.css';

import classNames from 'classnames';
import React from 'react';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';
import ISkipLink from './ISkipLink';

export interface SkipLinkProps  extends React.HTMLAttributes<HTMLElement>, IMtProps {
    /** Lista de elementos do skiplink. */
    data: ISkipLink[]
    /** Se é do tipo composto. */
    full?: boolean
} 

const SkipLink = React.forwardRef<HTMLElement, SkipLinkProps>(
    ({className, children, data, full = false, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <nav
                ref={ref}
                className={classNames(
                    'br-skiplink',
                    (full && 'full'),
                    className,
                    ...mtProps
                )}
                {...spreadProps}
                
            >
                {data.map((link, index) => (
                    <a key={index} className="br-item" href={link.link} accessKey={String(index)}>
                        {link.label}
                        <span className="br-tag text ml-1">{index}</span>
                    </a>
                ))}
                {children}
            </nav>
        );
    }
); 

SkipLink.displayName = 'SkipLink';

export default SkipLink;