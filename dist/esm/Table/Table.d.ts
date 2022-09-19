import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
export interface IHeader {
    field: string;
    label: string;
}
export interface IItemPage {
    label: string;
    value: string;
}
export interface IData {
    pageNumber?: number;
    recordCount?: number;
    pageSize?: number;
    records: any[];
}
export interface ISearchEvent extends React.MouseEvent<HTMLButtonElement, MouseEvent> {
    searchText: string;
}
export interface TableProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    id?: string;
    /** Título da tabela */
    title?: string;
    /** Se mostra a topbar da tabela */
    showTopBar?: boolean;
    /** Densidade da tabela.
     *
     * - small: pequena
     * - medium: média
     * - large: alta
     */
    density?: 'small' | 'medium' | 'large';
    /** Se mostra ou não o menu de densidade. */
    showDensityButtons?: boolean;
    /** Se mostra ou não o menu de busca. */
    showSearch?: boolean;
    /** Se mostra ou não a barra de selecionados. */
    showSelectedBar?: boolean;
    /** Se mostra ou não a paginação */
    showPagination?: boolean;
    /** Mostra ou não o seletor de página. */
    showPageSelector?: boolean;
    /** Headers da tabela. */
    headers?: string[] | IHeader[];
    /** Dados da tabela. */
    data?: IData | object[];
    /** Endpoint com os dados da tabela. */
    endpoint?: string;
    /** Ao clicar no botão de ir para a próxima página. */
    onClickNextPage?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /** Ao clicar no botão de ir para a página anterior. */
    onClickPrevPage?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /** Ao realizar busca. */
    onSearch?: (event: ISearchEvent) => void;
    /** Array para preencher a combo de itens por página. */
    arrayItemsPerPage?: number[];
    /** Sobrescreve o marcador da página atual na área de paginação. */
    currentPageNumber?: number;
    /** Sobrescreve o marcador de quantidade de páginas na área de paginação. */
    currentPerPageNumber?: number;
    /** Sobrescreve o marcador de total de registros na área de paginação. */
    currentTotalRegistros?: number;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<TableProps & React.RefAttributes<HTMLDivElement>>>;
export default _default;
