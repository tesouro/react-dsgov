import '@govbr-ds/core/dist/components/tooltip/tooltip.min.css'; 

import classNames from 'classnames';
import React, { Children, useCallback, useEffect, useRef, useState } from 'react';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';
import uniqueId from 'lodash.uniqueid';
import TabContent from './TabContent';
import styles from './Tab.module.scss'; 
import useUniqueId from '../Util/useUniqueId';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const core = require('@govbr-ds/core/dist/core');
const Tooltip = core.Tooltip;

interface TabProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** */
    initial?: number;
    inverted?: boolean;
    density?: 'small' | 'medium' | 'large',
    current?: number;
    onTabChange?: (current: number) => void
} 

const Tab = React.forwardRef<HTMLDivElement, TabProps>(
    ({className, children, id, initial = 1, density = 'medium', inverted, current, onTabChange, ...props}, ref) => {
        const fid = useUniqueId(id, 'tab_____');
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        const [currentTab, setCurrentTab] = useState(initial);

        const refNav = useRef(null);

        const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
            if(onTabChange) {
                onTabChange(index + 1);
            }
            setCurrentTab(index + 1);
        }, []);
        
        useEffect(() => {
            if(current) {
                setCurrentTab(current);
            }            
        }, [current]);


        const isNavWithSubtitle = useCallback(() => {
            let subtitle = false;
            Children.map(children, (element : any) => {
                if(element && element.props.subTitle) {
                    subtitle = true;
                }
            });

            return subtitle;
        }, [children]);

        

        useEffect(() => {
            // Aplicando os tooltips
            if(refNav && refNav.current) {
                (refNav.current as HTMLElement)
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
        }, [children]);

        return (
            <div
                ref={ref}
                id={fid}
                className={classNames(
                    styles['br-tab'],
                    {'large': density === 'large'},
                    {'small': density === 'small'},
                    {'inverted' : inverted},
                    className,
                    ...mtProps
                )}
                {...spreadProps}
                
            >
                <nav ref={refNav} className={classNames(
                    styles['tab-nav'],
                    (isNavWithSubtitle() && styles.tabsubtitled)
                )}>
                    <ul>
                        {Children.map(children, (element : any, index) => {
                            if(element && element.props) {
                                return <li 
                                    key={index} 
                                    {...element.props.onlyIcon && {'data-tooltip-text': element.props.title}}
                                    className={classNames(
                                        styles['tab-item'],
                                        currentTab === (index+1) && styles['active'],
                                        {'notification-tooltip' : element.props.onlyIcon}
                                    )}
                                >
                                    <button onClick={(event) => handleClick(event, index)} type="button" data-panel={`${fid}-panel-${index + 1}`}>
                                        {element.props.icon && 
                                            <span className={styles['name']}>
                                                <span className="d-flex flex-column flex-sm-row">
                                                    <span className="icon mb-1 mb-sm-0 mr-sm-1">
                                                        <i className={element.props.icon} aria-hidden="true"></i>
                                                    </span>
                                                    {!element.props.onlyIcon && <span className={styles['name']}>{element.props.title}</span>}
                                                </span>
                                            </span>
                                        }
                                        {!element.props.icon && !element.props.onlyIcon && <span className={styles['name']}>{element.props.title}</span>}
                                        
                                    </button>
                                    {element.props.subTitle && <span className={styles['results']}>{element.props.subTitle}</span>}
                                </li>;
                            } else {
                                return <></>;
                            }
                            
                        })}
                    </ul>
                </nav>
                <div className={styles['tab-content']}>
                    {Children.map(children, (element : any, index : number) => {
                        if(element && element.props) {
                            const {active, ...elementProps} = element.props;
                            return <TabContent key={index} active={currentTab === (index + 1)} {...elementProps} />;
                        } else {
                            return <></>;
                        }
                        
                    })}
                </div>
                
            </div>
        );
    }
); 

Tab.displayName = 'Tab';

export default Object.assign(Tab, {
    Content: TabContent
});