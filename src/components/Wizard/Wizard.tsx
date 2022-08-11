import '@govbr-ds/core/dist/core.min.css';

import classNames from 'classnames';
import React, { Children, useEffect, useImperativeHandle, useRef, useState } from 'react';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';
import WizardPanel from './WizardPanel';
import AnyAttribute from 'react-any-attr';
import useCommonProperties from '../Util/useCommonProperties';

export interface WizardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>, IMtProps {
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
  initialStep?: number

  /** Evento a ser disparado ao clicar no botão "Concluir" */
  onConclude? : (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

  /** Evento a ser disparado ao clicar no botão "Cancelar" */
  onCancel? : (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

  /** Evento a ser disparado ao se trocar de step */
  onChange? : (currentStep : number) => void
}

const Wizard = React.forwardRef<HTMLDivElement, WizardProps>(
    ({ 
        className, 
        children, 
        vertical = false,
        height = '400px', 
        showCancelButton = false, 
        cancelButtonText = 'Cancelar',
        prevButtonText = 'Voltar',
        nextButtonText = 'Avançar',
        concludeButtonText = 'Concluir',
        initialStep = 1,
        onConclude = () => {/** */}, 
        onCancel = () => {/** */}, 
        onChange = () => {/** */},
        ...props
    }, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);
        const refElemento = useRef(null);
        const refWrapper = useRef(null);
        const refDiv = useRef(null);
        const refWizardProgress = useRef(null);
        const refWizardForm = useRef<HTMLDivElement>(null);
        const refConcludeButton = useRef(null);
        const refPanel = useRef(null);


        useCommonProperties<HTMLDivElement>(ref, refWrapper);

        const [currentStep, setCurrentStep] = useState<number>(initialStep || 1);

        const handleClickStepButton = (newStep : number) => {
            setCurrentStep(newStep);
            onChange(newStep);
            (refWizardForm.current?.querySelectorAll('.wizard-panel')[newStep - 1] as HTMLElement).focus();
        };

        const handleClickNextStep = () => {
            setCurrentStep((oldCurrentStep) => {
                ((refWizardForm.current?.querySelectorAll('.wizard-panel')[oldCurrentStep] as HTMLElement).querySelector('.wizard-panel-content') as HTMLElement).focus();
                onChange(oldCurrentStep + 1);
                return oldCurrentStep + 1;
            });
        };

        const handleClickPrevStep = () => {
            setCurrentStep((oldCurrentStep) => {
                ((refWizardForm.current?.querySelectorAll('.wizard-panel')[oldCurrentStep-2] as HTMLElement).querySelector('.wizard-panel-content') as HTMLElement).focus();
                onChange(oldCurrentStep - 1);
                return oldCurrentStep - 1;
            });
        };



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


        return (
            <div ref={refDiv} style={{height: height}}>
                <div
                    ref={refWrapper}
                    className={classNames('br-wizard', className, ...mtProps)}
                
                    {...spreadProps}
                    {...vertical && {vertical: 'vertical'}}
                    collapsed="collapsed"
                    step={String(initialStep)}
                >
                    <div ref={refWizardProgress} className="wizard-progress">
                
                        {Children.map(children, (element : any, index) => (
                            <button
                                className="wizard-progress-btn"
                                type="button"
                                title={element.props.title}
                                key={element.props.title}
                                {...{step: index + 1}}
                                onClick={() => handleClickStepButton(index + 1)}
                                {...currentStep === (index + 1) && {active: 'active'}}
                            >
                                <span className="info">{element.props.title}</span>
                            </button>
                        ))}
                    </div>
                    <div className="wizard-form" ref={refWizardForm}>
                        {Children.map(children, (element, index) => (
                            <div key={index} className="wizard-panel" {...currentStep === (index + 1) && {active: 'active'}} >
                                {element}
                                <div className="wizard-panel-btn">
                                    {showCancelButton && <button className="br-button wizard-btn-canc" type="button" onClick={(event) => {if(onCancel) onCancel(event);}}>{cancelButtonText}
                                    </button>}
                                    {index < Children.count(children) - 1 && <button onClick={handleClickNextStep} className="br-button primary wizard-btn-next" type="button">{nextButtonText}
                                    </button>}
                                    {index === Children.count(children) - 1 && <button className="br-button primary wizard-btn" type="button" onClick={(event) => {if(onConclude) onConclude(event);}}>{concludeButtonText}
                                    </button>}
                                    {index > 0 && <button  onClick={handleClickPrevStep}  className="br-button secondary wizard-btn-prev" type="button" ref={refConcludeButton}>{prevButtonText}
                                    </button>}
                                </div>
                            </div>

                        ))} 
                    </div>
                </div>
            </div>
        );
    }
);

Wizard.displayName = 'Wizard';

export default Object.assign(Wizard, {
    Panel: WizardPanel
});