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
    3: {name: 'Bobby'},
    4: {name: 'Frank', job: 'Miner', task: 'Mine Ore'},
    5: {name: 'Jimmy', job: 'Coder', task: 'Write Code'}
});

export default React.createClass({
    render: function () {
        return (
            <section className={classNames('container', 'px2', 'border')}>
                <div className={classNames('clearfix', 'mxn2')}>
                    <div className={classNames('bg-olive', 'sm-col', 'sm-col-4', 'border', 'px2')}>
                        <Info info={info}/>
                    </div>
                    <div className={classNames('bg-teal', 'sm-col', 'sm-col-4', 'border', 'px2')}>
                        <Chat info={info}/>
                    </div>
                    <div className={classNames('bg-olive', 'sm-col', 'sm-col-4', 'border', 'px2')}>
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