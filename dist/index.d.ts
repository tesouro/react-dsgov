import React from 'react';

interface IMtProps {
    mt?: string;
    'mt-sm'?: string;
    mx?: number;
    my?: number;
    mb?: number;
    mr?: number;
    'align-items-center'?: boolean;
    'justify-content'?: string;
    p?: number;
    'p-sm'?: number;
    m?: number;
    px?: number;
    py?: number;
}

interface AvatarProps extends React.HTMLAttributes<HTMLElement>, IMtProps {
    /** Título do avatar. */
    title?: string;
    /** Imagem do avatar. */
    imageSrc?: string;
    /** Classe contendo ícone fontawesome do avatar. */
    icon?: string;
    /** Avatar em formato de letra. */
    letter?: string;
    /** Campo "alt" do avatar, caso seja uma imagem. */
    alt?: string;
    /** Densidade.
     *
     * - small: pequena
     * - medium: média
     * - large: grande
     */
    density?: 'small' | 'medium' | 'large';
    /** Se o avatar é dropdown */
    dropdown?: boolean;
    /** Cor dsgov, se for do uma letra. */
    bgColor?: string;
}
interface AvatarRef extends HTMLElement {
    focus: () => void;
    expand: () => void;
    close: () => void;
    element: HTMLElement;
}
declare const _default$d: React.MemoExoticComponent<React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<AvatarRef>>>;

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, IMtProps {
    /** Se o botão é do tipo "Primário". */
    primary?: boolean;
    /** Se o botão é do tipo "Secundário".  */
    secondary?: boolean;
    /** Se o botão é circular. */
    circle?: boolean;
    /** Se o botão tem cor invertida. */
    inverted?: boolean;
    /** Se o botão ocupa uma linha inteira. */
    block?: boolean;
    /** Se o botão é grande. */
    large?: boolean;
    /** Se o botão é pequeno. */
    small?: boolean;
    /** Se o botão tem a propriedade "loading". */
    loading?: boolean;
    /** Se o botão está desabilitado. */
    disabled?: boolean;
    /** Classe de ícone FontAwesome para o botão. */
    icon?: string;
    /** Tipo do botão. */
    type?: 'button' | 'submit' | 'reset';
    /** Se o botão é do tipo Sign-In, especificamente para o botão de logar */
    signIn?: boolean;
    /** Se é um botão do tipo "br-item" */
    isItem?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /** Itens de dropdown, caso seja um botão com dropdown */
    dropdownItems?: React.ReactElement;
}
interface ButtonRef extends HTMLButtonElement {
    expand: () => void;
    close: () => void;
    element: HTMLButtonElement;
}
declare const _default$c: React.MemoExoticComponent<React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<ButtonRef>>>;

interface BreadcrumbItemProps extends React.HTMLAttributes<HTMLLIElement> {
    href?: string;
    home?: boolean;
    target?: string;
    disabled?: boolean;
}

interface BreadcrumbProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const _default$b: React.NamedExoticComponent<BreadcrumbProps & React.RefAttributes<HTMLDivElement>> & {
    readonly type: React.ForwardRefExoticComponent<BreadcrumbProps & React.RefAttributes<HTMLDivElement>>;
} & {
    Item: React.MemoExoticComponent<React.ForwardRefExoticComponent<BreadcrumbItemProps & React.RefAttributes<HTMLLIElement>>>;
};

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    cardTitle?: string;
    cardSubtitle?: string;
    cardImageUrl?: string;
    cardImageAlt?: string;
    cardButton?: React.ReactElement;
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Se o card mostra muda de comportamento ao passar o mouse em cima. */
    hover?: boolean;
    /** Se ele é fixo horizontalmente. */
    hFixed?: boolean;
    /** Se ele está desabilitado. */
    disabled?: boolean;
}
declare const _default$a: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>> & {
    Header: React.ForwardRefExoticComponent<CardHeaderProps & React.RefAttributes<HTMLDivElement>>;
    Content: React.ForwardRefExoticComponent<CardContentProps & React.RefAttributes<HTMLDivElement>>;
    Footer: React.ForwardRefExoticComponent<CardFooterProps & React.RefAttributes<HTMLDivElement>>;
};

