import classNames from 'classnames';
import React, { Children, useCallback, useState } from 'react';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';
import uniqueId from 'lodash.uniqueid';
import TabContent from './TabContent';
import styles from './Tab.module.scss'; 

interface TabProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** */
    initial?: number;
    inverted?: boolean;
    density?: 'small' | 'medium' | 'large'
} 

const Tab = React.forwardRef<HTMLDivElement, TabProps>(
    ({className, children, id = uniqueId('tab_____'), initial = 1, density = 'medium', inverted, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        const [currentTab, setCurrentTab] = useState(initial);

        const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
            setCurrentTab(index + 1);
        };

        const isNavWithSubtitle = useCallback(() => {
            let subtitle = false;
            Children.map(children, (element : any) => {
                if(element.props.subTitle) {
                    subtitle = true;
                }
            });

            return subtitle;
        }, [children]);

        return (
            <div
                ref={ref}
                id={id}
                className={classNames(
                    'br-tab',
                    {'large': density === 'large'},
                    {'small': density === 'small'},
                    {'inverted' : inverted},
                    className,
                    ...mtProps
                )}
                {...spreadProps}
                
            >
                <nav className={classNames(
                    'tab-nav',
                    (isNavWithSubtitle() && styles.tabsubtitled)
                )}>
                    <ul>
                        {Children.map(children, (element : any, index) => (
                            <li 
                                key={index} 
                                className={classNames(
                                    'tab-item',
                                    (currentTab === (index+1) && 'active')
                                )}
                            >
                                <button onClick={(event) => handleClick(event, index)} type="button" data-panel={`${id}-panel-${index + 1}`}>
                                    {element.props.icon && 
                                        <span className="name">
                                            <span className="d-flex flex-column flex-sm-row">
                                                <span className="icon mb-1 mb-sm-0 mr-sm-1">
                                                    <i className={element.props.icon} aria-hidden="true"></i>
                                                </span>
                                                <span className="name">{element.props.title}</span>
                                            </span>
                                        </span>
                                    }
                                    {!element.props.icon && <span className="name">{element.props.title}</span>}
                                    
                                </button>
                                {element.props.subTitle && <span className="results">{element.props.subTitle}</span>}
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="tab-content">
                    {Children.map(children, (element : any, index : number) => {
                        const {active, ...elementProps} = element.props;

                        return <TabContent key={index} active={currentTab === (index + 1)} {...elementProps} />;
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