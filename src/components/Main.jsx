/**
 * Created by Eddie on 10/20/2015.
 */
import React from 'react';
import Game from './Game';
import Info from './Info';
import classNames from 'classnames';
import {fromJS} from 'immutable';
import {EventEmitter} from 'fbemitter';

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
    emitter: EventEmitter,
    createEmitter: function () {
        this.emitter = new EventEmitter();
    },
    render: function () {
        return <div className={classNames(style.main)}>
            {this.createEmitter()}
            <div className={classNames(style.game)}><Game gameWidth="300" gameHeight="704" emitter={this.emitter}/>
            </div>
            <div className={classNames(style.info)}><Info info={info} block={false} toggle={this.toggle}/></div>
        </div>;
    }
});