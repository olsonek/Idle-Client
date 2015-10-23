/**
 * Created by Eddie on 10/22/2015.
 */
import React from 'react';
import classNames from 'classnames';
import {fromJS} from 'immutable';

const style = {
    main: ['clearfix'],
    game: ['left', 'p2'],
    info: ['left', 'p2'],
    chat: ['left', 'p2']
};

export default React.createClass({
    render: function () {
        return <div className={classNames(style.main)}>
        </div>;
    }
});