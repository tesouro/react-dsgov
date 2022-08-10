import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
    xl?: boolean;
    fluid?: boolean;
}
declare const Container: React.ForwardRefExoticComponent<ContainerProps & React.RefAttributes<HTMLDivElement>>;
export default Container;
