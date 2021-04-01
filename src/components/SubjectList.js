import React from "react";

export default function SubjectList(props) {
  const subjectElements = props.subjects.map((subject, i) => (
    <p key={i}>{subject}</p>
  ));
  return <div>{subjectElements}</div>;
}

// class BadgeList extends React.Component {
//     render() {
//         const studentElements = this.props.students.map((student, i) => (
//             <Badge key={i} student={student} />
//           ));
//           return <div>{studentElements}</div>;
//     }
// }