interface CarouselPageProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Cor de background. */
    backgroundColor?: string;
    /** Título a ser mostrado no centro. */
    pageTitle?: string;
    /** Nome do passo. */
    stepName?: string;
    /** Se é ativo ou não. */
    active?: boolean;
}

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Se o carousel é circular, ou seja, ao pressionar o botão de "próximo" no último, ele volta pro primeiro.
     *  Se pressionar o botão de "anterior" no primeiro, ele vai pro último.
     */
    circular?: boolean;
    /**
     * Se os botões de navegação e os botões dos passos aparecem dentro do carousel.
     */
    interno?: boolean;
    /**
     * Elementos internos híbridos.
     *
     * - Se for "vertical", então os botões de navegação ficam dentro do carousel.
     * - Se for "horizontal", então os botões de passos ficam dentro do carousel.
     */
    hybrid?: 'vertical' | 'horizontal';
    /** Se os botões de passos são substituídos por um texto do estilo <Passo Atual>/<Total de Passos>. */
    textual?: boolean;
}
declare const _default$9: React.ForwardRefExoticComponent<CarouselProps & React.RefAttributes<HTMLDivElement>> & {
    Page: React.ForwardRefExoticComponent<CarouselPageProps & React.RefAttributes<HTMLDivElement>>;
};

interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement>, IMtProps {
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
interface CheckboxRef extends HTMLInputElement {
    wrapper: HTMLDivElement;
    element: HTMLInputElement;
}
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<CheckboxRef>>;

interface ColProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Tamanho da coluna. */
    size?: number | string;
    /** Tamanho da coluna em dispositivos pequenos. */
    sm?: number | boolean;
    /** Tamanho da coluna em dispositivos médios. */
    md?: number | boolean;
    /** Tamanho da coluna em dispositivos grandes */
    lg?: number | boolean;
    /** Tamanho da coluna em dispositivos extra-largos */
    xl?: number | boolean;
    /** Tamanho automático */
    auto?: number | boolean;
}
declare const Col: React.ForwardRefExoticComponent<ColProps & React.RefAttributes<HTMLDivElement>>;

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
    xl?: boolean;
    fluid?: boolean;
}
declare const Container: React.ForwardRefExoticComponent<ContainerProps & React.RefAttributes<HTMLDivElement>>;

interface ICookieList {
    cookieId?: string;
    cookieOptOut?: boolean;
    cookieSelected?: boolean;
    alertMessage?: string;
    cookieName?: string;
    expires?: string;
    domain?: string;
    entreprise?: string;
    purpose?: string;
    description?: string;
}
interface ICookieGroup {
    groupId?: string;
    groupName?: string;
    groupOptOut?: boolean;
    groupSelected?: boolean;
    groupAlertMessage?: string;
    groupText?: string;
    cookieList?: ICookieList[];
}
interface INoteList {
    question?: string;
    answer?: string;
}
interface ILink$1 {
    name?: string;
    url?: string;
}
interface IConfig {
    lang?: string;
    allOptOut?: boolean;
    acceptButton?: string;
    optInButton?: string;
    optOutButton?: string;
    infoText?: string;
    mainTitle?: string;
    lastUpdate?: string;
    entryText?: string;
    selectAll?: boolean;
    allAlertMessage?: string;
    closeLabel?: string;
    lastUpdateLabel?: string;
    cookieGroupsLabel?: string;
    selectAllLabel?: string;
    unselectAllLabel?: string;
    selectAllGroupLabel?: string;
    unselectAllGroupLabel?: string;
    onLabel?: string;
    offLabel?: string;
    alwaysActiveLabel?: string;
    cookieNameLabel?: string;
    expiresLabel?: string;
    domainLabel?: string;
    enterpriseLabel?: string;
    purposeLabel?: string;
    descriptionLabel?: string;
    cookieGroups?: ICookieGroup[];
    noteTitle?: string;
    noteList?: INoteList[];
    links?: ILink$1[];
}
interface CookieBarProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    json?: IConfig[];
    callback?: () => void;
}
interface CookieBarRef extends HTMLDivElement {
    element: HTMLDivElement;
}
declare const CookieBar: React.ForwardRefExoticComponent<CookieBarProps & React.RefAttributes<CookieBarRef>>;

