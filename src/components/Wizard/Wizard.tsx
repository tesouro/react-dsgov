import classNames from "classnames";
import React from "react";
import IMtProps from "../IMtProps";
import { useSpreadProps } from "../Util/useSpreadProps";
import { useMtProps } from "../Util/useMtProps";

interface WizardProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {

} 

const Wizard = React.forwardRef<HTMLDivElement, WizardProps>(
    ({className, children, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <div
                ref={ref}
                className={classNames(
                    "br-wizard",
                    className,
                    ...mtProps
                )}
                {...spreadProps}
                
            >
                {children}
            </div>
        );
    }
) 

export default Wizard;