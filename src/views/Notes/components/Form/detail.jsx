import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getById, updateById } from "../../../../services/notes/api";
import Loading from "../../../../components/Loading";

const Detail = (props) => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [note, setNote] = useState({});

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

  return loading ? (
    <Loading />
  ) : (
    <div>
      <h1>Note: {note.title}</h1>
      <div className="myseparator"></div>
      <h2>Details</h2>
      <h3>{note.contents}</h3>
    </div>
  );
};

export default Detail;
