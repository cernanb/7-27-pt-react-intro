import logo, { ReactComponent } from "./logo.svg";
import "./App.css";
import React from "react";
import Settings from "./components/Settings";
import BadgeList from "./components/BadgeList";
import SubjectList from "./components/SubjectList";

const students = [
  { name: "Daisy", age: "4" },
  { name: "Cernan", age: "125" },
  { name: "Ashley", age: "31" },
];

// function App() {
//   const studentElements = students.map((student) => (
//     <Badge student={student} />
//   ));

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>Welcome to React!!!</p>
//         {studentElements}
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     students: [
  //       { name: "Daisy", age: "4" },
  //       { name: "Cernan", age: "125" },
  //       { name: "Ashley", age: "31" },
  //     ],
  //   };
  // }

  // property initializer
  state = {
    currentUser: { username: "cernanb" },
    students: [
      { name: "Daisy", age: "4" },
      { name: "Cernan", age: "125" },
      { name: "Ashley", age: "31" },
    ],
    subjects: ["React", "Vue", "Angular"],
    view: "students",
  };

  handleClick = () => {
    console.log("button was clicked");
    // When the button is clicked and this method fires, we want to update the state of the subject to Vue
    this.setState(() => {
      return {
        subject: "Vue",
      };
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("form was submitted");
  };

  changeView = (newView) => {
    this.setState({ view: newView });
  };

  render() {
    return (
      <div>
        <nav>
          <li
            onClick={() => this.changeView("students")}
            style={{ cursor: "pointer" }}
          >
            Student List
          </li>
          <li
            onClick={() => this.changeView("subjects")}
            style={{ cursor: "pointer" }}
          >
            Subject List
          </li>
          <li
            onClick={() => this.changeView("settings")}
            style={{ cursor: "pointer" }}
          >
            Settings
          </li>
        </nav>
        {this.state.view === "students" && (
          <BadgeList students={this.state.students} />
        )}
        {this.state.view === "subjects" && (
          <SubjectList subjects={this.state.subjects} />
        )}
        {this.state.view === "settings" && (
          <Settings user={this.state.currentUser} />
        )}
      </div>
    );
  }
}

export default App;
