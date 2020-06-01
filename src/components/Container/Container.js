/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import styles from './Container.style';

const Container = ({extraStyle, children}) => {
  let style = [styles.container, extraStyle];

  return(
    <div css={style}>
      {children}
    </div>
  );
}

export default Container;