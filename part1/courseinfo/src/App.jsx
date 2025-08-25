const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ parts }) => {
  let total = 0;
  {
    parts.map((part) => {
      total += part.exercises;
    });
  }
  return <p>Nombre total : {total}</p>;
};

const Content = ({ parts }) => (
  <>
    <Part parts={parts[0]} />
    <Part parts={parts[1]} />
    <Part parts={parts[2]} />
  </>
);
const Part = ({ parts }) => (
  <p>
    {parts.name} {parts.exercises}
  </p>
);

const App = () => {
  const course = "Half Stack application development";

  const parts = [
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a component", exercises: 14 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
