import classNames from 'classnames';
import React from 'react';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';

interface AvatarProps  extends React.HTMLAttributes<HTMLSpanElement>, IMtProps {
    title?: string;
    imageSrc?: string;
    letter?: string;
    alt?: string;
    density?: 'small' | 'medium' | 'large'
} 

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
    ({className, children, title, imageSrc, alt = 'Avatar', density = 'small', letter, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <span
                ref={ref}
                title={title}
                className={classNames(
                    'br-avatar',
                    className,
                    ...mtProps
                )}
                {...spreadProps}
                
            >
                {imageSrc && <span className="image"><img src={imageSrc} alt={alt} /></span>}
                {letter && !imageSrc && <span className="letter bg-violet-50 text-pure-0">{letter}</span>}
                {children}
            </span>
        );
    }
); 

Avatar.displayName = 'Avatar';

export default Avatar;