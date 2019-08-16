import React from 'react';
import Tab from '../../global/Tab/Tab';
import TabPanel from '../../global/Tab/TabPanel';
import Emitter from '../../../util/Emitter';

import './CanvasPanel.less';
import Actions from '../../../util/Actions';

const { Component } = React;

const selectorPrefix = 'CanvasPanel';

/**
 * CanvasPabel
 * @class CanvasPanel
 * @classdesc CanvasPanel
 */
class CanvasPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      activeKey: '',
    };

    this.onDBClick = this.onDBClick.bind(this);
  }

  componentDidMount() {
    Emitter.on(Actions.components.business.pagepanel.dbclick, this.onDBClick);
  }

  componentWillUnMount() {
    Emitter.remove(Actions.components.business.pagepanel.dbclick, this.onDBClick);
  }

  /**
   * add
   * @param t
   */
  onDBClick(t) {
    const data = [...this.state.data];
    const { id } = t;
    const index = data.findIndex((n) => {
      return n.id === id;
    });

    let activeKey;
    if (index === -1) {
      data.push(t);
      activeKey = t.id;
    } else {
      activeKey = data[index].id;
    }
    this.setState({
      data,
      activeKey,
    }, () => {
      Emitter.trigger(Actions.components.business.canvaspanel.addtab);
    });
  }

  onChange = (key) => {
    this.setState({
      activeKey: key,
    }, () => {
      Emitter.trigger(Actions.components.business.canvaspanel.tabchange, key);
    });
  };

  onRemove = (key) => {

  };

  render() {
    const { data = [], activeKey } = this.state;
    return (
      <div className={selectorPrefix}>
        <Tab
          activeKey={activeKey}
          onChange={this.onChange}
          onRemove={this.onRemove}
        >
          {
            data.map((t) => {
              const { name, id } = t;
              return (
                <TabPanel name={name} key={id}>
                  <div
                    className={`${selectorPrefix}-TabDroppable ${activeKey === id ? 'ct-droppable-target' : ''}`}
                    data-pageid={id}
                  >
                    <div className={`${selectorPrefix}-TabScroll ct-drag`} />
                  </div>
                </TabPanel>
              );
            })
          }
        </Tab>
      </div>
    );
  }
}

export default CanvasPanel;