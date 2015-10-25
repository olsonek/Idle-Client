/**
 * Created by Eddie on 10/20/2015.
 */
import React from 'react';
import classNames from 'classnames';

var Workers = React.createClass({
    render: function () {
        return (
            <div className={classNames()}>
                <h2>Workers</h2>
                <table className={classNames('table-light', 'overflow-hidden', 'bg-white', 'border', 'rounded')}>
                    <thead className={classNames('bg-darken-1')}>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Task</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.workers.map(function(worker,index) {
                        return(
                        <tr key={index}>
                            <td>{worker[0]}</td>
                            <td>{worker[1]}</td>
                            <td>{worker[2]}</td>
                        </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
});

export default Workers
