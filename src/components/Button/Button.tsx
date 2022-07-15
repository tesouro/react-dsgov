import PropTypes from "prop-types"
import '@govbr-ds/core/dist/core.min.css'
import '@govbr-ds/core/dist/core-init'

import classNames from "classnames";
import React from "react";
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from "../Util/useMtProps";




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
    icon?: string,
    type?: "button" | "submit" | "reset"
}

const propTypes = {
    /**
     * Se o button tem a propriedade "block" ativada, ou seja, ocupa
     * todo o espaço da linha.
     */
    block: PropTypes.any,
    children: PropTypes.any,
    circle: PropTypes.any,
    className: PropTypes.any,
    disabled: PropTypes.any,
    icon: PropTypes.any,
    inverted: PropTypes.any,
    large: PropTypes.any,
    loading: PropTypes.any,
    primary: PropTypes.any,
    secondary: PropTypes.any,
    small: PropTypes.any,
    /**
     * Tipo do botão.
     * 
     * @type {'button', 'submit', 'reset'}
     */
    type: PropTypes.any
  }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({children, className, type = "submit", primary, secondary, circle, inverted, block, large, small, loading, disabled, icon, ...props}, ref) => {
        
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
                {icon && <i className={icon} aria-hidden="true"></i>}
                {children}
            </button>
        );
    }

) 

Button.propTypes = propTypes;


export default Button;