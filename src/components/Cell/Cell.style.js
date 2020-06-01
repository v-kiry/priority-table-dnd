import { css } from '@emotion/core';

export default {
  cells:css`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e5ebf1;
    padding: 0 10px;
    border-radius: 6px;
    text-align: center;
    margin-right: 2px;
    height: calc(100vh / 17);

    &:last-child {
      margin-right: 0;
    }
  `,
}