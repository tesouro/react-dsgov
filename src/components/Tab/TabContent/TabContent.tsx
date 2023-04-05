import classNames from 'classnames';
import React from 'react';
import IMtProps from '../../IMtProps';
import { useSpreadProps } from '../../Util/useSpreadProps';
import { useMtProps } from '../../Util/useMtProps';
import uniqueId from 'lodash.uniqueid';
import useUniqueId from '../../Util/useUniqueId';
import styles from '../Tab.module.scss'; 

export interface TabContentProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    title?: string;
    subTitle?: string;
    active?: boolean;
    icon?: string;
    onlyIcon?: boolean;
} 

const TabContent = React.forwardRef<HTMLDivElement, TabContentProps>(
    ({className, children, id, title, onlyIcon = false, active = false, ...props}, ref) => {
        const fid = useUniqueId(id, 'tabcontent_____');
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);
        

        return (
            <div
                ref={ref}
                id={fid}
                className={classNames(
                    styles['tab-panel'],
                    (active && styles['active']),
                    className,
                    ...mtProps
                )}
                
                {...spreadProps}
                
            >
                {children}
            </div>
        );
    }
); 

TabContent.displayName = 'TabContent';

export default TabContent;