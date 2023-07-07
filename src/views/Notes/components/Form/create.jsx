import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { create } from "../../../../services/notes/api";

import Swal from "sweetalert2";
import "./index.css";

const Create = () => {
  // const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [contents, setContents] = useState();

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const controller = new AbortController();
      const note = {
        title,
        contents,
      };
      const response = await create(controller, note);
      if (response !== null) {
        Swal.fire({
          title: "Success",
          text: "Note has been created.",
          icon: "success",
        });
        // navigate(`/detail/${response.id}`);
      } else {
        Swal.fire({
          title: "Error",
          text: "Error on creating note.",
          icon: "error",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error",
        text: "Unhandled error occurred.",
        icon: "error",
      });
    }
  };

  return (
    <div>
      <h1>Create a new note</h1>
      <div className="myseparator"></div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            required
            className="myinput"
            type="text"
            placeholder="Title"
            defaultValue={title}
            onChange={(event) => setTitle(event.currentTarget.value)}
          ></input>
          <textarea
            className="myinput"
            rows={5}
            placeholder="Description"
            defaultValue={contents}
            onChange={(event) => setContents(event.currentTarget.value)}
          ></textarea>

          <button className="mybutton" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
