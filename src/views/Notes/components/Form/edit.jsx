import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getById, updateById } from "../../../../services/notes/api";

import Loading from "../../../../components/Loading";
import Swal from "sweetalert2";
import "./index.css";

const Edit = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [note, setNote] = useState({});

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const controller = new AbortController();
      const body = { ...note };
      const response = await updateById(controller, body.id, body);

      if (response !== null) {
        setNote(response);
        Swal.fire({
          title: "Success",
          text: "Note has been updated",
          icon: "success",
        });
        navigate(`/detail/${response.id}`);
      } else {
        Swal.fire({
          title: "Error",
          text: "Error on updating note.",
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

  useEffect(() => {
    const controller = new AbortController();
    async function fetch() {
      const response = await getById(controller, id);
      if (response !== null) {
        setNote(response);
      }
      setLoading(false);
    }
    fetch();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h1>Edit a Note</h1>
      <div className="myseparator"></div>
      {loading ? (
        <Loading />
      ) : (
        <form onSubmit={onSubmit}>
          <div>
            <input
              className="myinput"
              required
              type="text"
              placeholder="Title"
              defaultValue={note.title}
              onChange={(event) =>
                setNote({ ...note, title: event.currentTarget.value })
              }
            ></input>
            <textarea
              className="myinput"
              rows={5}
              placeholder="Description"
              defaultValue={note.contents}
              onChange={(event) =>
                setNote({ ...note, contents: event.currentTarget.value })
              }
            ></textarea>

            <button className="mybutton" type="submit">
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Edit;
