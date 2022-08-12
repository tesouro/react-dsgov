import '@govbr-ds/core/dist/core.min.css';

import classNames from 'classnames';
import React, { memo, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';
import List from '../List';
import Button from '../Button';
import Input from '../Input';
import Divider from '../Divider';
import Select from '../Select';
import { updateQueryStringParameter } from '../Util/Util';
import { SelectOptions } from '../Select/Select';
import uniqueId from 'lodash.uniqueid';
import { InputRef } from '../Input/Input';
import { ButtonRef } from '../Button/Button';
import useCommonProperties from '../Util/useCommonProperties';
import useUniqueId from '../Util/useUniqueId';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const core = require('@govbr-ds/core/dist/core-init');

export interface IHeader {
    field: string,
    label: string
}

export interface IItemPage {
    label: string,
    value: string
}


export interface IData {
    pageNumber?: number,
    recordCount?: number,
    pageSize?: number,
    records: any[]
}

export interface ISearchEvent extends React.MouseEvent<HTMLButtonElement, MouseEvent> {
    searchText: string;
}


export interface TableProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    id?: string,
    /** Título da tabela */
    title?: string,
    /** Se mostra ou não o menu de densidade. */
    showDensityButtons?: boolean;

    /** Se mostra ou não o menu de busca. */
    showSearch?: boolean;
    
    /** Se mostra ou não a barra de selecionados. */
    showSelectedBar?: boolean;

    /** Mostra ou não o seletor de página. */
    showPageSelector?: boolean;

    /** Headers da tabela. */
    headers?: string[] | IHeader[];

    /** Dados da tabela. */
    data?: IData | object[];

    /** Endpoint com os dados da tabela. */
    endpoint?: string;

    /** Ao clicar no botão de ir para a próxima página. */
    onClickNextPage?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void

    /** Ao clicar no botão de ir para a página anterior. */
    onClickPrevPage?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void

    /** Ao realizar busca. */
    onSearch?: (event: ISearchEvent) => void

    /** Array para preencher a combo de itens por página. */
    arrayItemsPerPage?: number[]

    /** Sobrescreve o marcador da página atual na área de paginação. */
    currentPageNumber?: number;

    /** Sobrescreve o marcador de quantidade de páginas na área de paginação. */
    currentPerPageNumber?: number;

    /** Sobrescreve o marcador de total de registros na área de paginação. */
    currentTotalRegistros?: number;

    
}

