import classNames from "classnames";
import React, { useImperativeHandle, useRef } from "react";
import IMtProps from "../IMtProps";
import { useSpreadProps } from "../Util/useSpreadProps";
import { useMtProps } from "../Util/useMtProps";
import Button from "../Button";


interface MagicButtonProps  extends React.HTMLAttributes<HTMLButtonElement>, IMtProps {
} 

const MagicButton = React.forwardRef<HTMLButtonElement, MagicButtonProps>(
    ({className, children, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);
        const refWrapper = useRef(null);
        
        useImperativeHandle<HTMLButtonElement, any>(ref, () => ({
            get wrapper() {
                return refWrapper.current;
            }
        }));

        return (
            <div
                ref={refWrapper}
                className={classNames(
                    "br-magic-button",
                    className,
                    ...mtProps
                )}                
            >
                <Button
                    ref={ref}
                    {...spreadProps}
                >
                    {children}
                </Button>
                
            </div>
        );
    }
) 

export default MagicButton;