interface DateTimePickerProps extends React.HTMLAttributes<HTMLInputElement>, IMtProps {
    /** Modo do Datetime.
     *
     * - single: uma data apenas a escolher.
     * - range: um intervalo de datas a escolher.
     */
    dataMode?: 'single' | 'range';
    /** Tipo do Datetime.
     *
     * - text: seleciona data.
     * - time: seleciona apenas hora.
     * - datetime-local: seleciona data e hora.
     */
    dataType?: 'text' | 'time' | 'datetime-local';
    /** Label do DatetimePicker. */
    label?: string | React.ReactElement;
    /** Classe font awesome do ícone do botão. */
    buttonIcon?: string;
    /** Data mínima selecionável. */
    minDate?: string;
    /** Data máxima selecionável. */
    maxDate?: string;
}
interface DateTimePickerRef extends HTMLInputElement {
    element: HTMLInputElement;
    wrapper: HTMLElement;
    inputWrapper: HTMLElement;
    label: HTMLElement;
    button: HTMLButtonElement;
}
declare const DateTimePicker: React.ForwardRefExoticComponent<DateTimePickerProps & React.RefAttributes<DateTimePickerRef>>;

interface DividerProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Orientação.
     *
     * - vertical
     * - horizontal
     */
    orientation?: 'vertical' | 'horizontal';
    /** Se é tracejado ou não. */
    dashed?: boolean;
    /** Tamanho.
     *
     * - sm: 2x o tamanho original
     * - md: 3x o tamanho original
     * - lg: 4x o tamanho original
     */
    size?: string;
}
declare const Divider: React.ForwardRefExoticComponent<DividerProps & React.RefAttributes<HTMLDivElement>>;

interface ICategory {
    category: string;
    size?: number;
    items: IItem[];
}
interface IItem {
    label: string;
    link: string;
}
interface ISocialNetwork$1 {
    icon: string;
    link: string;
    name: string;
}
interface IFooterImage {
    url: string;
    link: string;
    name: string;
}
interface FooterProps extends React.HTMLAttributes<HTMLElement>, IMtProps {
    /** URL da Logo */
    urlLogo: string;
    /** Links do footer */
    links?: ICategory[];
    /** Redes sociais do footer. */
    socialNetworks?: ISocialNetwork$1[];
    /** Texto ao fim do footer, sobre a licença ou termos de uso. */
    userLicenseText?: string | React.ReactElement;
    /** Imagens no fim do footer. */
    footerImages?: IFooterImage[];
    /** Tema invertido */
    inverted?: boolean;
}
declare const Footer: React.ForwardRefExoticComponent<FooterProps & React.RefAttributes<HTMLElement>>;

interface GroupProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
}
declare const Group: React.ForwardRefExoticComponent<GroupProps & React.RefAttributes<HTMLDivElement>>;

