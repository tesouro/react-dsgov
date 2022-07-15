import classNames from "classnames";
import React from "react";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import IMtProps from "../IMtProps";
import { useSpreadProps } from "../Util/useSpreadProps";
import { useMtProps } from "../Util/useMtProps";

interface CardProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    hover?: boolean,
    hFixed?: boolean,
    disabled?: boolean
} 

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({className, children, hover, hFixed, disabled, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <div 
                ref={ref}
                className={classNames(
                    "br-card",
                    hover && "hover",
                    hFixed && "h-fixed",
                    disabled && "disabled",
                    ...mtProps,
                    className
                )}
                {...spreadProps}
            >
                {children}
            </div>
        );
    }
) 

export default Object.assign(Card, {
    Header: CardHeader,
    Content: CardContent,
    Footer: CardFooter
});