/**
 * Created by Eddie on 10/20/2015.
 */
import React, {Component} from 'react';
import Radium from 'radium';


require('../game/game');
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
        'WebkitBoxShadow': '0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset',
        //'-moz-box-shadow': '0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset',
        //'box-shadow': '0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset'
    },
    userInterface: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    }
};

class Game extends Component {
    render() {
        return <div className="game">
            <script src="../game/game.js" type="text/javascript"></script>
            <div id="gameArea"></div>
            <div id="userInterface" style={[styles.userInterface]}>
                <ul>
                    <li><button>Test</button></li>
                    <li><button>Test</button></li>
                    <li><button>Test</button></li>
                    <li><button>Test</button></li>
                </ul>
            </div>
        </div>
    }
}

module.exports = Radium(Game);