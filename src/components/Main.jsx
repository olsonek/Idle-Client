/**
 * Created by Eddie on 10/20/2015.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import {fromJS} from 'immutable';
import {EventEmitter} from 'fbemitter';

//Components
import Game from './Game';
import Triptic from './Triptic.js';

const info = fromJS({
    Eddie: 1,
    Rob: 3
}).keySeq();

const style = {
    main: ['svg'],
    game: ['top'],
    triptic: ['bottom']
};

export default React.createClass({
    emitter: EventEmitter,
    createEmitter: function () {
        this.emitter = new EventEmitter();
    },
    render: function () {
        return <div className={classNames(style.main)}>
            {this.createEmitter()}
            <div className={classNames(style.game)}>
                <Game emitter={this.emitter}/>
            </div>
            <div className={classNames(style.triptic)}>
                <Triptic info={info}/>
            </div>
        </div>;
    }
});