/**
 * Created by Eddie on 10/21/2015.
 */
import React from 'react';
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

var GameInterface = React.createClass({
    render: function () {
        self = this;
        return (
            <div id="userInterface" style={[styles.userInterface]}>
                <button onClick={this.toggle}>Test</button>
                <script></script>
            </div>
        )
    },

    toggle: function () {
        //console.log('toggle!');
        self.props.emitter.emit('toggle');
    }
});

export default Radium(GameInterface);