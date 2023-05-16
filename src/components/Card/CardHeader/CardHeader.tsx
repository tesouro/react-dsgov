import classNames from 'classnames';
import React from 'react';
import IMtProps from '../../IMtProps';
import { useSpreadProps } from '../../Util/useSpreadProps';
import { useMtProps } from '../../Util/useMtProps';

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    cardTitle?: string,
    cardSubtitle?: string,
    cardImageUrl?: string,
    cardImageAlt?: string
    cardButton?: React.ReactElement
    cardCustomAvatar?: React.ReactElement
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
    ({ className, children, cardTitle, cardSubtitle, cardImageUrl, cardImageAlt, cardButton, cardCustomAvatar, ...props }, ref) => {
        
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <div
                ref={ref}
                className={classNames(
                    'card-header',
                    ...mtProps,
                    className
                )}
                {...spreadProps}

            >
                {(cardButton || cardImageUrl || cardSubtitle || cardTitle) &&
                    <div className="d-flex">
                        {cardImageUrl && !cardCustomAvatar && <span className="br-avatar mt-1" title={cardTitle}><span className="image"><img src="https://picsum.photos/id/823/400" alt={cardImageAlt} /></span></span>}
                        {cardCustomAvatar && <>{cardCustomAvatar}</>}
                        {(cardTitle || cardSubtitle) && <div className="ml-3">
                            {cardTitle && <div className="text-weight-semi-bold text-up-02">{cardTitle}</div>}
                            {cardSubtitle && <div>{cardSubtitle}</div>}
                        </div>}
                        {cardButton && <div className="ml-auto">
                            {cardButton}
                        </div>}
                    </div>
                }
                {children}
            </div>
        );
    }
);

CardHeader.displayName = 'CardHeader';

export default CardHeader;