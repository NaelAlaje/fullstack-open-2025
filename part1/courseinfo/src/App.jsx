const Header = ({ course }) => {
  console.log(course);

  return <h1>{course}</h1>;
};

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <p>Nompre total : {total}</p>;
};

const Content = ({ parts }) => <Part parts={parts} />;

const Part = ({ parts }) => {
  return parts.map((part) => (
    <p key={part.name}>
      {part.name} {part.exercises}
      {console.log("part", part)}
    </p>
  ));
};

const App = () => {
  const course = "Half Stack application development";

  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };
  const parts = [part1, part2, part3];
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
