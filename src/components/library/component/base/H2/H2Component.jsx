import React from 'react';
import PropTypes from 'prop-types';

import ComponentBaseHOC from '../../ComponentBaseHOC';
import DRSHOC from '../../DRSHOC';

import './H2Component.less';

/**
 * H2Component
 * @class H2Component
 * @classdesc H2Component
 */
class H2Component extends React.PureComponent {
  /**
   * getStyle
   * @return {Object}
   */
  getStyle() {
    const {
      property: {
        style: {
          fill: {
            backgroundColor,
          },
        },
      },
    } = this.props;

    return {
      backgroundColor,
    };
  }

  render() {
    const {
      selectorPrefix,
      groupKey,
      componentKey,
    } = this.props;
    return (
      <div
        className={`${selectorPrefix}-${groupKey}-${componentKey}`}
        style={this.getStyle()}
      >Secondary title
      </div>
    );
  }
}

H2Component.defaultProps = {
  selectorPrefix: '',
  groupKey: '',
  componentKey: '',
};

H2Component.propTypes = {
  groupKey: PropTypes.string,
  componentKey: PropTypes.string,
  selectorPrefix: PropTypes.string,
};

export default ComponentBaseHOC(DRSHOC(H2Component, {
  groupKey: 'base',
  componentKey: 'H2',
}));
