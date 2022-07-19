import classNames from "classnames";
import React, { useEffect, useState } from "react";
import IMtProps from "../IMtProps";
import { useSpreadProps } from "../Util/useSpreadProps";
import { useMtProps } from "../Util/useMtProps";
import List from "../List";
import Button from "../Button";
import Input from "../Input";
import Divider from "../Divider";
import Select from "../Select";

interface IHeader {
    field: string,
    label: string
}

interface IData {
    offset?: number,
    recordCount?: number,
    pageSize?: number,
    records: any[]
}

interface TableProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    id: string,
    title?: string,
    showOptions?: boolean;
    showSearch?: boolean;
    onSearch?: () => void;
    showSelectedBar?: boolean;

    headers?: string[] | IHeader[];
    data?: IData | object[];

    endpoint?: string;
} 

const Table = React.forwardRef<HTMLDivElement, TableProps>(
    ({
        className, 
        children, 
        id,
        title,
        showOptions = true,
        showSearch = true,
        onSearch = () => {},
        showSelectedBar = true,
        headers,
        data,
        endpoint,
        ...props
    }, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        const [paginacao, setPaginacao] = useState<string>("10");
        const [pagina, setPagina] = useState<string>("1");
        const [tableData, setTableData] = useState<any[]>([]);

        const [currentEndpoint, setCurrentEndpoint] = useState<string>("");

        const [offset, setOffset] = useState<number>();
        const [pageSize, setPageSize] = useState<number>();
        const [recordCount, setRecordCount] = useState<number>();

        useEffect(() => {
            // Se os dados tiverem sido informados manualmente, informa-os
            if(data && (data as IData).records) {
                setTableData((data as IData).records);

                setOffset((data as IData).offset);
                setPageSize((data as IData).pageSize);
                setRecordCount((data as IData).recordCount);
            } else if(data) {
                const dataLength = (data as any[]).length;
                
                setTableData(data as any[]);
                setRecordCount(dataLength);
                setPageSize(dataLength);
                setOffset(0);
            }

            // Do contrário, seta os obtidos do endpoint
            if(endpoint) {
                setCurrentEndpoint(endpoint);

                fetch(endpoint).then(res => {
                    res.json().then(json => {
                        if(json?.records) {
                            setTableData(json.records);
                        }

                        setOffset(json?.offset);
                        setPageSize(json?.pageSize);
                        setRecordCount(json?.recordCount);
                    });
                })
            }
                        
        }, [data, endpoint])

        return (
            <div
                ref={ref}
                className={classNames(
                    "br-table",
                    className,
                    ...mtProps
                )}
                {...spreadProps}
                
            >
                <div className="table-header">
                    <div className="top-bar">
                    <div className="table-title">{title}</div>
                    <div className="actions-trigger text-nowrap">
                        <Button circle title="Ver mais opções" data-toggle="dropdown" data-target={`ver-mais-opcoes____${id}`} aria-label="Ver mais opções" icon="fas fa-ellipsis-v" />
                        <List className="br-list" id={`ver-mais-opcoes____${id}`} hidden role="">
                            <Button data-density="small">Densidade alta
                            </Button><span className="br-divider"></span>
                            <Button data-density="medium">Densidade média
                            </Button><span className="br-divider"></span>
                            <Button data-density="large">Densidade baixa
                            </Button>
                        </List>
                    </div>
                    <div className="search-trigger">
                        <Button circle data-toggle="search" aria-label="Abrir busca"><i className="fas fa-search" aria-hidden="true"></i>
                        </Button>
                    </div>
                    </div>
                    <div className="search-bar">
                    <div className="br-input">
                        <Input id={`table-searchbox-${id}`} label="Buscar" placeholder="Buscar na tabela" />
                        <Button circle aria-label="Buscar" icon="fas fa-search" />
                    </div>
                    <Button circle data-dismiss="search" aria-label="Fechar busca" icon="fas fa-times" />
                    </div>
                    <div className="selected-bar">
                    <div className="info"><span className="count">0</span><span className="text">item selecionado</span></div>
                    <div className="actions-trigger text-nowrap">
                        <Button circle inverted type="button" data-toggle="dropdown" data-target="target02-72908" aria-label="Ver mais opções" icon="fas fa-ellipsis-v" />
                        <List id="target02-72908" hidden>
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
                    {tableData && !(headers as IHeader[])[0].label &&
                        <tbody>
                            {tableData.map((linha) => (
                                <tr>
                                    {Object.keys(linha).map((key : string) => (
                                      <td key={key}>
                                        {linha[key]}
                                      </td>  
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    }
                    {tableData && (headers as IHeader[])[0].label &&
                        <tbody>
                            {tableData.map((linha) => (
                                <tr>
                                    {(headers as IHeader[]).map((header : IHeader, index : number) => (
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
                        <Select id="per-page-selection-random-88182" options={[
                            {label: "10", value: "10"},
                            {label: "20", value: "20"},
                            {label: "30", value: "30"}
                        ]}
                        onChange={(valor : any) => setPaginacao(valor)}
                        value={paginacao} />
                    </div><span className="br-divider d-none d-sm-block mx-3"></span>
                    <div className="pagination-information d-none d-sm-flex"><span className="current">1</span>&ndash;<span className="per-page">20</span>&nbsp;de&nbsp;<span className="total">50</span>&nbsp;itens</div>
                    <div className="pagination-go-to-page d-none d-sm-flex ml-auto">
                        <Select id="go-to-selection-random-75889" options={[
                            {label: "1", value: "1"},
                            {label: "2", value: "2"},
                            {label: "3", value: "3"}
                        ]}
                        onChange={(valor : string) => setPagina(valor)} value={pagina} />
                    </div><span className="br-divider d-none d-sm-block mx-3"></span>
                    <div className="pagination-arrows ml-auto ml-sm-0">
                        <Button circle aria-label="Voltar página" icon="fas fa-angle-left" />
                        <Button circle aria-label="Avançar página" icon="fas fa-angle-right" />
                    </div>
                    </nav>
                </div>
            </div>
        );
    }
) 

export default Table;