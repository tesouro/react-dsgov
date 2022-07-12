import '@govbr-ds/core/dist/core.min.css'
import '@govbr-ds/core/dist/core-init'

import classNames from "classnames";
import React from "react";
import IMtProps from './IMtProps';
import { useMtProps } from './useMtProps';
import { useSpreadProps } from './useSpreadProps';


interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, IMtProps {
    primary?: boolean,
    secondary?: boolean,
    circle?: boolean,
    inverted?: boolean,
    block?: boolean,
    large?: boolean,
    small?: boolean,
    loading?: boolean,
    disabled?: boolean,
    type?: "button" | "submit" | "reset"
} 

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({children, className, type, primary, secondary, circle, inverted, block, large, small, loading, disabled, ...props}, ref) => {
        
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <button
                type={type}
                className={classNames(
                    "br-button",
                    {"primary" : primary},
                    {"secondary" : secondary},
                    {"circle": circle},
                    {"inverted": inverted},
                    {"block": block},
                    {"large": large},
                    {"small": small},
                    {"loading": loading},
                    ...mtProps,
                    className
                )}
                disabled={disabled}
                ref={ref}
                {...spreadProps}
            >
                {children}
            </button>
        );
    }
) 

export default Button;