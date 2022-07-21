import '@govbr-ds/core/dist/core.min.css'

import classNames from "classnames";
import React from "react";
import IMtProps from "../../IMtProps";
import { useSpreadProps } from "../../Util/useSpreadProps";
import { useMtProps } from "../../Util/useMtProps";


interface WizardPanelProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Título do painel */
    title: string

    /** Se mostra ou não o header do título */
    showHeader?: boolean;
} 

const WizardPanel = React.forwardRef<HTMLDivElement, WizardPanelProps>(
    ({className, children, title, showHeader = true, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <div
                ref={ref}
                className={classNames(
                    "wizard-panel-content",
                    className,
                    ...mtProps
                )}
                {...spreadProps}
                
            >
                {showHeader && <div className="h3">
                    {title}
                </div>}
                <div className="text" tabIndex={0}>
                    {children}
                </div>
            </div>
        );
    }
) 

export default WizardPanel;