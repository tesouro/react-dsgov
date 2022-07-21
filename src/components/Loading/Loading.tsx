import classNames from "classnames";
import React from "react";
import IMtProps from "../IMtProps";
import { useSpreadProps } from "../Util/useSpreadProps";
import { useMtProps } from "../Util/useMtProps";

interface LoadingProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Número indicando o progresso do loading. Opcional. */
    progress?: number;
    /** Tamahnho do Loading.
     * 
     * - medium
     * - small
     */
    size?: "medium" | "small"
} 

const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(
    ({className, children, progress, size = "medium", ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <div
                ref={ref}
                className={classNames(
                    (progress && "br-loading"),
                    (!progress && "loading"),
                    (size === "medium" && "medium"),
                    className,
                    ...mtProps
                )}
                {...progress && {"data-progress": progress}}
                {...spreadProps}
                
            >
                {progress && 
                    <>
                        <div className="br-loading-mask full">
                            <div className="br-loading-fill"></div>
                        </div>
                        <div className="br-loading-mask">
                            <div className="br-loading-fill"></div>
                        </div>
                    </>
                }
            </div>
        );
    }
) 

export default Loading;