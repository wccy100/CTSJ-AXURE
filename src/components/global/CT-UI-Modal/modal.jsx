import React from 'react';
import ReactDOM from 'react-dom';

import ModalComponent, { selectorPrefix } from './ModalComponent';
import Prompt from './Prompt';

const MessageDialogStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  wordBreak: 'break-word',
};

const Modal = {
  /**
   * open
   * @param {Object} - config
   * @return {HTMLDivElement}
   */
  open(config) {
    const parentEl = document.createElement('div');
    parentEl.className = `${selectorPrefix}-Wrap`;

    ReactDOM.render(
      <ModalComponent {...config} />,
      parentEl,
    );
    document.body.appendChild(parentEl);
    return parentEl;
  },
  /**
   * close
   * @param {HTMLElement} - el
   */
  close(el) {
    ReactDOM.unmountComponentAtNode(el);
  },
  /**
   * alert
   * @param {String | ReactElement} - content
   * @param {SelectOptions} - zIndex
   */
  alert({
    content,
    zIndex = 9999,
  }) {
    const modal = Modal.open({
      title: 'alert',
      component: (
        <div style={MessageDialogStyle}>{content}</div>
      ),
      minWidth: 'auto',
      zIndex,
      buttons: [
        {
          text: 'ok',
          handler: () => {
            Modal.close(modal);
          },
        },
      ],
      xscroll: true,
      yscroll: true,
    });
  },
  /**
   * confirm
   * @param {String | ReactElement} - content
   * @param {SelectOptions} - zIndex
   * @param {Function} - success
   */
  confirm({
    content,
    success,
    zIndex = 9999,
  }) {
    const modal = Modal.open({
      title: 'confirm',
      component: (
        <div style={MessageDialogStyle}>{content}</div>
      ),
      minWidth: 'auto',
      zIndex,
      buttons: [
        {
          text: 'ok',
          handler: () => {
            if (success) {
              success().then(() => {
                Modal.close(modal);
              });
            } else {
              Modal.close(modal);
            }
          },
        },
        {
          text: 'cancel',
          handler: () => {
            Modal.close(modal);
          },
        },
      ],
      xscroll: true,
      yscroll: true,
    });
  },
  /**
   * prompt
   * @param {String | ReactElement} - content
   * @param {String} - defaultValue
   * @param {SelectOptions} - zIndex
   * @param {Function} - success
   */
  prompt({
    content,
    defaultValue = '',
    success,
    zIndex = 9999,
    maxLength = 100,
  }) {
    let ins;
    const modal = Modal.open({
      title: 'prompt',
      component: (
        <Prompt
          defaultValue={defaultValue}
          content={content}
          maxLength={maxLength}
          ref={self => ins = self}
        />
      ),
      minWidth: 'auto',
      zIndex,
      buttons: [
        {
          text: 'ok',
          handler: () => {
            const value = ins.getValue();
            if (!value) return false;
            if (success) {
              success(value).then(() => {
                Modal.close(modal);
              });
            } else {
              Modal.close(modal);
            }
          },
        },
        {
          text: 'cancel',
          handler: () => {
            Modal.close(modal);
          },
        },
      ],
      xscroll: true,
      yscroll: true,
    });
  },
};

export default Modal;