interface ILink {
    label: string;
    href: string;
}
interface IFeature {
    label: string;
    icon: string;
    href?: string;
    onClick?: () => void;
}
interface HeaderProps extends React.HTMLAttributes<HTMLElement>, IMtProps {
    /** URL da imagem para o logo no header. */
    urlLogo: string;
    /** Nome do sistema. Aparece ao lado do logo. */
    systemName: string;
    /** Título da página. */
    title: string;
    /** Subtítulo da página. */
    subTitle: string;
    /** Se é o header compacto ou não. */
    compact?: boolean;
    /** Densidade do header.
     *
     * - small: pequena
     * - medium: normal
     * - large: grande.
     */
    density?: 'small' | 'medium' | 'large';
    /** Links de acesso rápido. */
    quickAccessLinks?: ILink[];
    /** Links de features. */
    features?: IFeature[];
    /** Se mostra ou não a barra de busca. */
    showSearchBar?: boolean;
    /** Evento disparado quando realiza uma busca pela barra de busca. */
    onSearch?: (terms: string) => void;
    /** Se mostra ou não o botão de login. */
    showLoginButton?: boolean;
    /** Se está logado ou não. */
    loggedIn?: boolean;
    /** Evento disparado ao clicar no botão de log-in. */
    onClickLogin?: () => void;
    /** Avatar que é mostrado ao se logar. */
    avatar?: React.ReactElement;
}
declare const Header: React.ForwardRefExoticComponent<HeaderProps & React.RefAttributes<HTMLElement>>;

interface InputProps extends React.HTMLAttributes<HTMLInputElement>, IMtProps {
    /** Label do input. */
    label?: string | React.ReactElement;
    /** Placeholder do input. */
    placeholder?: string;
    /** Tipo do input. Por padrão, é type="text". */
    type?: string;
    /** Tamanho do input.
     *
     * - small: pequeno
     * - normal: normal
     * - large: largo.
     */
    density?: 'small' | 'normal' | 'large';
    /** Classe font awesome do ícone do input. */
    icon?: string;
    /** Botão no canto direito do input. */
    button?: React.ReactElement;
    /** Se é do tipo "highlight" */
    highlight?: boolean;
    /** Se a label fica na lateral. */
    inline?: boolean;
    /** Valor do input. */
    value?: string;
    /** Status do input muda a sua cor.
     *
     * - success: verde
     * - danger: vermelho
     * - info: azul
     * - warning: amarelo
     */
    status?: 'success' | 'danger' | 'info' | 'warning';
    /** Texto de feedback que aparece embaixo do item, com a cor de fundo de acordo com o status escolhido. */
    feedbackText?: string;
}
interface InputRef extends HTMLInputElement {
    element: HTMLInputElement | null;
    inputWrapper?: HTMLDivElement | null;
    label: HTMLLabelElement | null;
    labelGroup: HTMLDivElement | null;
    icon: HTMLElement | null;
    iconGroup: HTMLDivElement | null;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<InputRef>>;

interface ItemProps extends React.HTMLAttributes<HTMLElement>, IMtProps {
    /** Se o item tem um highlight ao passar o mouse em cima. */
    highlighted?: boolean;
    /** Se o item tem um divider */
    divider?: boolean;
    /** Se o item está desabilitado. */
    disabled?: boolean;
    /** Se adiciona um Divider após o item. */
    showDividerAfter?: boolean;
    /** Target do item, referenciando o ID de uma lista, caso este item sirva para abrir/fechar a lista. */
    target?: string;
    /** Se abre/fecha. */
    collapsable?: boolean;
    /** Link do item */
    link?: string;
    /** Sub-lista de itens associados a este item. */
    subItems?: React.ReactElement;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
interface ItemRef extends HTMLDivElement {
    element: HTMLElement;
}
declare const _default$8: React.MemoExoticComponent<React.ForwardRefExoticComponent<ItemProps & React.RefAttributes<ItemRef>>>;

interface ListProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Título da lista, opcional. */
    title?: string;
    /** Se a lista é horizontal. */
    horizontal?: boolean;
    /** Se a lista está escondida inicialmente. */
    hidden?: boolean;
    /** Expandida ou não */
    expanded?: boolean;
}
interface ListRef extends HTMLDivElement {
    element: HTMLDivElement;
}
declare const _default$7: React.MemoExoticComponent<React.ForwardRefExoticComponent<ListProps & React.RefAttributes<ListRef>>>;

interface LoadingProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Número indicando o progresso do loading. Opcional. */
    progress?: number;
    /** Tamahnho do Loading.
     *
     * - medium
     * - small
     */
    size?: 'medium' | 'small';
}
declare const Loading: React.ForwardRefExoticComponent<LoadingProps & React.RefAttributes<HTMLDivElement>>;

