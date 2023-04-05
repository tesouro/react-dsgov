import '@govbr-ds/core/dist/components/pagination/pagination.min.css';

/* eslint-disable no-script-url */
import classNames from 'classnames';
import React, { memo, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
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
import Select from '../Select';
import { SelectOptions } from '../Select/Select';
import Divider from '../Divider';

export interface IEllipsis {
    start: number,
    end: number
}


interface PaginationProps  extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'>, IMtProps {
    pageCount?: number,
    ellipsis?: IEllipsis[],
    links?: string[]
    density?: 'small' | 'normal' | 'large'
    initialPage?: number,
    onChange?: (pageNumber: number) => void,
    onChangePageSize?: (pageSize: number) => void,
    type?: 'normal' | 'contextual',
    perPageOptions?: number[],
    itemCount?: number,
    showPageCombo?: boolean
} 

interface IList {
    type: 'normal' | 'ellipsis',
    pages: number[]
}


const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
    ({className, children, id, pageCount, ellipsis, density, initialPage, onChange, onChangePageSize, type = 'normal', perPageOptions, itemCount, showPageCombo = false, ...props}, ref) => {
        const fid = useUniqueId(id, 'pagination_____');
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);
        
        const [currentPage, setCurrentPage] = useState(initialPage || 1);
        const [currentPagination, setCurrentPagination] = useState(10);

        const currentPageCount = useMemo(() => itemCount ? Math.ceil(itemCount/currentPagination) : pageCount, [itemCount, currentPagination]);

        const getPaginationOptions = useCallback(() : SelectOptions[] => {
            if(perPageOptions) {
                const options = [];
                for(const option of perPageOptions) {
                    options.push({label: String(option), value: String(option)});
                }
                return options;
            } else {
                return [
                    {label: '10', value: '10'},
                    {label: '20', value: '20'},
                    {label: '50', value: '50'},
                    {label: '100', value: '100'}
                ];
            }            
        }, [perPageOptions]);

        

        const refDiv = useRef(null);

        useCommonProperties<HTMLElement>(ref, refDiv);

        const handleClickItem = useCallback((page : number) => {
            setCurrentPage(page);
            onChange?.(page);            
        }, [onChange]);

        const handleClickPrevPage = useCallback(() => {
            setCurrentPage((oldPage) => {
                if(oldPage === 1) {
                    return oldPage;
                } else {
                    onChange?.(oldPage - 1);
                    return oldPage - 1;
                }                
            });
        }, []);

        const handleClickNextPage = useCallback(() => {
            setCurrentPage((oldPage) => {
                if(currentPageCount && oldPage + 1 > currentPageCount) {
                    return oldPage;
                } else {
                    onChange?.(oldPage + 1);
                    return oldPage + 1;
                }                
            });
        }, [currentPageCount, setCurrentPage]);

        const handleChangePageSize = useCallback((value: string) => {
            setCurrentPagination(Number(value));
            onChangePageSize?.(Number(value));
            

            // Verifica se a página atual é maior do que o novo page count
            if(itemCount) {
                const pageCountCalc = Math.ceil(itemCount/Number(value));

                setCurrentPage((oldPage) => {
                    if(oldPage > pageCountCalc) {
                        onChange?.(pageCountCalc);
                        return pageCountCalc;
                    } else {
                        return oldPage;
                    }
                });
            }
        }, [onChange, setCurrentPage, setCurrentPagination, itemCount, currentPagination]);

        const handleChangePage = useCallback((value : string) => {
            setCurrentPage(Number(value));
            onChange?.(Number(value));
        }, [onChange]);


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

            if(pageCount) {
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

        

        const getPageOptions = useCallback(() : SelectOptions[] => {
            const options = [];
            if(itemCount) {
                const pageCountCalc = Math.ceil(itemCount/currentPagination);
                
                for(let i = 0; i < pageCountCalc; i++) {
                    options.push({label: String(i+1), value: String(i+1)});
                }
            }            

            return options;
        }, [itemCount, currentPagination]);

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
                {type === 'normal' &&
                    <ul>
                        <>
                            <li>
                                <Button disabled={currentPage === 1} onClick={handleClickPrevPage} circle icon="fas fa-angle-left" data-previous-page="data-previous-page" aria-label="Página anterior" />
                            </li>
                            {generateList()}
                            <li>
                                <Button disabled={currentPage === pageCount} onClick={handleClickNextPage} circle icon="fas fa-angle-right" data-next-page="data-next-page" aria-label="Página seguinte" />
                            </li>
                        </>
                    </ul>
                }
                {type === 'contextual' &&
                    <>
                        <div className="pagination-per-page">
                            <Select 
                                options={getPaginationOptions()}
                                value={String(currentPagination)}
                                onChange={handleChangePageSize}
                                label="Exibir"
                            />
                        </div>
                        <Divider mx={3} />
                        <div className="pagination-information d-none d-sm-flex">
                            <span className="current">{(currentPage - 1)*currentPagination + 1}</span>–<span className="per-page">{(itemCount && currentPage*currentPagination > itemCount) ? itemCount : currentPage*currentPagination}</span>&nbsp;de&nbsp;<span className="total">{itemCount}</span>&nbsp;itens
                        </div>
                        <div className="pagination-go-to-page d-none d-sm-flex ml-auto">
                            {showPageCombo &&
                                <Select
                                    options={getPageOptions()} 
                                    label="Página"
                                    value={String(currentPage)}
                                    onChange={handleChangePage}
                                />
                            }
                        </div>
                        <Divider mx={3} />
                        <div className="pagination-arrows ml-auto ml-sm-0">
                            <Button disabled={currentPage === 1} onClick={handleClickPrevPage} circle icon="fas fa-angle-left" />
                            <Button disabled={currentPage === currentPageCount} onClick={handleClickNextPage} circle icon="fas fa-angle-right" />
                        </div>
                    </>
                    
                }
                {children}
            </nav>
        );
    }
); 

Pagination.displayName = 'Pagination';

export default memo(Pagination);