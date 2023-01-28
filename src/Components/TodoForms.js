import React, { useState, useContext } from "react";
import { FormGroup, Input, Button, Form, InputGroup } from "reactstrap";

import { v4 } from "uuid";
import { TodoContext } from "../context/TodoContext";
import { ADD_TODO } from "../context/action.types";

const TodoForm = () => {
  const [todoString, setTodoString] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert("Please enter Todo");
    }
  };

  return (
    <Form>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your Next Todo"
            value={todoString}
            onChange={(e) => (setTodoString = e.target.value)}
          />
          <Button color="warning" /*onClick */>Add</Button>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
