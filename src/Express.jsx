function ListItem(props) {
  return <li>{props.animal}</li>;
}

function List(props) {
  if (!props.animals) {
    return <div>Loading</div>;
  }

  if (props.animals.length === 0) {
    return <div>There are no animals in the List!</div>;
  }

  return (
    <ul>
      {props.animals.map((animal) => {
        return <li key={animal}> {animal} </li>;
      })}
    </ul>
  );
}

function App() {
  const animals = [];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}

export default App;
