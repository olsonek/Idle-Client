/**
 * Created by Eddie on 10/20/2015.
 */
import React from 'react';
import Radium from 'radium';
import classNames from 'classnames';

const m = './images/male_worker_icon.png';
const b = './images/boy_icon.png';
const f = './images/female_worker_icon.png';
const g = './images/girl_icon.png';
const u = './images/unknown_icon.png';


var styles = {
    table: {},
    row: {
        //':hover': {background: 'red', color: 'black'},
        //':active': {background: 'green', color: 'white'},
        background: 'white'
    },
    main: {
        overflow: 'hidden',
        width: '40px',
        margin: '0',
        padding: '0'
    },
    secondary: {}
};


var Workers = React.createClass({
    getIcon: function (id) {
        if (id) {
            switch (id) {
                case 'm':
                    return m;
                case 'b':
                    return b;
                case 'f':
                    return f;
                case 'g':
                    return g;
                default:
                    return u;
            }
        } else {
            return u;
        }
    },
    render: function () {
        var self = this;
        return (
            <div className={classNames()}>
                <h2>Workers</h2>
                <table className={classNames('table', 'overflow-hidden', 'bg-white', 'border', 'rounded')}
                       style={styles.table}>
                    <thead className={classNames('bg-darken-1')}>
                    <tr>
                        <th className={classNames('m0', 'p0')}/>
                        <th className={classNames('m0', 'p0')}>Name</th>
                        <th className={classNames('m0', 'p0')}>Job</th>
                        <th className={classNames('m0', 'p0')}>Task</th>
                    </tr>
                    </thead>
                    <tbody>
                    {self.props.workers.map(function(worker, index) {
                        return(
                        <tr
                            key={index}
                            style={styles.row}
                            onClick={() => {self.props.selectWorker(worker[0])}}
                        >
                            <td className={classNames('m0', 'p0', 'fit')}
                                style={styles.main}>
                                <img src={self.getIcon(worker[1])}
                                     width="40" height="40"
                                     className={classNames()}/>
                            </td>
                            <td className={classNames('left-align', 'm0', 'p0')}
                                style={styles.secondary}>{worker[2]}</td>
                            <td className={classNames('left-align', 'm0', 'p0')}
                                style={styles.secondary}>{worker[3]}</td>
                            <td className={classNames('left-align', 'm0', 'p0')}
                                style={styles.secondary}>{worker[4]}</td>
                        </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
});

export default Radium(Workers);