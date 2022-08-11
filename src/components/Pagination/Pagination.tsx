import '@govbr-ds/core/dist/core.min.css';

/* eslint-disable no-script-url */
import classNames from 'classnames';
import React, { useCallback, useEffect, useImperativeHandle, useRef } from 'react';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';
import Button from '../Button';
import List from '../List';
import Item from '../Item';
import uniqueId from 'lodash.uniqueid';
import CustomTag from '../CustomTag';
import useCommonProperties from '../Util/useCommonProperties';

export interface IEllipsis {
    start: number,
    end: number
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const core = require('@govbr-ds/core/dist/core-init');


interface PaginationProps  extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'>, IMtProps {
    pageCount: number,
    ellipsis?: IEllipsis[],
    links?: string[]
    density?: 'small' | 'normal' | 'large'
    currentPage?: number,
    onChange?: (pageNumber: number) => void
} 

interface IList {
    type: 'normal' | 'ellipsis',
    pages: number[]
}


const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
    ({className, children, id = uniqueId('pagination_____'), pageCount, ellipsis, density, currentPage, onChange = () => {/**/}, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        const refDiv = useRef(null);
        const refElement = useRef<any>(null);

        useCommonProperties<HTMLElement>(ref, refDiv);

        core.BRPagination.prototype.thisObject = function() {
            return this;
        };

        core.BRPagination.prototype.removeDropdownBehavior = function() {
            for (const dropdown of this.component.querySelectorAll(
                '[data-toggle="dropdown"]'
            )) {
                this._dropdownToggleRemove(dropdown);
            }
        };
        
        core.BRPagination.prototype.closeAllDropdowns = function() {
            for (const dropdown of this.component.querySelectorAll(
                '[data-toggle="dropdown"]'
            )) {
                this._dropdownClose(dropdown);
            }
        };
        
        core.BRPagination.prototype._handleDropdownClick = function() {
            if (this.element.getAttribute('aria-expanded') === 'false') {
                this.thisObject._dropdownOpen(this.element);
                return;
            }
            this._dropdownClose(this.element);
        };
                
        
        core.BRPagination.prototype._dropdownToggle = function(element : HTMLElement) {
            element.addEventListener('click', this._handleDropdownClick.bind({element: element, thisObject: this}));
            window.document.addEventListener('click', (event) => {
                if (!this.component.contains(event.target)) {
                    this._dropdownClose(element);
                }
            });
        };

        core.BRPagination.prototype._dropdownToggleRemove = function(element : HTMLElement) {
            element.removeEventListener('click', this._handleDropdownClick);
        };

        useEffect(() => {
            if(refElement.current) {
                refElement.current.removeDropdownBehavior();
            }   
            refElement.current = new core.BRPagination('br-pagination', refDiv.current);
            
        }, [pageCount, ellipsis, id]);
        
        const handleClickItem = (page : number) => {
            refElement.current.closeAllDropdowns();
            onChange(page);
        };

        const generateList = useCallback(() => {
            const isInsideEllipsis = (pageNumber : number) : boolean => {
                if(ellipsis) {
                    for(const element of ellipsis) {
                        if(pageNumber >= element.start && pageNumber <= element.end) {
                            return true;
                        }
                    }
                }
    
                return false;
                
            };

            const pageList : IList[] = [];
            let currentPageList : IList = {type: 'normal', pages: []};

            for (let index = 0; index < pageCount; index++) {
                if(currentPageList.type === 'normal' && isInsideEllipsis(index+1)) {
                    pageList.push(currentPageList);
                    currentPageList = {type: 'ellipsis', pages: []};
                } else if(!isInsideEllipsis(index+1)) {
                    pageList.push(currentPageList);
                    currentPageList = {type: 'normal', pages: []};
                }

                currentPageList.pages.push(index+1);
            }

            pageList.push(currentPageList);

            return (
                <>
                    {pageList.map((page, index) => (
                        <CustomTag key={index}>
                            {page.type === 'normal' &&
                                <>
                                    {page.pages.map((item, index) => (
                                        <li key={item}><a className={classNames(
                                            'page',
                                            (currentPage === item && 'active')
                                        )} href="javascript:void(0)" onClick={() => onChange(item)}>{item}</a></li>
                                    ))}
                                </>
                            }
                            {page.type === 'ellipsis' &&
                                <>
                                    {page.pages.length > 0 &&
                                        <>
                                            <li className="pagination-ellipsis">
                                                <Button circle data-toggle="dropdown" aria-label="Abrir listagem" icon="fas fa-ellipsis-h" />
                                                <List>
                                                    {page.pages.map((item, index) => (
                                                        <Item onClick={() => handleClickItem(item)} key={item} link="javascript:void(0)">
                                                            {item}
                                                        </Item>
                                                    ))}
                                                </List>
                                            </li>
                                            
                                        </>
                                    }
                                </>
                            }
                        </CustomTag>
                    ))}
                </>
            );
        }, [currentPage, ellipsis, onChange, pageCount]);

        return (
            <nav
                ref={refDiv}
                id={id}
                className={classNames(
                    'br-pagination',
                    (density === 'small' && 'small'),
                    (density === 'large' && 'large'),
                    className,
                    ...mtProps
                )}
                {...spreadProps}
                
            >
                <ul>
                    <>
                        <li>
                            <Button circle icon="fas fa-angle-left" data-previous-page="data-previous-page" aria-label="Página anterior" />
                        </li>
                        {generateList()}
                        <li>
                            <Button circle icon="fas fa-angle-right" data-next-page="data-next-page" aria-label="Página seguinte" />
                        </li>
                    </>
                </ul>
                {children}
            </nav>
        );
    }
); 

Pagination.displayName = 'Pagination';

export default Pagination;