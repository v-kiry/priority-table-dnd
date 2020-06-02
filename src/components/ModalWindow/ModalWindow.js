/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import styles from './ModalWindow.style';

const ModalWindow = ({onClick}) => {
  return (
    <div css={styles.containerModal} onClick={onClick}>
      <div css={styles.windowModal} onClick={(event) => event.stopPropagation()}>
        <button css={styles.buttonModal} onClick={onClick}></button>
        <span>Information about element</span>
      </div>
    </div>
  )
}

export default ModalWindow;