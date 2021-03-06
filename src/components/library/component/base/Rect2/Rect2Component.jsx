import React from 'react';
import PropTypes from 'prop-types';
import ComponentBaseHOC from '../../ComponentBaseHOC';
import DragResizeHOC from '../../DragResizeHOC';
import './Rect2Component.less';

/**
 * Rect2Component
 * @class Rect2Component
 * @classdesc Rect2Component
 */
class Rect2Component extends React.Component {
  render() {
    const { selectorPrefix, groupKey, componentKey } = this.props;
    return (
      <div className={`${selectorPrefix}-${groupKey}-${componentKey}`} />
    );
  }
}

Rect2Component.defaultProps = {
  selectorPrefix: '',
  groupKey: '',
  componentKey: '',
};

Rect2Component.propTypes = {
  groupKey: PropTypes.string,
  componentKey: PropTypes.string,
  selectorPrefix: PropTypes.string,
};

export default ComponentBaseHOC(DragResizeHOC(Rect2Component, {
  groupKey: 'base',
  componentKey: 'Rect2',
}));
