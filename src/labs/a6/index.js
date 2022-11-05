import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput
    from "./conditional-output";
import TodoList from "./todo/todo-list";
import TodoItem from "./todo/todo-item";


function Assignment6() {
    return (
        <div>
            <div>
                <h1>Assignment 6</h1>
                <TodoList/>
                <TodoItem/>
                <ConditionalOutput/>
                <Styles/>
                <Classes/>
            </div>
        </div>
    )
}

export default Assignment6;