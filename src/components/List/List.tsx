import classNames from "classnames";
import React, { useEffect, useRef } from "react";
import IMtProps from "../IMtProps";
import { useSpreadProps } from "../Util/useSpreadProps";
import { useMtProps } from "../Util/useMtProps";
import Divider from "../Divider";

const core = require('@govbr-ds/core/dist/core-init');

interface ListProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    title?: string;
    horizontal?: boolean;
    hidden?: boolean;
}

const List = React.forwardRef<HTMLDivElement, ListProps>(
    ({ className, children, role = "list", title, horizontal = false, hidden = false, ...props }, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);
        const refElemento = useRef(null);
        const refDiv = useRef(ref);

        useEffect(() => {
            if(refDiv.current && !refElemento.current) {
                refElemento.current = new core.BRList('br-list', refDiv.current);
            }
            
        }, [])

        return (
            <div
                ref={refDiv}
                className={classNames(
                    "br-list",
                    (horizontal && "horizontal"),
                    className,

                    ...mtProps
                )}
                {...role && { role: role }}
                {...hidden && { hidden: "hidden" }}
                {...spreadProps}

            >
                {title && 
                <>
                    <div className="header">
                        <div className="title">{title}</div>
                    </div>
                    <Divider />
                </>}
                {children}
            </div>
        );
    }
)

export default List;