interface IMenuItem {
    label?: string;
    link?: string;
    submenu?: IMenuItem[];
    icon?: string;
    divider?: boolean;
    expanded?: boolean;
}

interface IMenuLink {
    link: string;
    label: string;
}

interface ISocialNetwork {
    icon: string;
    link: string;
    name: string;
}

interface IMenuLogo {
    src: string;
    alt: string;
}

interface MenuProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    systemLogoUrl?: string;
    systemName?: string;
    data: IMenuItem[];
    logos?: IMenuLogo[];
    externalLinks?: IMenuLink[];
    socialNetworks?: ISocialNetwork[];
    info?: React.ReactNode;
    type?: 'normal' | 'push' | 'contextual';
    active?: boolean;
    shadow?: boolean;
    density?: 'small' | 'normal' | 'large';
}
interface MenuRef extends HTMLDivElement {
    element: HTMLDivElement;
}
declare const Menu: React.ForwardRefExoticComponent<MenuProps & React.RefAttributes<MenuRef>>;

interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
}

interface ModalBodyProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Se a modal está carregando. */
    loading?: boolean;
}

interface ModalProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Título da Modal */
    title?: string;
    /** Se mostra ou não o botão de fechar */
    showCloseButton?: boolean;
}
declare const _default$6: React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<HTMLDivElement>> & {
    Body: React.ForwardRefExoticComponent<ModalBodyProps & React.RefAttributes<HTMLDivElement>>;
    Footer: React.ForwardRefExoticComponent<ModalFooterProps & React.RefAttributes<HTMLDivElement>>;
};

interface MagicButtonProps extends React.HTMLAttributes<HTMLButtonElement>, IMtProps {
    /** Densidade do magic button.
     *
     * - large: alta
     * - medium: média
     * - small: pequena
     */
    density?: 'large' | 'small' | 'medium';
    /** Se o botão é circular. */
    circle?: boolean;
    /** Classe de ícone FontAwesome para o botão. */
    icon?: string;
}
interface MagicButtonRef extends HTMLButtonElement {
    element: HTMLButtonElement;
}
declare const MagicButton: React.ForwardRefExoticComponent<MagicButtonProps & React.RefAttributes<MagicButtonRef>>;

interface MessageProps extends React.HTMLAttributes<HTMLElement>, IMtProps {
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

interface NotificationProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Nome no cabeçalho da notificação */
    name?: string;
    /** E-mail no cabeçalho da notificação */
    email?: string;
    /** Se está escondido ou não */
    hidden?: boolean;
}
declare const Notification: React.ForwardRefExoticComponent<NotificationProps & React.RefAttributes<HTMLDivElement>>;

interface IEllipsis {
    start: number;
    end: number;
}
interface PaginationProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'>, IMtProps {
    pageCount: number;
    ellipsis?: IEllipsis[];
    links?: string[];
    density?: 'small' | 'normal' | 'large';
    initialPage?: number;
    onChange?: (pageNumber: number) => void;
}
declare const _default$5: React.MemoExoticComponent<React.ForwardRefExoticComponent<PaginationProps & React.RefAttributes<HTMLElement>>>;

interface RadioProps extends React.HTMLAttributes<HTMLInputElement>, IMtProps {
    /** Label do radio. */
    label?: string | React.ReactElement;
    /** Valor do radio. */
    value?: string;
    /**
     * Grupo do radio.
     */
    name: string;
    /**
     * Se está checado ou não. Obs.: para valor inicial, usar defaultChecked.
     */
    checked?: boolean;
    /** Estado.
     *
     * - invalid: fica vermelho.
     * - valid: fica verde.
     */
    state?: 'invalid' | 'valid';
    /** Se está desabilitado. */
    disabled?: boolean;
    /** Se for inline, para fazer listagem horizontal. */
    inline?: boolean;
}
declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>;

