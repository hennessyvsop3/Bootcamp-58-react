import { StyledButton } from "../Counter/Counter.styled";
import { StyledInput, StyledTodo, StyledTodoList } from "./TodoList.styled";
import todosData from "./../../assets/todos.json";
import { Flex } from "../../styles/GlobalStyles";
import React from "react";

export class TodoList extends React.Component {
  state = {
    todos: todosData,
    currentTodo: "",
  };

  handleDeleteTodo = (id) => {
    const newTodosData = this.state.todos.filter((item) => item.id !== id);
    console.log(newTodosData);
    this.setState({ todos: newTodosData });
  };

  handleChangeInput = (e) => {
    this.setState({ currentTodo: e.target.value });
  };

  handleAddTodo = () => {
    const item = {
      id: crypto.randomUUID(),
      todo: this.state.currentTodo,
      completed: false,
    };
    this.setState((prev) => ({
      todos: [...prev.todos, item],
      currentTodo: "",
    }));
  };

  handleEnterKeyDown = (e) => {
    if (e.key === "Enter") {
      this.handleAddTodo();
      this.setState({ currentTodo: "" });
    }
  };

	handleToggleTodo = (id) => {
		this.setState((prev) => ({todos:
			prev.todos.map((item) =>
				item.id === id ? { ...item, completed: !item.completed } : item
			)
		})
      
    );
	};
	
	handleClearTodos = () => {
		this.setState({todos:[]})
	}

  render() {
    const { todos } = this.state;

    return (
      <>
        <StyledTodoList>
          <Flex $height="auto" $width="695px">
            <StyledInput
              onKeyDown={this.handleEnterKeyDown}
              onChange={this.handleChangeInput}
              type="text"
              value={this.state.currentTodo}
            />
            <StyledButton onClick={this.handleAddTodo}>Add</StyledButton>
          </Flex>
          {todos.map((item) => (
            <StyledTodo key={item.id}>
              <input
                onChange={() => this.handleToggleTodo(item.id)}
                type="checkbox"
                checked={item.completed}
              />
              <span>{item.todo}</span>
              <StyledButton
                onClick={() => this.handleDeleteTodo(item.id)}
                $size="18px"
              >
                Delete
              </StyledButton>
            </StyledTodo>
          ))}
          <StyledButton onClick={this.handleClearTodos} $border="4">
            Clear all todos
          </StyledButton>
        </StyledTodoList>
      </>
    );
  }
}

// export const TodoList = () => {
//   return (
//     <>
//       <StyledTodoList>
//         <Flex $height="auto" $width="695px">
//           <StyledInput type="text" />
//           <StyledButton>Add</StyledButton>
//         </Flex>
//         {todos.map((item) => (
//           <StyledTodo>
//             <input type="checkbox" />
//             <span>{item.todo}</span>
//             <StyledButton $size="18px">Delete</StyledButton>
//           </StyledTodo>
//         ))}
//         <StyledButton $border="4">Clear all todos</StyledButton>
//       </StyledTodoList>
//     </>
//   );
// };
