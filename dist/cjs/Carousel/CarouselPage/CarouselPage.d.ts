import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../../IMtProps';
export interface CarouselPageProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Cor de background. */
    backgroundColor?: string;
    /** Título a ser mostrado no centro. */
    pageTitle?: string;
    /** Nome do passo. */
    stepName?: string;
    /** Se é ativo ou não. */
    active?: boolean;
}
declare const CarouselPage: React.ForwardRefExoticComponent<CarouselPageProps & React.RefAttributes<HTMLDivElement>>;
export default CarouselPage;
