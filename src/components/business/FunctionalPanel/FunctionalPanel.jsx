import React from 'react';
import SplitFactory from '../../global/CT-UI-Split/split';
import Accordion from '../../global/Accordion/Accordion';
import CardAccordionItem from '../../global/Accordion/CardAccordionItem';
import PagePanel from '../PagePanel/PagePanel';
import ComponentPanel from '../ComponentPanel/ComponentPanel';
import './FunctionalPanel.less';

const { Component } = React;

const selectorPrefix = 'FunctionalPanel';
/**
 * FunctionalPanel
 * @class FunctionalPanel
 * @classdesc FunctionalPanel
 */
class FunctionalPanel extends Component {
  componentDidMount() {
    SplitFactory.create(document.getElementById(selectorPrefix), {
      direction: 'vertical',
    });
  }

  render() {
    return (
      <Accordion
        className={`ct-split ${selectorPrefix}`}
        id="FunctionalPanel"
      >
        <CardAccordionItem className={`ct-split-top ${selectorPrefix}-Item`} name="page" open>
          <PagePanel />
        </CardAccordionItem>
        <CardAccordionItem className={`ct-split-main ${selectorPrefix}-Item`} name="component" open>
          <ComponentPanel />
        </CardAccordionItem>
      </Accordion>
    );
  }
}

export default FunctionalPanel;