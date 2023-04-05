import '@govbr-ds/core/dist/components/tag/tag.min.css';

import classNames from 'classnames';
import React from 'react';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';
import uniqueId from 'lodash.uniqueid';
import Radio from '../Radio';
import Checkbox from '../Checkbox';
import CustomTag from '../CustomTag';
import useUniqueId from '../Util/useUniqueId';

export interface TagProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /**  */
    type: 'text' | 'checkbox' | 'radio' | 'status' | 'count' | 'icon'
    label?: string

    icon?: string
    density?: 'small' | 'normal' | 'large'
    status?: 'danger' | 'success' | 'warning' | 'info'

    defaultChecked?: boolean;
    checked?: boolean;
    name?: string;
    value?: string;
    
} 

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
    ({className, children, id, type, density = 'normal', status, icon, defaultChecked, checked, name, value, label, ...props}, ref) => {
        const fid = useUniqueId(id, 'tag_____');
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);
        

        return (
            <>
                <CustomTag
                    ref={ref}
                    id={fid}
                    tagName={(type === 'text' || type === 'checkbox' || type === 'radio') ? 'div' : 'span'}
                    className={classNames(
                        'br-tag',
                        ((type === 'radio' || type === 'checkbox') && 'interaction-select'),
                        (type === 'text' && 'text'),
                        (type === 'status' && 'status'),
                        (type === 'count' && 'count'),
                        status,
                        density,
                        className,
                        ...mtProps
                    )}
                    {...spreadProps}
                    
                >
                    {type === 'text' &&
                        <>
                            <i className={icon} aria-hidden="true"></i><span>{label}</span>
                        </>
                    }
                    {type === 'count' && label &&
                    <span>
                        {label}
                    </span>}
                    {type === 'radio' &&
                        <Radio 
                            name={name || ''}
                            {...value && {value: value}}
                            {...label && {label: label}}
                            {...defaultChecked && {defaultChecked: defaultChecked}}  
                            {...checked && {checked: checked}}  
                        />
                    }
                    {type === 'checkbox' &&
                        <Checkbox 
                            name={name || ''}
                            {...value && {value: value}}
                            {...label && {label: label}}
                            {...defaultChecked && {defaultChecked: defaultChecked}}  
                            {...checked && {checked: checked}}   
                        />
                    }
                    {children}
                </CustomTag>
                {type === 'status' && label &&
                <span>
                    {label}
                </span>}
            </>
        );
    }
); 

Tag.displayName = 'Tag';

export default Tag;