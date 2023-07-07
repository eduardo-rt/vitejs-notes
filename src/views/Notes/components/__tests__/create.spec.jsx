import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { getList } from "../../../../services/notes/api";
import Create from "../Form/create";

describe("Notes create component note", () => {
  test("should be able to create a note", async () => {
    const { getByPlaceholderText, getByText } = render(<Create />);
    const titleInput = getByPlaceholderText(/title/i);
    const contentsInput = getByPlaceholderText(/title/i);

    const note = {
      title: "Automated test",
      contents: "Automated test contents",
    };

    fireEvent.change(titleInput, { target: { value: note.title } });
    fireEvent.change(contentsInput, {
      target: { value: note.contents },
    });
    fireEvent.click(getByText(/Save/i));

    const response = await getList();
    const filterCreated = response.some(
      (responseNote) => responseNote.title === note.title
    );

    expect(filterCreated).toBeTruthy();
  });
});
