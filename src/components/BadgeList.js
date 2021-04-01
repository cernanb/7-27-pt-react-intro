import React from "react";
import Badge from "./Badge";

export default function BadgeList(props) {
  const studentElements = props.students.map((student, i) => (
    <Badge key={i} student={student} />
  ));
  return <div>{studentElements}</div>;
}

// class BadgeList extends React.Component {
//     render() {
//         const studentElements = this.props.students.map((student, i) => (
//             <Badge key={i} student={student} />
//           ));
//           return <div>{studentElements}</div>;
//     }
// }
