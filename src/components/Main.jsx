/**
 * Created by Eddie on 10/20/2015.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import {fromJS} from 'immutable';
import {EventEmitter} from 'fbemitter';
import Dimensions from 'react-dimensions';

//Components
import Game from './Game';
import Triptic from './Triptic.js';

const style = {
    game: ['top'],
    triptic: ['bottom']
};

module.exports = Dimensions()(React.createClass({
    emitter: EventEmitter,
    createEmitter: function () {
        this.emitter = new EventEmitter();
    },
    render: function () {
        return <div>
            {this.createEmitter()}
            <div className={classNames(style.game)}>
                <Game emitter={this.emitter}/>
            </div>
            <div className={classNames(style.triptic)}>
                <Triptic/>
            </div>
        </div>;
    }
}));