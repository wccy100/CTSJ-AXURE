import React from 'react';
import PropTypes from 'prop-types';

import ComponentBaseHOC from '../../ComponentBaseHOC';
import DRSHOC from '../../DRSHOC';

import './PrimaryButtonComponent.less';

/**
 * PrimaryButtonComponent
 * @class PrimaryButtonComponent
 * @classdesc PrimaryButtonComponent
 */
class PrimaryButtonComponent extends React.PureComponent {
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

PrimaryButtonComponent.defaultProps = {
  selectorPrefix: '',
  groupKey: '',
  componentKey: '',
};

PrimaryButtonComponent.propTypes = {
  groupKey: PropTypes.string,
  componentKey: PropTypes.string,
  selectorPrefix: PropTypes.string,
};

export default ComponentBaseHOC(DRSHOC(PrimaryButtonComponent, {
  groupKey: 'base',
  componentKey: 'PrimaryButton',
}));
