/**
 * Created by Eddie on 10/20/2015.
 */
import React, {Component} from 'react';
import Dimensions from 'react-dimensions';

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
var exists = false;

var Game = React.createClass({
    initializeGame: function (gameWidth, gameHeight, emitter) {
        if (exists) {
            try {
                game.destroy();

            } catch (err) {
            }
            //noinspection JSUnusedAssignment
            exists = false;
        }
        game = new Phaser.Game(Math.floor(Number(gameWidth)), Number(gameHeight), Phaser.AUTO, 'gameArea', {
            preload: preload,
            create: create,
            update: update
        });
        exists = true;
        function preload() {
            game.load.image('background', 'images/montreal_ultrawide.jpg');
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
            var background = game.add.sprite(-700, -150, 'background');
            background.scale.x = 1 / 2;
            background.scale.y = 1 / 2;
            var normal = true;

            emitter.addListener('toggle', () => {
                if (normal) {
                    background.scale.x = 1;
                    background.scale.y = 1;
                    background.x = -1500;
                    background.y = -400;
                    normal = false;
                } else {
                    background.scale.x = 1 / 2;
                    background.scale.y = 1 / 2;
                    background.x = -700;
                    background.y = -150;
                    normal = true;
                }
            });
        }

        function update() {
        }
    },
    render: function () {
        return <div className="game">
            <div id="gameArea"></div>
            {this.initializeGame(this.props.containerWidth, "300", this.props.emitter)}
            <GameInterface emitter={this.props.emitter}/>
        </div>
    }
});

export default Dimensions()(Game);