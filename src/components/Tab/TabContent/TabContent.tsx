import classNames from 'classnames';
import React from 'react';
import IMtProps from '../../IMtProps';
import { useSpreadProps } from '../../Util/useSpreadProps';
import { useMtProps } from '../../Util/useMtProps';
import uniqueId from 'lodash.uniqueid';

interface TabContentProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    title?: string;
    subTitle?: string;
    active?: boolean;
    icon?: string;
} 

const TabContent = React.forwardRef<HTMLDivElement, TabContentProps>(
    ({className, children, id = uniqueId('tabcontent_____'), title, active = false, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <div
                ref={ref}
                id={id}
                className={classNames(
                    'tab-panel',
                    (active && 'active'),
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