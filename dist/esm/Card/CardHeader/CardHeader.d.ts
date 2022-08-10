import React from 'react';
import IMtProps from '../../IMtProps';
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    cardTitle?: string;
    cardSubtitle?: string;
    cardImageUrl?: string;
    cardImageAlt?: string;
    cardButton?: React.ReactElement;
}
declare const CardHeader: React.ForwardRefExoticComponent<CardHeaderProps & React.RefAttributes<HTMLDivElement>>;
export default CardHeader;
