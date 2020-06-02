/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd'

import Cell from '../Cell';
import styles from './Row.style';

const Row = ({id, index, item, loading, time, onDoubleClick}) => {

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          css={styles.container}
          ref={provided.innerRef}
          onDoubleClick={onDoubleClick}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Cell 
            extraStyle={styles.cellsOne} 
            loading={loading} 
            data={id} 
          />
          <Cell 
            extraStyle={styles.cellsTwo} 
            loading={loading} 
            data={item.taskname}
          />
          <Cell 
            extraStyle={styles.cellsThree} 
            loading={loading} 
            data={time} 
          />
          <Cell 
            extraStyle={styles.cellsFour} 
            loading={loading} 
            data={item.manager} 
          />
          <Cell 
            extraStyle={styles.cellsFive} 
            loading={loading} 
            data={item.priority} 
          />
        </div>
      )}
    </Draggable>
    
  )
}

export default Row;