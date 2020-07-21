import React from "react";

const Header = (props) => {
  return (
    <div>
      <h3> {props.course.name}</h3>
    </div>
  );
};
const Parts = ({ part }) => {
  return (
    <div>
      {part.name} {part.exercises}
    </div>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Parts key={part.id} part={part} />
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  const totalExercises = parts
    .map((part) => part.exercises)
    .reduce((acc, cur) => acc + cur, 0);
  return (
    <div>
      <h5>total of {totalExercises} exercises</h5>
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
