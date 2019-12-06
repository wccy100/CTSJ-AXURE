import React from 'react';
import PropTypes from 'prop-types';

import ComponentToolBaseHOC from '../../ComponentToolBaseHOC';

import './InlineFrameTool.less';

/**
 * InlineFrame
 * @class InlineFrameTool
 * @classdesc InlineFrame
 */
class InlineFrameTool extends React.PureComponent {
  render() {
    const { selectorPrefix } = this.props;
    return (
      <React.Fragment>
        <div className={`${selectorPrefix}-base-InlineFrame fa fa-custom-iframe`} />
      </React.Fragment>
    );
  }
}

InlineFrameTool.defaultProps = {
  selectorPrefix: '',
};

InlineFrameTool.propTypes = {
  selectorPrefix: PropTypes.string,
};

export default ComponentToolBaseHOC(InlineFrameTool, {
  groupKey: 'base',
  componentKey: 'InlineFrame',
});