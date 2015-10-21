/**
 * Created by Eddie on 10/20/2015.
 */
import React from 'react';
import Game from './Game';
import Info from './Info';
import classNames from 'classnames';
import {fromJS} from 'immutable';

const info = fromJS({
    Eddie: 1,
    Rob: 3
}).keySeq();

const style = {
    main: ['clearfix'],
    game: ['left', 'p2'],
    info: ['left', 'p2']
};

export default React.createClass({
    render: function () {
        return <div className={classNames(style.main)}>
            <div className={classNames(style.game)}><Game /></div>
            <div className={classNames(style.info)}><Info info={info} block={false}/></div>
        </div>;
    }
});