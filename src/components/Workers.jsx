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
                    {this.props.workers.map(function(worker) {
                        return(
                        <tr>
                            <td>{worker.get('name')}</td>
                            <td>{worker.get('job', 'none')}</td>
                            <td>{worker.get('task', 'none')}</td>
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
