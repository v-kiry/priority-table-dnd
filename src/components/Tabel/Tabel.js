/** @jsx jsx */
import { jsx, css} from '@emotion/core';
import React, { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import MoonLoader from 'react-spinners/MoonLoader';

import Container from '../Container';
import Row from '../Row';
import ModalWindow from '../ModalWindow';
import styles from './Tabel.style';

const Tabel = ({data, time}) => {
  const [loading, setLoading] = useState(true)
  const [openModal, setOpenModal] = useState(false)

  setTimeout(() => {
    setLoading(false)
  }, 8000);

  return (
    <Droppable droppableId="t1">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <Container>
            {
              openModal && <ModalWindow onClick={() => setOpenModal(!openModal)}/>
            }

            {
              loading &&
                <div css={styles.containerSpinner}>
                  <MoonLoader />
                </div>
            }

            {
              data.map((item, index)  => (
                <Row key={item.id} id={item.id} item={item} index={index} loading={loading} time={time} onDoubleClick={() => setOpenModal(!openModal)}/>)
              )
            }

            {provided.placeholder}
          </Container>
        </div>
      )} 
    </Droppable>
  )
}

export default Tabel;