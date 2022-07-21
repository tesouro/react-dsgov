import classNames from "classnames";
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import IMtProps from "../IMtProps";
import { useSpreadProps } from "../Util/useSpreadProps";
import { useMtProps } from "../Util/useMtProps";
import List from "../List/List";
import Item from "../Item/Item";
import Radio from "../Radio/Radio";
import Checkbox from "../Checkbox";
import AnyAttribute from "react-any-attr";
import uniqueId from "lodash.uniqueid";

const core = require('@govbr-ds/core/dist/core-init');

export interface SelectOptions {
    label: string,
    value: string | number
}

interface SelectProps extends React.HTMLAttributes<HTMLSelectElement>, IMtProps {
    /** Label do Select. */
    label?: string;
    /** ID do Select. */
    id?: string;
    /** Valor do select. Pode ser um valor único ou um array, se for select múltiplo. */
    value?: string | string[] | number | number[];
    /** Options do select. */
    options: SelectOptions[];
    /** Função para detectar mudança de valor. O parâmetro não é um evento, e, sim, o valor em si. */
    onChange?: any;
    /** Se é simples ou múltiple.
     * 
     * - single: simples.
     * - multiple: múltiplo.
     */
    type?: "single" | "multiple";
    /** Se existe opção de selecionar todos, se o type="multiple". */
    selectAllText?: string,
    /** Função pra setar o valor de um estado associado ao select. */
    setValue?: Dispatch<SetStateAction<any>>
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ className, children, id = uniqueId("select_____"), label, options, value, setValue = () => {}, onChange = () => {}, placeholder, type = "single", selectAllText = "Selecionar todos", ...props }, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);
        const [valor, setValor] = useState<string | string[]>("");
        const [displayValue, setDisplayValue] = useState("");

        const [valores, setValores] = useState<Map<string, boolean>>(new Map());

        const refInputWrapper = useRef<any>();
        const refWrapper = useRef<any>();

        const refBrSelect = useRef<any>(null);

        const customAttributes : any = {};

        useEffect(() => {
            if(typeof valor === "string") {
                setDisplayValue(valor);
            } else if (typeof valor === "number") {
                setDisplayValue(String(valor));
            }

            // TODO: fazer para os múltiplos
        }, [valor]);
        

        useEffect(() => {
            if (refBrSelect.current) {
                refBrSelect.current.resetOptionsList();
            } else {
                refBrSelect.current = new core.BRSelect('br-select', refWrapper.current);
            }
        }, [options])

        useEffect(() => {
            setValores(oldValores => {
                const elementos = refWrapper.current.getElementsByTagName("input");
                for (const elemento of elementos) {

                    if(Array.isArray(value)) {
                        for (const valorElemento of value as string[]) {
                            if(valorElemento === elemento.value) {
                                oldValores.set(elemento.id, true);
                                let option = refBrSelect.current.optionsList.findIndex((obj : any) => obj.inputValue === elemento.value);
                                refBrSelect.current.optionsList[option].selected = true;
                            }
                            
                        }
                        
                    }
                    
                }

                return oldValores;
            })
        }, [value])

        if(type === "multiple") {
            customAttributes["multiple"] = "multiple";
        }

        return (
            <AnyAttribute attributes={customAttributes}>
                <div
                    ref={refWrapper}
                    {...spreadProps}

                    className={classNames(
                        "br-select",
                        className,
                        ...mtProps
                    )}

                >
                    <div ref={refInputWrapper} className="br-input">
                        {label && <label htmlFor={id}>{label}</label>}
                        <input id={`${id}_____select`} type="text" data-value={value} value={displayValue} placeholder={placeholder} />
                        <button className="br-button" type="button" aria-label="Exibir lista" tabIndex={-1} data-trigger="data-trigger"><i className="fas fa-angle-down" aria-hidden="true"></i></button>
                    </div>
                    <List tabIndex={0} role="">
                        {type === "multiple" && selectAllText &&
                            <Item highlighted tabIndex={-1} divider data-all="data-all" role="">
                                <Checkbox  
                                    id={`${id}____`}
                                    label="Selecionar todos"
                                    
                                />
                            </Item>
                        }
                        {options.map((elemento) => (
                            <Item key={elemento.value} tabIndex={-1} divider role="">
                                {type === "single" &&
                                    <Radio
                                        id={`${id}____${elemento.value}`}
                                        name={id}
                                        value={String(elemento.value)}
                                        label={elemento.label}
                                        checked={String(elemento.value) === String(value)}
                                        data-value={value}
                                        onChange={() => {onChange(elemento.value); console.log('trocou')}}
                                    />}
                                {type === "multiple" &&
                                    <Checkbox
                                        id={`${id}____${elemento.value}`}
                                        name={String(elemento.value)}
                                        label={elemento.label}
                                        defaultChecked={valores.get(`${id}____${elemento.value}`)}
                                        value={String(elemento.value)}
                                        onChange={(evento) => { setValores((lista) => { lista.set(id, evento.currentTarget.checked); return lista; });  onChange(refBrSelect.current?.selectedValue) }}
                                    />
                                }
                            </Item>
                        ))}

                    </List>
                    {children}
                </div>
            </AnyAttribute>
        );
    }
)

export default Select;