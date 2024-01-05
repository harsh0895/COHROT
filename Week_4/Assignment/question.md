// Making a complete todo application using this statement ?

--> You have been given the code of a purely frontend TODO app You have to fill in the following functions -

1. addTodoToDom
2. removeTodoFromDom
3. updateTodoInDom
4. updateState

These 4 functions comprise of what it means to create a library like React. The goal is the following -

Any time the updateState function is called with a new state, the updateState function calculates the diff between newTodos and oldTodos and call addTodoToDom, removeTodoFromDom or updateState based on the calculated diff.
They id of a todo uniquely identifies it. If the title of a todo with the same id changes in two iterations, updateTodoInDom should be called for it.

The structure of the state variable looks something like this -

    const todos = [{
        title: "Go to gym",
        description: "Go to gym from 7-8PM",
        id: 1
    }]