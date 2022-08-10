import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../../IMtProps';
export interface WizardPanelProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Título do painel */
    title: string;
    /** Se mostra ou não o header do título */
    showHeader?: boolean;
}
declare const WizardPanel: React.ForwardRefExoticComponent<WizardPanelProps & React.RefAttributes<HTMLDivElement>>;
export default WizardPanel;
