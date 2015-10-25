/**
 * Created by Eddie on 10/20/2015.
 */
import React from 'react';
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
    }
};

var Info = React.createClass({
    render: function () {
        return (
            <div style={styles.base}>
                <h1>Information:</h1>
                <p>{this.props.info}</p>
            </div>
        );
    }
});

export default Radium(Info);