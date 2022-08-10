import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
export interface MessageProps extends React.HTMLAttributes<HTMLElement>, IMtProps {
    /**
     * Categoria da mensagem.
     *
     * - message: tipo "Mensagem". Maior e ocupa a linha inteira.
     * - feedback: tipo "Feedback". Menor e inline.
     */
    category: 'feedback' | 'message';
    /** Tipo. Vai definir a cor da mensagem.
     *
     * - danger: vermelho
     * - success: verde
     * - info: azul
     * - warning: amarelo
     */
    type: 'danger' | 'success' | 'info' | 'warning';
    /** Classe FontAwesome do ícone associado à mensagem. */
    icon?: string;
    /** Título da mensagem. */
    messageTitle?: string;
    /** Se tem ou não o botão de fechar, para o category="message". */
    hasCloseButton?: boolean;
}
declare const Message: React.ForwardRefExoticComponent<MessageProps & React.RefAttributes<HTMLElement>>;
export default Message;
