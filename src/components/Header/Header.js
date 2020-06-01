/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import Container from '../Container';
import Cell from '../Cell';
import styles from './Header.style';

const Header = () => {
  return (
    <header css={styles.header}>
      <Container extraStyle={styles.container}>
        <Cell extraStyle={styles.cellsOne} data="id" />
        <Cell extraStyle={styles.cellsTwo} data="task name" />
        <Cell extraStyle={styles.cellsThree} data="create" />
        <Cell extraStyle={styles.cellsFour} data="manager" />
        <Cell extraStyle={styles.cellsFive} data="priority" />
      </Container>
    </header>
  )
}

export default Header;