import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
export interface ICookieList {
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
export interface ICookieGroup {
    groupId?: string;
    groupName?: string;
    groupOptOut?: boolean;
    groupSelected?: boolean;
    groupAlertMessage?: string;
    groupText?: string;
    cookieList?: ICookieList[];
}
export interface INoteList {
    question?: string;
    answer?: string;
}
export interface ILink {
    name?: string;
    url?: string;
}
export interface IConfig {
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
    links?: ILink[];
}
interface CookieBarProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    json?: IConfig[];
    callback?: () => void;
}
export interface CookieBarRef extends HTMLDivElement {
    element: HTMLDivElement;
}
declare const CookieBar: React.ForwardRefExoticComponent<CookieBarProps & React.RefAttributes<CookieBarRef>>;
export default CookieBar;
