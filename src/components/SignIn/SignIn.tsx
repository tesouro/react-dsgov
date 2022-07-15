import classNames from "classnames";
import React from "react";
import IMtProps from "../IMtProps";
import { useSpreadProps } from "../Util/useSpreadProps";
import { useMtProps } from "../Util/useMtProps";

interface SignInProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    icon?: string;
} 

const SignIn = React.forwardRef<HTMLDivElement, SignInProps>(
    ({className, children, icon, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <div
                ref={ref}
                className={classNames(
                    "br-signin",
                    className,
                    ...mtProps
                )}
                {...spreadProps}
                
            >
                <i className={icon} aria-hidden="true"></i>
                {children}
            </div>
        );
    }
) 

export default SignIn;