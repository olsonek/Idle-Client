/**
 * Created by Eddie on 10/21/2015.
 */
import React, {Component} from 'react';
import Radium from 'radium';
import ReactDOM from 'react-dom';

require.context("../../assets", true);

var styles = {
    userInterface: {
        position: 'absolute',
        top: 0,
        left: 0,
        'WebkitUserSelect': 'none',
        'UserSelect': 'none'
    }
};
var self = this;

class GameInterface extends Component {


    render() {
        self = this;
        return (
            <div id="userInterface" style={[styles.userInterface]}>
                <button onClick={self.toggle}>Test</button>
                <script></script>
            </div>
        )
    }

    static toggle() {
        //console.log('toggle!');
        self.props.emitter.emit('toggle');
    }
}

module.exports = Radium(GameInterface);