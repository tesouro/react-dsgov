import classNames from "classnames";
import React from "react";
import IMtProps from "../IMtProps";
import { useSpreadProps } from "../Util/useSpreadProps";
import { useMtProps } from "../Util/useMtProps";

interface GroupProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {

} 

const Group = React.forwardRef<HTMLDivElement, GroupProps>(
    ({className, children, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <div
                ref={ref}
                className={classNames(
                    "group",
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

export default Group;