import classNames from "classnames";
import React, { useEffect, useRef } from "react";
import IMtProps from "../IMtProps";
import { useSpreadProps } from "../Util/useSpreadProps";
import { useMtProps } from "../Util/useMtProps";
import Divider from "../Divider";
import CustomTag from "../CustomTag";

const core = require('@govbr-ds/core/dist/core-init');

interface ItemProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Se o item tem um highlight ao passar o mouse em cima. */
    highlighted?: boolean;
    /** Se o item tem um divider */
    divider?: boolean;
    /** Se o item está desabilitado. */
    disabled?: boolean;
    /** Se adiciona um Divider após o item. */
    showDividerAfter?: boolean;
    /** Target do item, referenciando o ID de uma lista, caso este item sirva para abrir/fechar a lista. */
    target?: string;
    /** Se abre/fecha. */
    collapsable?: boolean;
    /** Link do item */
    link?: string;
} 

const Item = React.forwardRef<HTMLDivElement, ItemProps>(
    ({className, children, highlighted, divider, role = "listItem", disabled = false, showDividerAfter = false, target, collapsable = false, link, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);
        const refDiv = useRef(ref);
        const refElemento = useRef(null);

        useEffect(() => {
            if(refDiv.current && !refElemento.current) {
                refElemento.current = new core.BRItem('br-item', refDiv.current);
            }
            
        }, [])

        return (
            <>
                <CustomTag
                    ref={refDiv}
                    tagName={link ? "a" : "div"}
                    className={classNames(
                        "br-item",
                        (highlighted && "highlighted"),
                        (divider && "divider"),
                        className,
                        ...mtProps
                    )}
                    {...role && {role: role}}
                    {...disabled && {disabled: true}}
                    {...target && {"data-target": target}}
                    {...collapsable && {"data-toggle": "collapse"}}
                    {...spreadProps}
                    {...link && {href: link}}
                    
                >
                    {children}
                    {collapsable && <i className="fas fa-angle-down" aria-hidden="true"></i>}
                </CustomTag>
                {showDividerAfter && <Divider />}
            </>
        );
    }
) 

export default Item;