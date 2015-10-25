/**
 * Created by Eddie on 10/22/2015.
 */
import React from 'react';
import classNames from 'classnames';
import Immutable from 'seamless-immutable';

var {EventEmitter} = require('fbemitter');

// Panels
import Info from './Info';
import Chat from './Chat';
import Workers from './Workers';


const info = [
    ['Bobby'],
    ['Frank','Miner', 'Mine Ore'],
    ['Jimmy', 'Coder', 'Write Code']
];

export default React.createClass({
    render: function () {
        return (
            <section className={classNames('container', 'px2', 'border')}>
                <div className={classNames('clearfix', 'mxn2', 'bg-silver')}>
                    <div className={classNames('sm-col', 'sm-col-4', 'border', 'px2', 'bg-darken-3')}>
                        <Info info={info}/>
                    </div>
                    <div className={classNames('sm-col', 'sm-col-4', 'border', 'px2', 'bg-darken-3')}>
                        <Chat info={info}/>
                    </div>
                    <div className={classNames('sm-col', 'sm-col-4', 'border', 'px2', 'bg-darken-3')}>
                        <Workers workers={info}/>
                    </div>
                </div>
            </section>
        );
    }
});

/*
 <section class="container px2 py3">
 <div class="clearfix mxn2">
 <div class="sm-col sm-col-4 px2">
 <h2 class="h1 mb0">Bacon</h2>
 <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>
 </div>
 <div class="sm-col sm-col-4 px2">
 <h2 class="h1 mb0">Bratwurst</h2>
 <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>
 </div>
 <div class="sm-col sm-col-4 px2">
 <h2 class="h1 mb0">Andouille</h2>
 <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>
 </div>
 </div>
 </section>
 */