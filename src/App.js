import logo, { ReactComponent } from "./logo.svg";
import "./App.css";
import React from "react";
import Badge from "./Badge";

const students = [
  { name: "Daisy", age: "4" },
  { name: "Cernan", age: "125" },
  { name: "Ashley", age: "31" },
];

function App() {
  const studentElements = students.map((student) => (
    <Badge student={student} />
  ));

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to React!!!</p>
        {studentElements}
      </header>
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     const studentElements = students.map((student) => (
//       <Badge student={student} />
//     ));
//     return (
//       <div className="App">
//         <header className="App-header">
//           <p>Welcome to React!!!</p>
//           {studentElements}
//         </header>
//       </div>
//     );
//   }
// }

export default App;
