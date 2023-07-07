import { useEffect, useState } from "react";
import { getList } from "../../../../services/notes/api";
import { deleteById } from "../../../../services/notes/api";

import Item from "./components/Item";
import Swal from "sweetalert2";
import Loading from "../../../../components/Loading";
import "./index.css";
const List = (props) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const fetch = async () => {
      setLoading(true);
      const notesResponse = await getList(controller);
      if (notesResponse !== null) {
        setItems(notesResponse);
      }
      setLoading(false);
    };
    fetch();

    return () => controller.abort();
  }, []);

  const onDeleteClick = async (event, id) => {
    try {
      event.preventDefault();

      const controller = new AbortController();
      const response = await Swal.fire({
        title: "Are you sure?",
        text: "Do you want to delete this note?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, delete!",
        cancelButtonText: "Cancel",
      });
      if (response.isConfirmed) {
        const deleted = await deleteById(controller, id);
        if (deleted) {
          setItems((currentItems) =>
            currentItems.filter((currentItem) => currentItem.id !== id)
          );
          Swal.fire({
            title: "Success",
            text: "Note has been deleted",
            icon: "success",
          });
        }
      } else {
      }
    } catch (error) {}
  };

  return (
    <div className="list">
      {loading ? (
        <Loading />
      ) : (
        <ul className="list__list">
          {items?.length > 0 ? (
            items.map((item) => {
              return (
                <Item key={item.id} item={item} onDeleteClick={onDeleteClick} />
              );
            })
          ) : (
            <p>Empty list</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default List;
