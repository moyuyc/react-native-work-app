/**
 * Created by moyu on 2017/2/26.
 */
import ReducerHelper from './reducer-helper';
import {stringify} from 'querystring';
export const _t = (type, obj) => ({type, ...obj})

export const uint = () => {
    uint._i_ = uint._i_ || 0;
    return uint._i_++;
}
/**
 * 将字符串分割成显示的与隐藏的两部分。
 * @param text
 * @returns {{showText: string, hideText: *}}
 */
export const splitText = (text='', limit=50) => {
    let showText = '', hideText = '';
    // if (typeof text === 'string') {
    //     return {
    //         showText: text.substr(0, limit),
    //         hideText: text.slice(limit)
    //     }
    // }


    Array.from(text).some((char, i) => {
        if (char === '\n') {
            if (showText.length >= limit) {
                hideText = text.slice(i+1);
                return true;
            }
        }
        showText += char;
    });

    return {
        showText,
        hideText: !!hideText ? hideText : null
    }
}

export const reducerHelper = ReducerHelper;
export const _debugger = (obj) => {
    const __DEBUG__ = true;
    if (!__DEBUG__) {
        return;
    }
    const prefix = "[ERROR]: ";
    if (obj instanceof Error) {
        alert(prefix+obj.message+'\n'+obj.stack);
    } else if (typeof obj === 'string') {
        alert(prefix+obj);
    } else {
        alert(prefix+JSON.stringify(obj));
    }
};




import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';

export const alert = (title, message) => {Alert.alert(title && title.toString() || "title", message);}

export const sep = (noBorder, style, props) => {
    return <View style={[{
        height: 10,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#e5e5e5'
    }, noBorder ? {borderColor: 'transparent'} : {}, style]} {...props}></View>
}


import {set, get, remove} from './storage';
const memStorage = {}

export async function setData (data) {
    return await set('@data', JSON.stringify(data));
}

export async function getData () {
    return JSON.parse(await get('@data'));
}

export async function setToken (token) {
    memStorage['token'] = token;
    return await set('@token', token);
}

export function getTokenSync () {
    return memStorage['token'];
}

export async function getToken () {
    const token = await get('@token');
    memStorage['token'] = token;
    return token;
}
export async function removeToken () {
    delete memStorage['token'];
    return await remove('@token');
}
export async function checkSigned () {
    if (memStorage['token']) {
        return !!memStorage['token'];
    }
    const t = await getToken();
    return !!t;
}
export async function getTokenJson () {
    return {
        authorization: await getToken()
    };
}

export function getTokenJsonSync() {
    return {
        authorization: getTokenSync()
    };
}

/*TODO: safari browser => ios only*/
import SafariView from 'react-native-safari-view';

export const open = (url, opts={}) => (
    SafariView.isAvailable()
        .then(SafariView.show({
            url,readerMode: false,...opts
        }))
        .catch(error => {
            _debugger(error);
        })
)
