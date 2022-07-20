import '@govbr-ds/core/dist/core.min.css'
import '@govbr-ds/core/dist/core-init'

import classNames from "classnames";
import React from "react";
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from "../Util/useMtProps";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, IMtProps {
    /** Se o botão é do tipo "Primário". */
    primary?: boolean,
    /** Se o botão é do tipo "Secundário".  */
    secondary?: boolean,
    /** Se o botão é circular. */
    circle?: boolean,
    /** Se o botão tem cor invertida. */
    inverted?: boolean,
    /** Se o botão ocupa uma linha inteira. */
    block?: boolean,
    /** Se o botão é grande. */
    large?: boolean,
    /** Se o botão é pequeno. */
    small?: boolean,
    /** Se o botão tem a propriedade "loading". */
    loading?: boolean,
    /** Se o botão está desabilitado. */
    disabled?: boolean,
    /** Classe de ícone FontAwesome para o botão. */
    icon?: string,
    /** Tipo do botão. */
    type?: "button" | "submit" | "reset"
    /** Se o botão é do tipo Sign-In, especificamente para o botão de logar */
    signIn?: boolean;
    /** Se é um botão do tipo "br-item" */
    isItem?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({children, className, type = "submit", primary, secondary, circle, inverted, block, large, small, loading, disabled, icon, signIn = false, isItem = false, ...props}, ref) => {
        
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <button
                type={type}
                className={classNames(
                    (!signIn && !isItem && "br-button"),
                    (isItem && "br-item"),
                    (signIn && "br-sign-in"),
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

export default Button;
