import "bootstrap/dist/css/bootstrap.min.css";
import Stack from "react-bootstrap/Stack";
import { Button } from "react-bootstrap";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { LOGOUT, LOGIN, INCREMENT, DECREMENT } from './constants/actionTypes';

export default function App() {
  const user = useSelector((state) => state.user);
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <Stack className="stack">
      {user?.loggedIn ? 
      (
        <>
        <h1>Hello, {user?.user?.name}</h1>
        <Button variant={"warning"} onClick={() => dispatch({ type: LOGOUT })}>Logout</Button>
        </>
      ) : 
      (
        <>
          <h1>Login</h1>  
          <Button variant={"primary"} onClick={() => dispatch({ type: LOGIN })}>Login</Button>
        </>
      )
      }
      <div className="counter">
        <h1>Counter : {count?.count || 0}</h1>
        <div className="buttons">
          <Button variant="danger" onClick={() => dispatch({ type: DECREMENT })}>Decrement</Button>
          <Button variant="success" onClick={() => dispatch({ type: INCREMENT })}>Increment</Button>
        </div>
      </div>
    </Stack>
  );
}
