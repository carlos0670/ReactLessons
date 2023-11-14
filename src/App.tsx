import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button onclick={() => console.log("onclick")} color="primary">
        Click Me
      </Button>
    </div>
  );
}
export default App;
