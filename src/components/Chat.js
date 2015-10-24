/**
 * Created by Eddie on 10/22/2015.
 */
import React, {Component} from 'react';
import Radium from 'radium';
import classNames from 'classnames';

var styles = {
    base: {
        background: 'blue',
        border: 0,
        borderRadius: 4,
        color: 'white',
        padding: '2em',
        'WebkitUserSelect': 'none',

        ':hover': {background: 'red', color: 'black'},
        ':active': {background: 'green', color: 'white'}
    },
    bass: ['italic']
};

var Chat = React.createClass({
    render: function () {
        return (
            <div className={classNames(styles.bass)}
                 style={styles.base}>
                <h1>Chat</h1>

                <p>{this.props.info}</p>
            </div>
        );
    }
});

export default Radium(Chat)