import React from "react";

export default function Settings(props) {
  return (
    <div>
      <h1>Change your settings</h1>
      <p>Username: {props.user.username}</p>
    </div>
  );
}
