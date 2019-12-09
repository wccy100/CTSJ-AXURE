import React from 'react';
import PropTypes from 'prop-types';

import ComponentBaseHOC from '../../ComponentBaseHOC';
import DRSHOC from '../../DRSHOC';

import './LinkButtonComponent.less';

/**
 * LinkButtonComponent
 * @class LinkButtonComponent
 * @classdesc LinkButtonComponent
 */
class LinkButtonComponent extends React.PureComponent {
  render() {
    const {
      selectorPrefix,
      groupKey,
      componentKey,
    } = this.props;
    return (
      <div
        className={`${selectorPrefix}-${groupKey}-${componentKey}`}
      >BUTTON
      </div>
    );
  }
}

LinkButtonComponent.defaultProps = {
  selectorPrefix: '',
  groupKey: '',
  componentKey: '',
};

LinkButtonComponent.propTypes = {
  groupKey: PropTypes.string,
  componentKey: PropTypes.string,
  selectorPrefix: PropTypes.string,
};

export default ComponentBaseHOC(DRSHOC(LinkButtonComponent, {
  groupKey: 'base',
  componentKey: 'LinkButton',
}));
