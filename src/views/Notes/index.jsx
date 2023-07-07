// import React from "react";
// export default class Notes extends React.Component {
//   render() {
//     return <div></div>;
//   }
// }

import List from "./components/List";

const Notes = () => {
  return (
    <div className="view">
      <h1 className="view__header">Personal Notes</h1>
      <div className="myseparator"></div>
      <List />
    </div>
  );
};

export default Notes;
