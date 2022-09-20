import { atom } from "recoil";

export const todoListState = atom({
    key: 'TodoList',
    default: [{
        id: 0,
        description: 'Städa',
        createdDate: new Date(),
        completed: true,
        completedDate: new Date()
      },
      {
        id: 1,
        description: 'Handla mat',
        createdDate: new Date(),
        completed: false,
        completedDate: new Date()
  
      },
      {
        id: 2,
        description: 'Tvätta kläder',
        createdDate: new Date(),
        completed: false,
        completedDate: new Date()
      }]
});