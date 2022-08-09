import '@govbr-ds/core/dist/core.min.css';

import classNames from 'classnames';
import React, { ForwardedRef, MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const core = require('@govbr-ds/core/dist/core-init');
const Tooltip = core.Tooltip;

export interface IStep {
    label?: string,
    status?: 'warning' | 'success' | 'info' | 'danger',
    icon?: string
}

export interface StepProps  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>, IMtProps {
    /** Orientação.
     * 
     * - horizontal: os steps são organizados na horizontal.
     * - vertical: os steps são organizados na vertical.
     */
    orientation?: 'horizontal' | 'vertical',
    /**
     * Lista de steps a serem renderizados.
     */
    steps: IStep[] | string[],
    /**
     * Step inicial.
     */
    initialStep?: number,
    /**
     * Posição da label.
     */
    labelPosition?: 'top' | 'bottom' | 'left' | 'right',
    /**
     * Tipo do step.
     * 
     * - void: só um ponto, sem texto. Pode ser com ícone.
     * - simple: apenas pontinhos juntos.
     * - text: formato de texto (1/5, 2/5, ...)
     */
    type?: 'void' | 'simple' | 'text'
    /** Determina se haverá um rolagem horizontal caso a quantidade de botões em tela ultrapasse a área visivel. */
    scroll?: boolean,

    onChange?: (value : number) => void,
    value?: number
} 

const Step = React.forwardRef<HTMLDivElement, StepProps>(
    ({className, children, orientation = 'horizontal', steps, initialStep = 1, labelPosition = 'top', type, scroll = false, onChange = () => {/* */}, value, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);
        const [labelTruePosition, setLabelTruePosition] = useState<string | undefined>(type && ['void', 'text', 'simple'].includes(type) ? undefined : labelPosition);
        const [currentStep, setCurrentStep] = useState(initialStep);

        const refDiv = useRef(ref);
        const refStepProgress = useRef(null);

        const handleStepClick = (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            if(event.currentTarget.dataset.step) {
                const step : string = event.currentTarget.dataset.step;
                setCurrentStep(Number(step));
                onChange(Number(step));
            }   
            
        };

        const getStepCount = useCallback(() => {
            return steps.length;
        }, [steps]);

        useEffect(() => {
            if(value) {
                setCurrentStep(value);
            }
        }, [value]);

        useEffect(() => {

            // Aplicando os tooltips
            if(refStepProgress && refStepProgress.current) {
                (refStepProgress.current as HTMLElement)
                    .querySelectorAll('[data-tooltip-text]')
                    .forEach((TooltipExample : Element) => {
                        const texttooltip = TooltipExample.getAttribute('data-tooltip-text');
                        const config = {
                            activator: TooltipExample,
                            placement: 'top',
                            textTooltip: texttooltip,
                        };

                        const tooltip = new Tooltip(config);
                    });
            }
            

        }, [steps]);

        useEffect(() => {
            // Se o tipo for void, simple ou text, então não é pra definir a posição da label
            if(type && ['void', 'text', 'simple'].includes(type)) {
                setLabelTruePosition(undefined);
            } else {
                setLabelTruePosition(labelPosition);
            }
            
        }, [labelPosition, type]);

        return (
            <div
                ref={refDiv}
                className={classNames(
                    'br-step',
                    (orientation === 'horizontal' && 'horizontal'),
                    (orientation === 'vertical' && 'vertical'),
                    className,
                    ...mtProps
                )}
                {...initialStep && {'data-initial': initialStep}}
                {...labelTruePosition && {'data-label': labelTruePosition}}
                {...scroll && {'data-scroll': 'data-scroll'}}
                {...type && {'data-type': type}}
                {...spreadProps}
                
            >
                <div className="step-progress" ref={refStepProgress}>
                    {steps.map((step, index) => 
                        <button 
                            key={index} 
                            type='button'
                            className='step-progress-btn'
                            data-step={index + 1}
                            onClick={handleStepClick}
                            {...currentStep === (index + 1) && {'active': 'active'}}
                            {...!(step as IStep).icon && {'step-num': index + 1}}
                            {...type === 'void' && {'data-tooltip-text': 'Exemplo de Rótulo 1'}}
                            {...(step as IStep).status && {'data-alert': (step as IStep).status}}
                        >
                            {(step as IStep).icon && <i className={classNames('step-icon', (step as IStep).icon)}></i>}
                            {type === 'text' && <span>/{getStepCount()}</span>}
                            <span className='step-info'>{typeof step === 'string' ? step : step.label}</span>
                            {(step as IStep).status && <span className="step-alert"></span>}
                        </button>
                    )}
                </div>
                {children}
            </div>
        );
    }
); 

Step.displayName = 'Step';

export default Step;