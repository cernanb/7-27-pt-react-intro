import React from "react";

function Badge(props) {
  return (
    <>
      <div>Name: {props.student.name}</div>
      <div>Age: {props.student.age}</div>
    </>
  );
}

// class Badge extends React.Component {
//   render() {
//     return (
//       <div>
//         Name: {this.props.student.name} - Age: {this.props.student.age}
//       </div>
//     );
//   }
// }

export default Badge;
