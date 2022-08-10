import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
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
    nextButtonText?: string;
    /** Texto do botão de concluir. */
    concludeButtonText?: string;
    /** Número da aba inicial */
    initialStep?: number;
    /** Evento a ser disparado ao clicar no botão "Concluir" */
    onConclude?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /** Evento a ser disparado ao clicar no botão "Cancelar" */
    onCancel?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /** Evento a ser disparado ao se trocar de step */
    onChange?: (currentStep: number) => void;
}
declare const _default: React.ForwardRefExoticComponent<WizardProps & React.RefAttributes<HTMLDivElement>> & {
    Panel: React.ForwardRefExoticComponent<import("./WizardPanel/WizardPanel").WizardPanelProps & React.RefAttributes<HTMLDivElement>>;
};
export default _default;
