import '@govbr-ds/core/dist/components/cookiebar/cookiebar.min.css';


import classNames from 'classnames';
import React, { useEffect, useImperativeHandle, useRef } from 'react';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';
import useCommonProperties from '../Util/useCommonProperties';

import styles from './CookieBar.module.scss'; 

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

interface CookieBarProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    json?: IConfig[],
    callback?: () => void
} 

const defaultConfigs = 
[
    {
        'lang': '',
        'allOptOut': true,
        'acceptButton': '',
        'optInButton': '',
        'optOutButton': '',
        'infoText': '',
        'mainTitle': '',
        'lastUpdate': '',
        'entryText': '',
        'selectAll': false,
        'allAlertMessage': '',
        'closeLabel': '',
        'lastUpdateLabel': '',
        'cookieGroupsLabel': '',
        'selectAllLabel': '',
        'unselectAllLabel': '',
        'selectAllGroupLabel': '',
        'unselectAllGroupLabel': '',
        'onLabel': '',
        'offLabel': '',
        'alwaysActiveLabel': '',
        'cookieNameLabel': '',
        'expiresLabel': '',
        'domainLabel': '',
        'enterpriseLabel': '',
        'purposeLabel': '',
        'descriptionLabel': '',
        'cookieGroups': [
            {
                'groupId': '',
                'groupName': '',
                'groupOptOut': false,
                'groupSelected': false,
                'groupAlertMessage': '',
                'groupText': '',
                'cookieList': [
                    {
                        'cookieId': '',
                        'cookieOptOut': false,
                        'cookieSelected': false,
                        'alertMessage': '',
                        'cookieName': '',
                        'expires': '',
                        'domain': 's',
                        'entreprise': '',
                        'purpose': '',
                        'description': ''
                    },
                ]
            },
        ],
        'noteTitle': '',
        'noteList': [
            {
                'question': '',
                'answer': ''
            },
        ],
        'links': [
            {
                'name': '',
                'url': ''
            }
        ]
    }
];

export interface CookieBarRef extends HTMLDivElement {
    element: HTMLDivElement
}

const CookieBar = React.forwardRef<CookieBarRef, CookieBarProps>(
    ({className, children, json = defaultConfigs, callback, ...props}, ref) => {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const core = require('@govbr-ds/core/dist/core-base');

        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        const refDiv = useRef<HTMLDivElement>(null);
        const refElement = useRef();

        useCommonProperties<CookieBarRef>(ref, refDiv, {
            get element() {
                return refDiv.current;
            }
        });

        useEffect(() => {
            if(!refElement.current && refDiv.current) {
                const params = {
                    name: 'br-cookiebar',
                    component: refDiv.current,
                    json: JSON.stringify(json),
                    lang: 'pt-br',
                    mode: 'default',
                    callback: callback,
                };
    
                refElement.current = new core.BRCookiebar(params);
            }            
        }, [json, callback]);

        return (
            <div
                ref={refDiv}
                className={classNames(
                    'br-cookiebar',
                    'default',
                    'd-none',
                    className,
                    ...mtProps
                )}
                tabIndex={-1}
                {...spreadProps}
                
            >
                {children}
            </div>
        );
    }
); 

CookieBar.displayName = 'CookieBar';

export default CookieBar;