interface RowProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
}
declare const Row: React.ForwardRefExoticComponent<RowProps & React.RefAttributes<HTMLDivElement>>;

interface SelectOptions {
    label: string;
    value: string | number;
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
    type?: 'single' | 'multiple';
    /** Se existe opção de selecionar todos, se o type="multiple". */
    selectAllText?: string;
}
declare const _default$4: React.MemoExoticComponent<React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>>;

interface ISkipLink {
    link: string;
    label: string;
}

interface SkipLinkProps extends React.HTMLAttributes<HTMLElement>, IMtProps {
    /** Lista de elementos do skiplink. */
    data: ISkipLink[];
    /** Se é do tipo composto. */
    full?: boolean;
}
declare const SkipLink: React.ForwardRefExoticComponent<SkipLinkProps & React.RefAttributes<HTMLElement>>;

interface SwitchProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Label do Switch. */
    label: string;
    /** Densidade do switch.
     *
     * - small: pequena
     * - medium: média
     * - large: grande
     */
    density?: 'small' | 'medium' | 'large';
    /** Texto para o switch com valor true. */
    enabledText?: string;
    /** Texto para o switch com valor false. */
    disabledText?: string;
    /** Mostra ícone dentro do switch */
    showIcon?: boolean;
    /** Posição da label.
     *
     * - left: à esquerda do switch.
     * - top: acima do switch.
     * - right: à direita do switch.
     */
    labelPosition?: 'left' | 'top' | 'right';
}
declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLDivElement>>;

interface IStep {
    label?: string;
    status?: 'warning' | 'success' | 'info' | 'danger';
    icon?: string;
}
interface StepProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>, IMtProps {
    /** Orientação.
     *
     * - horizontal: os steps são organizados na horizontal.
     * - vertical: os steps são organizados na vertical.
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * Lista de steps a serem renderizados.
     */
    steps: IStep[] | string[];
    /**
     * Step inicial.
     */
    initialStep?: number;
    /**
     * Posição da label.
     */
    labelPosition?: 'top' | 'bottom' | 'left' | 'right';
    /**
     * Tipo do step.
     *
     * - void: só um ponto, sem texto. Pode ser com ícone.
     * - simple: apenas pontinhos juntos.
     * - text: formato de texto (1/5, 2/5, ...)
     */
    type?: 'void' | 'simple' | 'text';
    /** Determina se haverá um rolagem horizontal caso a quantidade de botões em tela ultrapasse a área visivel. */
    scroll?: boolean;
    onChange?: (value: number) => void;
    value?: number;
}
declare const _default$3: React.MemoExoticComponent<React.ForwardRefExoticComponent<StepProps & React.RefAttributes<HTMLDivElement>>>;

interface IHeader {
    field: string;
    label: string;
}
interface IData {
    pageNumber?: number;
    recordCount?: number;
    pageSize?: number;
    records: any[];
}
interface ISearchEvent extends React.MouseEvent<HTMLButtonElement, MouseEvent> {
    searchText: string;
}
interface TableProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    id?: string;
    /** Título da tabela */
    title?: string;
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
declare const _default$2: React.MemoExoticComponent<React.ForwardRefExoticComponent<TableProps & React.RefAttributes<HTMLDivElement>>>;

interface TabContentProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    title?: string;
    subTitle?: string;
    active?: boolean;
    icon?: string;
    onlyIcon?: boolean;
}

interface TabProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** */
    initial?: number;
    inverted?: boolean;
    density?: 'small' | 'medium' | 'large';
}
declare const _default$1: React.ForwardRefExoticComponent<TabProps & React.RefAttributes<HTMLDivElement>> & {
    Content: React.ForwardRefExoticComponent<TabContentProps & React.RefAttributes<HTMLDivElement>>;
};

