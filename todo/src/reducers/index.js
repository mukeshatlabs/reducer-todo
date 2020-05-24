import React, { useReducer } from 'react';

export const ADD_TASK = "ADD_TASK";

export const initialState = {
  tasks: [
    {item: 'Learn about React', completed: false, id: 1 },
    {item: 'Learn about Redux', completed: false, id: 2}
]
};

export function todoReducer(state, action){
  switch (action.type){
    case ADD_TASK:
      console.log("add task")
      return {
        ...state,
        tasks: [...state.tasks, {item: action.payload, completed:false, id:Date.now() } ]};
    case 'DELETE_TASK':
      return state;
    default:
      return state;
  }
}
