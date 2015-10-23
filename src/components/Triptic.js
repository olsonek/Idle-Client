/**
 * Created by Eddie on 10/22/2015.
 */
import React from 'react';
import classNames from 'classnames';
import {fromJS} from 'immutable';
import {EventEmitter} from 'fbemitter';

// Panels
import Info from './Info';
import Chat from './Chat';
import Workers from './Workers';


const info = fromJS({
    Eddie: 1,
    Rob: 3
}).keySeq();

const style = {
    main: ['clearfix'],
    game: ['left', 'p2'],
    info: ['left', 'p2'],
    chat: ['left', 'p2']
};

export default React.createClass({
    render: function () {
        return <div className={classNames(style.main)}>
            <Info className={classNames(style.info)} info={info}/>
            <Chat className={classNames(style.chat)}/>
            <Workers className={classNames(style.game)}/>
        </div>;
    }
});