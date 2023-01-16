import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const s1 = {
    name: "ibad",
    class: "5B",
  };
  const [state, setState] = useState(s1);
  const update = () => {
    setTimeout(() => {
      setState({
        name: "ibad",
        class: "6B",
      });
    }, 1000);
  };
  return (
    <NoteContext.Provider value={{state, update}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
