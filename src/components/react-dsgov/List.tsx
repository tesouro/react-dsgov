import classNames from "classnames";
import React from "react";
import IMtProps from "./IMtProps";
import { useSpreadProps } from "./useSpreadProps";
import { useMtProps } from "./useMtProps";

interface ListProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    title?: string;
    horizontal?: boolean;
}

const List = React.forwardRef<HTMLDivElement, ListProps>(
    ({ className, children, role = "list", title, horizontal = false, ...props }, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <div
                ref={ref}
                className={classNames(
                    "br-list",
                    (horizontal && "horizontal"),
                    className,

                    ...mtProps
                )}
                {...role && { role: role }}
                {...spreadProps}

            >
                {title && <div className="header">
                    <div className="title">{title}</div>
                </div>}
                {children}
            </div>
        );
    }
)

export default List;