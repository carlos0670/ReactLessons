import { MouseEvent } from "react";
import { useState } from "react";

interface props {
  items: string[];
  heading: string;
  onShowValue: (value: string) => void;
}

function ListGroup({ items, heading, onShowValue }: props) {
  const [selectIndex, setSelectIndex] = useState(0);

  //const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectIndex === index
                ? "list-group-item  active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectIndex(index);
              onShowValue(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
