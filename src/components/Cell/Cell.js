/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import styles from './Cell.style';

const Cell = ({loading, data, extraStyle}) => {
  let style = [styles.cells, extraStyle];

  return (
    <div css={style}>{loading || data}</div>
  )
}

export default Cell;