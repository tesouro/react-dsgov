import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement>, IMtProps {
    /** Se o checkbox for inline, ou seja, não pula linha após. */
    inline?: boolean;
    /** Estado do checkbox.  */
    state?: string;
    /** Se está desabilitado. */
    disabled?: boolean;
    /** Se está marcado ou não. Melhor usado para gerenciamento do estado. */
    checked?: boolean;
    /** Se está inicialmente marcado. */
    defaultChecked?: boolean;
    name?: string;
    /** Label do checkbox. */
    label?: string;
    /** Valor associado ao checkbox. */
    value?: string;
    /** Se possui estado indeterminado. */
    indeterminate?: boolean;
    /** Se é pai de um determinado grupo de checkboxes. */
    parentGroup?: string;
    /** Se é filho de um determinado grupo de checkboxes. */
    childOf?: string;
}
export interface CheckboxRef extends HTMLInputElement {
    wrapper: HTMLDivElement;
    element: HTMLInputElement;
}
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<CheckboxRef>>;
export default Checkbox;