interface TagProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /**  */
    type: 'text' | 'checkbox' | 'radio' | 'status' | 'count' | 'icon';
    label?: string;
    icon?: string;
    density?: 'small' | 'normal' | 'large';
    status?: 'danger' | 'success' | 'warning' | 'info';
    defaultChecked?: boolean;
    checked?: boolean;
    name?: string;
    value?: string;
}
declare const Tag: React.ForwardRefExoticComponent<TagProps & React.RefAttributes<HTMLDivElement>>;

interface TextareaProps extends React.HTMLAttributes<HTMLTextAreaElement>, IMtProps {
    /** Label do textarea. */
    label: string | React.ReactElement;
    /** Placeholder do textarea. */
    placeholder?: string;
    /** Densidade do textarea.
     *
     * - small: pequena
     * - normal: normal
     * - large: grande
     */
    density?: 'small' | 'normal' | 'large';
    /** Se a label é mostrada à esquerda do campo. */
    inline?: boolean;
    /** Valor do textarea. */
    value?: string;
    /** Quantidade máxima de caracteres possível. */
    maxLength?: number;
    /** Se mostra ou não contador de caracteres. */
    showCharacterCounter?: boolean;
    /** Status. Define a cor do textarea e do texto de feedback.
     *
     * - success: verde
     * - danger: vermelho
     * - info: azul
     * - warning: amarelo
     */
    status?: 'success' | 'danger' | 'info' | 'warning';
    /** Texto de feedback que aparece embaixo do textarea. */
    feedbackText?: string | React.ReactElement;
    /** Se é invertido, para fundos escuros. */
    inverted?: boolean;
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;

interface UploadProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Label do upload */
    label: string;
    /** Se permite enviar múltiplos arquivos. */
    multiple?: boolean;
    /** Função pra tratar o upload do arquivo. */
    uploadTimeout: () => Promise<any>;
    /** Se está desabilitado */
    disabled?: boolean;
}
declare const Upload: React.ForwardRefExoticComponent<UploadProps & React.RefAttributes<HTMLDivElement>>;

interface WizardPanelProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Título do painel */
    title: string;
    /** Se mostra ou não o header do título */
    showHeader?: boolean;
}

interface WizardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>, IMtProps {
    /** Altura do Wizard. É necessário que o Wizard do DSGov tenha uma altura fixa. */
    height?: string;
    /** Se é do tipo vertical. Do contrário, é horizontal. */
    vertical?: boolean;
    /** Se mostra ou não o botão de cancelar */
    showCancelButton?: boolean;
    /** Texto do botão de cancelar */
    cancelButtonText?: string;
    /** Texto do botão para voltar ao passo anterior */
    prevButtonText?: string;
    /** Texto do botão de ir ao próximo passo. */
    nextButtonText?: string;
    /** Texto do botão de concluir. */
    concludeButtonText?: string;
    /** Número da aba inicial */
    initialStep?: number;
    /** Evento a ser disparado ao clicar no botão "Concluir" */
    onConclude?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /** Evento a ser disparado ao clicar no botão "Cancelar" */
    onCancel?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /** Evento a ser disparado ao se trocar de step */
    onChange?: (currentStep: number) => void;
}
declare const _default: React.ForwardRefExoticComponent<WizardProps & React.RefAttributes<HTMLDivElement>> & {
    Panel: React.ForwardRefExoticComponent<WizardPanelProps & React.RefAttributes<HTMLDivElement>>;
};

export { _default$d as Avatar, _default$b as Breadcrumb, _default$c as Button, _default$a as Card, _default$9 as Carousel, Checkbox, Col, Container, CookieBar, DateTimePicker, Divider, Footer, Group, Header, Input, _default$8 as Item, _default$7 as List, Loading, MagicButton, Menu, Message, _default$6 as Modal, Notification, _default$5 as Pagination, Radio, Row, _default$4 as Select, SkipLink, _default$3 as Step, Switch, _default$1 as Tab, _default$2 as Table, Tag, Textarea, Upload, _default as Wizard };
