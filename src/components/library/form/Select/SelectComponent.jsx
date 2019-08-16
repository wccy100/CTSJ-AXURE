import React from 'react';
import PropTypes from 'prop-types';
import ComponentBase from '../../ComponentBase';
import Drag from '../../Drag';
import './SelectComponent.less';

/**
 * SelectComponent
 * @class SelectComponent
 * @classdesc SelectComponent
 */
class SelectComponent extends React.Component {
  render() {
    return (
      <div>SelectComponent</div>
    );
  }
}

SelectComponent.defaultProps = {
  groupKey: '',
  componentKey: '',
};

SelectComponent.propTypes = {
  groupKey: PropTypes.string,
  componentKey: PropTypes.string,
};

export default ComponentBase(Drag(SelectComponent, {
  groupKey: 'base',
  componentKey: 'Select',
}));