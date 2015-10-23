/**
 * Created by Eddie on 10/20/2015.
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
        width: '100%',
        height: '100%',
        display: 'table',

        ':hover': {background: 'red', color: 'black'},
        ':active': {background: 'green', color: 'white'}
    },
    bass: ['italic']
};

class Info extends Component {
    render() {
        return (
            <div className={classNames(styles.bass)}
                 style={styles.base}>
                <h1>Information:</h1>

                <p>{this.props.info}</p>
            </div>
        );
    }
}

module.exports = Radium(Info);