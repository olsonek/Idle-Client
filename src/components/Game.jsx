/**
 * Created by Eddie on 10/20/2015.
 */
import React, {Component} from 'react';
import Radium from 'radium';

import GameInterface from './GameInterface';
import {EventEmitter} from 'fbemitter';

require.context("../../assets", true);

var styles = {
    imageDiv: {
        'margin-left': '100px',
        'background': '#fff',
        'display': 'block',
        'width': '345px',
        'height': '220px',
        'padding': '10px',
        'border-radius': '2px 2px 2px 2px',
        'WebkitBoxShadow': '0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset'
        //'-moz-box-shadow': '0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset',
        //'box-shadow': '0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset'
    }
};

var game;

class Game extends Component {

    static destroyGame() {
        if(game){
            game.destroy();
        }
    }

    initializeGame(gameWidth, gameHeight, emitter) {
        game = new Phaser.Game(Number(gameWidth), Number(gameHeight), Phaser.AUTO, 'gameArea', {
            preload: preload,
            create: create,
            update: update
        });

        function preload() {
            game.load.image('background', 'images/empire_state_building_cropped.jpg');
        }

        /*
         var player;
         var platforms;
         var cursors;

         var stars;
         var score = 0;
         var scoreText;
         */
        function create() {
            var background = game.add.sprite(0, 0, 'background');
            background.scale.x = 2 / 3;
            background.scale.y = 2 / 3;
            var normal = true;

            emitter.addListener('toggle', () => {
                if (normal) {
                    background.scale.x = 1;
                    background.scale.y = 1;
                    normal = false;
                } else {
                    background.scale.x = 2 / 3;
                    background.scale.y = 2 / 3;
                    normal = true;
                }
            });

            emitter.emit('toggle');
        }

        function update() {
        }
    }

    render() {
        var self = this;
        return <div className="game">
            <div id="gameArea"></div>
            {this.destroyGame()}
            {this.initializeGame(self.props.gameWidth, self.props.gameHeight, self.props.emitter)}
            <GameInterface emitter={self.props.emitter}/>
        </div>
    }
}

module.exports = Radium(Game);