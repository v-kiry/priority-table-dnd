import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import moment from 'moment';

import Header from './components/Header';
import Tabel from './components/Tabel';
import initial from './initial-data';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

moment.lang('ru');
let time = moment().format('L LT');

const App = () => {

  const [state, setState] = useState(initial);

  const onDragEnd = (result) => {
    console.log(result);
    
    
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const data = reorder(
      state,
      result.source.index,
      result.destination.index
    );

   data.forEach((item, index) => {
      item.priority = index + 1
    })

    console.log(data);
    
    setState(data)
  }

  return(
    <DragDropContext onDragEnd={onDragEnd}>
      <Header />
      <Tabel data={state} time={time}/>
    </DragDropContext>
  ); 
}

export default App;