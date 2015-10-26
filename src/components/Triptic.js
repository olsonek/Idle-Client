/**
 * Created by Eddie on 10/22/2015.
 */
import React from 'react';
import Radium from 'radium';
import classNames from 'classnames';

var {EventEmitter} = require('fbemitter');

// Panels
import Info from './Info';
import Chat from './Chat';
import Workers from './Workers';

import Worker from './Worker';


const workers = [
    ['1', 'm', 'Eddie', 'Coder'],
    ['2', 'b', 'Bobby'],
    ['4', 'm', 'Frank', 'Miner', 'Mine Ore'],
    ['7', 'm', 'Logan', 'Coder'],
    ['8', 'f', 'Alice'],
    ['9', 'g', 'Sarah', 'Student']
];

var Triptic = React.createClass({
    getInitialState: function () {
        return {};
    },
    selectWorker: function () {
        this.setState({selectedWorker: 1});
    },
    getWorker: function (workerId) {
        for (var worker in workers) {
            if (worker[0] === workerId) {
                return worker;
            }
        }
        return undefined;
    },
    render: function () {
        var self = this;
        return (
            <section className={classNames('container', 'px2', 'border', 'unselectable')}>
                <div className={classNames('clearfix', 'mxn2')}>
                    <div className={classNames('sm-col', 'sm-col-4', 'border', 'px2', 'bg-darken-3')}>
                        {self.state.selectedWorker ?
                            <Worker worker={self.getWorker(self.state.selectedWorker)}/> :
                            <Workers workers={workers} selectWorker={self.selectWorker}/>}
                    </div>
                    <div className={classNames('sm-col', 'sm-col-4', 'border', 'px2', 'bg-darken-1')}>
                         <Info workers={workers} />
                    </div>
                    <div className={classNames('sm-col', 'sm-col-4', 'border', 'px2', 'bg-darken-3')}>
                        <Chat/>
                    </div>
                </div>
            </section>
        );
    }
});

export default Radium(Triptic);