import ListGroup from "./components/ListGroup";

const cities = [
  "New York",
  "San Francisco",
  "Tokyo",
  "Paris",
  "Barcelona",
  "Porto",
];
const colors = [
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Orange",
  "Purple",
  "Pink",
  "Brown",
  "Black",
  "White",
  "Gray",
  "Silver",
  "Gold",
  "Cyan",
  "Magenta",
  "Turquoise",
  "Indigo",
  "Lavender",
  "Olive",
  "Maroon",
];

const hundleShowValue = (item: string) => {
  console.log(item);
};

function App() {
  return (
    <div>
      <ListGroup
        items={cities}
        heading="Cities"
        onShowValue={hundleShowValue}
      />
    </div>
  );
}
export default App;
