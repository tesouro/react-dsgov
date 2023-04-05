import classNames from 'classnames';
import React from 'react';
import IMtProps from '../../IMtProps';
import { useSpreadProps } from '../../Util/useSpreadProps';
import { useMtProps } from '../../Util/useMtProps';

export interface CarouselPageProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Cor de background. */
    backgroundColor?: string;
    /** Título a ser mostrado no centro. */
    pageTitle?: string;
    /** Nome do passo. */
    stepName?: string;
    /** Se é ativo ou não. */
    active?: boolean;
} 

const CarouselPage = React.forwardRef<HTMLDivElement, CarouselPageProps>(
    ({className, children, backgroundColor, pageTitle, stepName, active, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        const bgColorClass = backgroundColor && `bg-${backgroundColor}`;


        return (
            <div
                ref={ref}
                className={classNames(
                    'carousel-page',
                    ...mtProps,
                    className
                )}
                data-page="Teste"
                data-step-name={stepName}
                {...spreadProps}
                {...active && {active: 'true'}}
                
                
            >
                <div className={`carousel-content ${bgColorClass}`}>
                    {pageTitle && <div className="h3 carousel-title">{pageTitle}</div>}
                    {children}
                </div>
                
            </div>
        );
    }
); 

CarouselPage.displayName = 'CarouselPage';

export default CarouselPage;