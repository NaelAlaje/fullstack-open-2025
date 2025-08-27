const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Total = ({ parts }) => {
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return <p>Nompre total : {total}</p>;
};

const Content = ({ parts }) =>(
  <div>
    <Part parts={parts[0]} />
    <Part parts={parts[1]} />
    <Part parts={parts[2]} />
  </div>
)
const Part = ({ parts }) => (
    <p >
      {parts.name} {parts.exercises}
    </p>
  )

const App = () => {
  const course = "Half Stack application development";

    const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
