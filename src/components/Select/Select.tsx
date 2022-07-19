import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import IMtProps from "../IMtProps";
import { useSpreadProps } from "../Util/useSpreadProps";
import { useMtProps } from "../Util/useMtProps";
import List from "../List/List";
import Item from "../Item/Item";
import Radio from "../Radio/Radio";
import Checkbox from "../Checkbox";
import AnyAttribute from "react-any-attr";

const core = require('@govbr-ds/core/dist/core-init');

interface SelectOptions {
    label: string,
    value: string | number
}

interface SelectProps extends React.HTMLAttributes<HTMLSelectElement>, IMtProps {
    label?: string;
    id: string;
    value?: string | string[] | number | number[];
    options: SelectOptions[];
    onChange?: any;
    type?: "single" | "multiple";
    selectAllText?: string
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ className, children, id, label, options, value, onChange = () => {}, type = "single", selectAllText = "Selecionar todos", ...props }, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);
        const [valor, setValor] = useState<string | string[]>("");

        const [valores, setValores] = useState<Map<string, boolean>>(new Map());

        const refInputWrapper = useRef<any>();
        const refWrapper = useRef<any>();

        const refBrSelect = useRef<any>(null);

        const customAttributes : any = {};

        useEffect(() => {
            if (refBrSelect.current) {
                refBrSelect.current.resetOptionsList();
            } else {
                refBrSelect.current = new core.BRSelect('br-select', refWrapper.current);
            }

            setValores((valores) => {
                const elementos = refWrapper.current.getElementsByTagName("input");
                for (let index = 0; index < elementos.length; index++) {

                    const elemento = elementos[index];

                    if(Array.isArray(value)) {
                        for (let index = 0; index < value.length; index++) {
                            const valor = value[index];
                            if(valor === elemento.value) {
                                valores.set(elemento.id, true);
                                let option = refBrSelect.current.optionsList.findIndex((obj : any) => obj.inputValue === elemento.value);
                                refBrSelect.current.optionsList[option].selected = true;
                            }
                            
                        }
                        
                    }
                    
                    
                }

                console.log(valores);
                return valores;
            })

            


        }, [options, value])

        if(type === "multiple") {
            customAttributes["multiple"] = "multiple";
        }

        return (
            <AnyAttribute attributes={customAttributes}>
                <div
                    ref={refWrapper}
                    {...spreadProps}
                    onChange={onChange(refBrSelect.current?.selectedValue)}
 
                    className={classNames(
                        "br-select",
                        className,
                        ...mtProps
                    )}

                >
                    <div ref={refInputWrapper} className="br-input">
                        {label && <label htmlFor={id}>{label}</label>}
                        <input id={`${id}_____select`} type="text" data-value={valor} />
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
                                        checked={elemento.value === value}
                                        onChange={(evento) => setValor(evento.currentTarget.value)}
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