const Table = React.forwardRef<HTMLDivElement, TableProps>(
    ({
        className,
        children,
        id,
        title,
        showDensityButtons = true,
        showSearch = true,
        onSearch = () => {/* */},
        showSelectedBar = true,
        headers,
        data,
        endpoint,
        onClickNextPage = () => {/* */},
        onClickPrevPage = () => {/* */},
        showPageSelector = false,
        arrayItemsPerPage,
        currentPageNumber,
        currentPerPageNumber,
        currentTotalRegistros,
        ...props
    }, ref) => {
        const fid = useUniqueId(id, 'table_____');
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);


        const [tableData, setTableData] = useState<any[]>([]);
        const [defaultSearch, setDefaultSearch] = useState<string>('');
        const [atualizando, setAtualizando] = useState<boolean>(false);
        const [currentEndpoint, setCurrentEndpoint] = useState<string>('');
        const [pageNumber, setPageNumber] = useState<number>();
        const [pageSize, setPageSize] = useState<number>();
        const [recordCount, setRecordCount] = useState<number>();
        const [pageOptions, setPageOptions] = useState<SelectOptions[]>();
        const pageCount = useRef<number | null>(null);

        const [searchExpanded, setSearchExpanded] = useState<boolean>(false);
        const [alreadyExpanded, setAlreadyExpanded] = useState<boolean>(false);
        
        const [currentDensity, setCurrentDensity] = useState<string>('medium');

        const refDiv = useRef(null);
        const refInput = useRef<InputRef>(null);
        const refSearchExpander = useRef<ButtonRef>(null);
        
        useCommonProperties<InputRef>(ref, refDiv);

        const handleClickNextPage = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            onClickNextPage(event);

            console.log(atualizando);
            if (!atualizando && endpoint) {
                setPageNumber((currentOffset) => {
                    if (typeof currentOffset !== 'undefined') {
                        return currentOffset + 1;
                    } else {
                        return currentOffset;
                    }
                });
            }

        }, [atualizando, endpoint]);

        const handleClickPreviousPage = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            onClickPrevPage(event);

            if (!atualizando && endpoint) {
                setPageNumber((currentOffset) => {
                    if (typeof currentOffset !== 'undefined') {
                        return currentOffset - 1;
                    } else {
                        return currentOffset;
                    }
                });
            }

        }, [atualizando, endpoint]);

        const handleTrocaBuscaPadrao = () => {
            onSearch({ searchText: defaultSearch } as ISearchEvent);

            console.log('Testando!!!!');
            console.log(defaultSearch);

            defaultSearch !== undefined && setCurrentEndpoint((currentEndpoint) => 
                updateQueryStringParameter(currentEndpoint, 'defaultSearch', String(defaultSearch)));
        };


        const handleExpandSearch = useCallback(() => {
            setSearchExpanded(true);
            setAlreadyExpanded(true);
        }, []);

        const handleCloseSearch = useCallback(() => {
            setSearchExpanded(false);
            setDefaultSearch('');
        }, []);

        const handleKeyDownSearch = useCallback((event : React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Enter') {
                handleTrocaBuscaPadrao();
            }
            if(event.key === 'Escape') {
                setDefaultSearch('');
                setSearchExpanded(false);
            }
        }, []);

        const handleClickDensity = useCallback((density : string) => {
            setCurrentDensity(density);
        }, []);

        useEffect(() => {
            if(searchExpanded) {
                refInput.current?.focus();
            } else if(alreadyExpanded) {
                refSearchExpander.current?.focus();
            }
        }, [searchExpanded, alreadyExpanded]);

        useEffect(() => {
            console.log('aaaa!!!!!');

            // Se os dados tiverem sido informados manualmente, informa-os
            if (data && (data as IData).records) {
                setTableData((data as IData).records);

                setPageNumber((data as IData).pageNumber);
                setPageSize((data as IData).pageSize);
                setRecordCount((data as IData).recordCount);
            } else if (data) {
                const dataLength = (data as any[]).length;

                setTableData(data as any[]);
                setRecordCount(dataLength);
                setPageSize(dataLength);
                setPageNumber(0);
            }


        }, [data]);

        useEffect(() => {
            if (endpoint) {
                setCurrentEndpoint(endpoint);
            }
        }, [endpoint]);

        // Ao trocar o endpoint, recarregar os dados
        useEffect(() => {
            if (currentEndpoint) {
                setAtualizando(true);
                fetch(currentEndpoint).then(res => {
                    res.json().then(json => {
                        if (json?.records) {
                            setTableData(json.records);
                        }

                        setPageNumber(json?.pageNumber);
                        setPageSize(json?.pageSize);
                        setRecordCount(json?.recordCount);

                        setAtualizando(false);
                    });
                });
            }

        }, [currentEndpoint]);

        // Ao trocar a página, recarregar os dados
        useEffect(() => {
            pageNumber !== undefined && setCurrentEndpoint((currentEndpoint) =>
                updateQueryStringParameter(currentEndpoint, 'pageNumber', String(pageNumber)));
        }, [pageNumber]);

        // Ao trocar o tamanho da página
        useEffect(() => {
            pageSize !== undefined && setCurrentEndpoint((currentEndpoint) =>
                updateQueryStringParameter(currentEndpoint, 'pageSize', String(pageSize)));
        }, [pageSize]);

        // Ao mudar a quantidade de registros ou o tamanho da página
        useEffect(() => {
            if (recordCount !== undefined && pageSize !== undefined) {
                const currentPageCount = Math.ceil(recordCount / pageSize);
                if (currentPageCount !== pageCount.current) {
                    pageCount.current = currentPageCount;

                    setPageOptions(pageOptions => {
                        if (pageOptions?.length !== pageSize) {
                            const currentPageOptions = [];


                            for (let i = 0; i < currentPageCount; i++) {
                                currentPageOptions.push(
                                    {
                                        label: String(i + 1),
                                        value: String(i + 1)
                                    }
                                );
                            }
                            return currentPageOptions;
                        } else {
                            return pageOptions;
                        }

                    });
                }
            }

        }, [recordCount, pageSize]);

        const getItemsPerPage = useCallback(() => {
            const newItemsPerPage : IItemPage[] = [];
            const array = arrayItemsPerPage || [10, 20, 30, 50, 100];

            for (const index in array) {
                newItemsPerPage.push({
                    label: String(array[index]),
                    value: String(array[index])
                });
            }

            return newItemsPerPage;
        }, [arrayItemsPerPage]);


        return (
            <div
                ref={refDiv}
                id={fid}
                className={classNames(
                    'br-table',
                    className,
                    currentDensity,
                    ...mtProps
                )}
                {...spreadProps}
                data-search="data-search"
                data-selection="data-selection"
                data-collapse="data-collapse"
                data-random="data-random"

            >
                <div className={classNames('table-header', {'show': searchExpanded})}>
                    <div className="top-bar">
                        <div className="table-title">{title}</div>
                        {showDensityButtons && <div className="actions-trigger text-nowrap">
                            <Button 
                                circle 
                                title="Ver mais opções" 
                                data-toggle="dropdown" 
                                data-target={`ver-mais-opcoes____${fid}`} 
                                aria-label="Ver mais opções" 
                                icon="fas fa-ellipsis-v" 
                                dropdownItems={<>
                                    <Button onClick={useCallback(() => handleClickDensity('large'), [])} isItem data-density="small">Densidade alta
                                    </Button><span className="br-divider"></span>
                                    <Button onClick={useCallback(() => handleClickDensity('medium'), [])} isItem data-density="medium">Densidade média
                                    </Button><span className="br-divider"></span>
                                    <Button onClick={useCallback(() => handleClickDensity('small'), [])} isItem data-density="large">Densidade baixa
                                    </Button>
                                </>}
                            />
                        </div>}
                        <div className="search-trigger">
                            {showSearch && <Button ref={refSearchExpander} onClick={handleExpandSearch} circle data-toggle="search" aria-label="Abrir busca"><i className="fas fa-search" aria-hidden="true"></i>
                            </Button>}
                        </div>
                    </div>
                    {showSearch && <div className={classNames('search-bar', {'show': searchExpanded})}>
                        <div className="br-input">
                            <Input
                                id={`table-searchbox-${fid}`}
                                ref={refInput}
                                label="Buscar"
                                placeholder="Buscar na tabela"
                                value={defaultSearch}
                                onKeyDown={handleKeyDownSearch}
                                onChange={(event) => setDefaultSearch(event.currentTarget.value)}
                                button={<Button circle aria-label="Buscar" icon="fas fa-search" onClick={handleTrocaBuscaPadrao} />} />

                        </div>
                        <Button onClick={handleCloseSearch} circle data-dismiss="search" aria-label="Fechar busca" icon="fas fa-times" />
                    </div>}
                    <div className="selected-bar">
                        <div className="info"><span className="count">0</span><span className="text">item selecionado</span></div>
                        <div className="actions-trigger text-nowrap">
                            <Button circle inverted type="button" data-toggle="dropdown" data-target={`target02-${fid}`} aria-label="Ver mais opções" icon="fas fa-ellipsis-v" />
                            <List id={`target02-${fid}`} hidden>
                                <Button data-toggle="">Ação 1</Button>
                                <Divider />
                                <Button>Ação 2</Button>
                            </List>
                        </div>
                    </div>
                </div>
                <table>
                    <caption>{title}</caption>
                    {headers &&
                        <thead>
                            <tr>
                                {headers.map((header, index) => (
                                    <th key={index}>{(header as IHeader).label || (header as string)}</th>
                                ))}
                            </tr>
                        </thead>
                    }
                    {headers && tableData && !(headers as IHeader[])[0].label &&
                        <tbody>
                            {tableData.map((linha, index) => (
                                <tr key={linha}>
                                    {Object.keys(linha).map((key: string) => (
                                        <td key={key}>
                                            {linha[key]}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    }
                    {headers && tableData && (headers as IHeader[])[0].label &&
                        <tbody>
                            {tableData.map((linha, index) => (
                                <tr key={index}>
                                    {(headers as IHeader[]).map((header: IHeader, index: number) => (
                                        <td key={index}>
                                            {linha[header.field]}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    }

                    {children}
                </table>
                <div className="table-footer">
                    <nav className="br-pagination" aria-label="Paginação de resultados" data-total="50" data-current="1" data-per-page="20">
                        <div className="pagination-per-page">
                            <Select label="Itens por página" id={`per-page-selection-random-${fid}`} options={getItemsPerPage()}
                                onChange={useCallback((value: any) => setPageSize(value), [])}
                                value={String(pageSize)}
                            />
                        </div><span className="br-divider d-none d-sm-block mx-3"></span>
                        <div className="pagination-information d-none d-sm-flex"><span className="current">{currentPageNumber || (pageNumber != null && pageSize != null && pageNumber * pageSize + 1)}</span>&ndash;<span className="per-page">{currentPerPageNumber || (pageNumber != null && pageSize != null && pageNumber * pageSize + pageSize)}</span>&nbsp;de&nbsp;<span className="total">{currentTotalRegistros || recordCount}</span>&nbsp;itens</div>
                        <div className="pagination-go-to-page d-none d-sm-flex ml-auto">
                            {showPageSelector &&
                                <Select id={'go-to-selection-random-75889'} options={pageOptions || []}
                                    onChange={(valor: string) => setPageNumber(Number(valor) - 1)} value={pageNumber} />}
                        </div><span className="br-divider d-none d-sm-block mx-3"></span>
                        <div className="pagination-arrows ml-auto ml-sm-0">
                            <Button circle aria-label="Voltar página" icon="fas fa-angle-left" disabled={pageNumber === 0} onClick={handleClickPreviousPage} />
                            <Button circle data-total={pageCount.current} aria-label="Avançar página" icon="fas fa-angle-right" disabled={pageNumber === ((pageCount.current || 0) - 1)} onClick={handleClickNextPage} />
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
);

Table.displayName = 'Table';

export default memo(Table);