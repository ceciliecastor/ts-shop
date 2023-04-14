import React, { useState } from "react";
import "./App.css";
import InputField from "./component/InputField";
import TodoList from "./component/TodoList";
import { Todo } from "./model";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

//FC = functional component
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    //If you drag a element outside a droppable space
    if(!destination)return
    if(destination.droppableId===source.droppableId)
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">TASKIFY</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;

// -------------------------------

//This variable contains an array of strings
//let hobbies: string[];

//this variable is called a tuple
//let role: [number, string];

/* ----- OBJECT / TYPE ---- */
//define an object
//first letters of type is capital (good practice)
//? after var name makes it optional

//Type:
// type Person = {
//   name: string;
//   age?: number;
// };

//'cat' contains both Person and Cat's data
//when declaring Cat you'll have to declare BOTH Person and Cat or you'll get an error
// type Cat = Person & {
//   catName: string;
//   catAge?: number;
// };

//Interface:
// interface OtherPerson {
//   otherName: string;
//   otherAge?: number;
// }

// interface OtherCat extends OtherPerson {
//   otherCatName: string;
//   otherCatAge: number;
// }

//A variable that contains an array of Person object
//let lotsOfPeople: Person[];

//A var that contains both number and string using union (this symbol: |)
//you can now use either/or - not both
//let ageUnion: number | string;

/* ----- FUNCTION ---- */
// function printName(name: string){
//   console.log(name)
// }

//void returns undefined
//let printAddress: (name: string) => void;

//Never doesn't return anything
//let printAddressNever: (name: string) => never;

//let personName: unknown;
//--------------------------------
