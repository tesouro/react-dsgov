import '@govbr-ds/core/dist/core.min.css';

/* eslint-disable no-script-url */
import classNames from 'classnames';
import React, { useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';
import Button from '../Button';
import List from '../List';
import Item from '../Item';
import uniqueId from 'lodash.uniqueid';
import CustomTag from '../CustomTag';
import useCommonProperties from '../Util/useCommonProperties';
import useUniqueId from '../Util/useUniqueId';

export interface IEllipsis {
    start: number,
    end: number
}


interface PaginationProps  extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'>, IMtProps {
    pageCount: number,
    ellipsis?: IEllipsis[],
    links?: string[]
    density?: 'small' | 'normal' | 'large'
    initialPage?: number,
    onChange?: (pageNumber: number) => void
} 

interface IList {
    type: 'normal' | 'ellipsis',
    pages: number[]
}


const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
    ({className, children, id, pageCount, ellipsis, density, initialPage, onChange, ...props}, ref) => {
        const fid = useUniqueId(id, 'pagination_____');
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);
        
        const [currentPage, setCurrentPage] = useState(initialPage || 1);

        const refDiv = useRef(null);

        useCommonProperties<HTMLElement>(ref, refDiv);

        const handleClickItem = (page : number) => {
            setCurrentPage(page);
            onChange?.(page);            
        };

        const handleClickNextPage = () => {
            setCurrentPage((oldPage) => {
                if(oldPage + 1 > pageCount ) {
                    onChange?.(oldPage);
                    return oldPage;
                } else {
                    onChange?.(oldPage + 1);
                    return oldPage + 1;
                }                
            });
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
                        <div key={index}>
                            {page.type === 'normal' &&
                                <>
                                    {page.pages.map((item, index) => (
                                        <li key={item}><a className={classNames(
                                            'page',
                                            (currentPage === item && 'active')
                                        )} href="javascript:void(0)" onClick={() => handleClickItem(item)}>{item}</a></li>
                                    ))}
                                </>
                            }
                            {page.type === 'ellipsis' &&
                                <>
                                    {page.pages.length > 0 &&
                                        <>
                                            <li className="pagination-ellipsis">
                                                <Button 
                                                    circle 
                                                    data-toggle="dropdown" 
                                                    aria-label="Abrir listagem" 
                                                    icon="fas fa-ellipsis-h" 
                                                    dropdownItems={
                                                        <>
                                                            {page.pages.map((item, index) => (
                                                                <Item 
                                                                    className={classNames(
                                                                        {'active' : currentPage === item}
                                                                    )}
                                                                    onClick={() => {handleClickItem(item); }} 
                                                                    key={item} 
                                                                    link="javascript:void(0)"
                                                                >
                                                                    {item}
                                                                </Item>
                                                            ))}
                                                        </>
                                                    }   
                                                />
                                            </li>
                                            
                                        </>
                                    }
                                </>
                            }
                        </div>
                    ))}
                </>
            );
        }, [currentPage, ellipsis, pageCount]);

        return (
            <nav
                ref={refDiv}
                id={fid}
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
                            <Button onClick={handleClickNextPage} circle icon="fas fa-angle-right" data-next-page="data-next-page" aria-label="Página seguinte" />
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