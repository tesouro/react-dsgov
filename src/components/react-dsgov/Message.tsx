import classNames from "classnames";
import React, { useEffect, useRef } from "react";
import IMtProps from "./IMtProps";
import { useSpreadProps } from "./useSpreadProps";
import { useMtProps } from "./useMtProps";
import CustomTag from "./CustomTag";

const core = require('@govbr-ds/core/dist/core-init');

interface MessageProps extends React.HTMLAttributes<HTMLElement>, IMtProps {
    category: "feedback" | "message",
    type: "danger" | "success" | "info" | "warning",
    icon?: string,
    messageTitle?: string,
    hasCloseButton?: boolean
}

const Message = React.forwardRef<HTMLElement, MessageProps>(
    ({ className, children, category, type, role = "alert", icon, messageTitle, hasCloseButton = true, ...props }, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);
        const refWrapper = useRef(ref);
        const refElement = useRef(null);
        
        useEffect(() => {
            if(refWrapper.current && !refElement.current) {
                refElement.current = new core.BRAlert('br-message', refWrapper.current);
            }            
        }, []);

        
        return (
            <CustomTag
                tagName={category === "feedback" ? "span" : "div"}
                ref={refWrapper}
                className={classNames(
                    (category === "feedback" && "feedback"),
                    (category === "message" && "br-message"),
                    type,
                    className,
                    ...mtProps
                )}
                {...role && { role: role }}
                {...spreadProps}

            >
                {category === "feedback" &&
                    <>
                        {icon && <i className={icon} aria-hidden="true"></i>}
                        {children}
                    </>
                }
                {category === "message" &&
                    <>
                        {icon && <div className="icon"><i className={icon} aria-hidden="true"></i>
                        </div>}
                        <div className="content">{messageTitle && <span className="message-title">{messageTitle}&nbsp;</span>}<span className="message-body">{children}</span></div>
                        <div className="close">
                            {hasCloseButton && <button className="br-button circle small" type="button" aria-label="Fechar"><i className="fas fa-times" aria-hidden="true"></i>
                            </button>}
                        </div>
                        
                    </>
                }

            </CustomTag>
        );
    }
)

export default Message;