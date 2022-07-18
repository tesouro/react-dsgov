import classNames from "classnames";
import React, { Children, useEffect, useImperativeHandle, useRef } from "react";
import IMtProps from "../IMtProps";
import { useSpreadProps } from "../Util/useSpreadProps";
import { useMtProps } from "../Util/useMtProps";
import WizardPanel from "./WizardPanel";
import AnyAttribute from "react-any-attr";

const core = require('@govbr-ds/core/dist/core-init');

interface WizardProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
  /** Altura do Wizard. É necessário que o Wizard do DSGov tenha uma altura fixa. */
  height?: string;

  /** Se é do tipo vertical. Do contrário, é horizontal. */
  vertical?: boolean;

  /** Se mostra ou não o botão de cancelar */
  showCancelButton?: boolean;

  /** Texto do botão de cancelar */
  cancelButtonText?: string;
  
  /** Texto do botão para voltar ao passo anterior */
  prevButtonText?: string;
  
  /** Texto do botão de ir ao próximo passo. */
  nextButtonText?: string
  
  /** Texto do botão de concluir. */
  concludeButtonText?: string;

  /** Número da aba inicial */
  step?: number

  /** Evento a ser disparado ao clicar no botão "Concluir" */
  onConclude? : (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

  /** Evento a ser disparado ao clicar no botão "Cancelar" */
  onCancel? : (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Wizard = React.forwardRef<HTMLDivElement, WizardProps>(
  ({ 
        className, 
        children, 
        vertical = false,
        height = "400px", 
        showCancelButton = false, 
        cancelButtonText = "Cancelar",
        prevButtonText = "Voltar",
        nextButtonText = "Avançar",
        concludeButtonText = "Concluir",
        step = 1,
        onConclude, 
        onCancel, 
        ...props
    }, ref) => {
    const mtProps = useMtProps(props);
    const spreadProps = useSpreadProps(props);
    const refElemento = useRef(null);
    const refWrapper = useRef(ref);
    const refDiv = useRef(null);
    const refWizardProgress = useRef(null);
    const refWizardForm = useRef(null);
    const refConcludeButton = useRef(null);

    useImperativeHandle<HTMLDivElement, any>(ref, () => ({
        get div() {
            return refDiv.current;
        },
        get wrapper() {
            return refWrapper.current;
        },
        get wizardProgress() {
            return refWizardProgress.current;
        },
        get wizardForm() {
            return refWizardForm.current;
        },
        get concludeButton() {
            return refConcludeButton.current;
        }
    }));

    useEffect(() => {
        refElemento.current = new core.BRWizard('br-wizard', refWrapper.current);
    }, [])

    return (
        <div ref={refDiv} style={{height: height}}>
            <div
                ref={refWrapper}
                className={classNames("br-wizard", className, ...mtProps)}
                
                {...spreadProps}
                {...vertical && {vertical: "vertical"}}
                collapsed="collapsed"
                step={String(step)}
            >
                <div ref={refWizardProgress} className="wizard-progress">
                
                {Children.map(children, (element : any, index) => (
                    <button
                    className="wizard-progress-btn"
                    type="button"
                    title={element.props.title}
                    key={element.props.title}
                    >
                        <span className="info">{element.props.title}</span>
                    </button>
                ))}
                </div>
                <div className="wizard-form" ref={refWizardForm}>
                {Children.map(children, (element, index) => (
                        <AnyAttribute key={index} attributes={{
                            ...(index === 0 && {active: "active"})
                        }}>
                            <div key={index} className="wizard-panel" >
                                {element}
                                <div className="wizard-panel-btn">
                                    {showCancelButton && <button className="br-button wizard-btn-canc" type="button" onClick={(event) => {if(onCancel) onCancel(event);}}>{cancelButtonText}
                                    </button>}
                                    {index < Children.count(children) - 1 && <button className="br-button primary wizard-btn-next" type="button">{nextButtonText}
                                    </button>}
                                    {index === Children.count(children) - 1 && <button className="br-button primary wizard-btn" type="button" onClick={(event) => {if(onConclude) onConclude(event)}}>{concludeButtonText}
                                    </button>}
                                    {index > 0 && <button className="br-button secondary wizard-btn-prev" type="button" ref={refConcludeButton}>{prevButtonText}
                                    </button>}
                                </div>
                            </div>
                            
                        </AnyAttribute>
                ))} 
                </div>
            </div>
        </div>
    );
  }
);

export default Object.assign(Wizard, {
    Panel: WizardPanel
});