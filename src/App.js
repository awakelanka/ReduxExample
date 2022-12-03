import "bootstrap/dist/css/bootstrap.min.css";
import Stack from "react-bootstrap/Stack";
import { Button } from "react-bootstrap";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <Stack className="stack">
      <h1>Hello, {user?.name}</h1>
      <Button variant={"warning"}>Login</Button>
    </Stack>
  );
}
