import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Se o card mostra muda de comportamento ao passar o mouse em cima. */
    hover?: boolean;
    /** Se ele é fixo horizontalmente. */
    hFixed?: boolean;
    /** Se ele está desabilitado. */
    disabled?: boolean;
}
declare const _default: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>> & {
    Header: React.ForwardRefExoticComponent<import("./CardHeader/CardHeader").CardHeaderProps & React.RefAttributes<HTMLDivElement>>;
    Content: React.ForwardRefExoticComponent<import("./CardContent/CardContent").CardContentProps & React.RefAttributes<HTMLDivElement>>;
    Footer: React.ForwardRefExoticComponent<import("./CardFooter/CardFooter").CardFooterProps & React.RefAttributes<HTMLDivElement>>;
};
export default _default;
