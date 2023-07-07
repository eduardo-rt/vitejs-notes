import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Notes from "../index";

describe("Notes view test", () => {
  test("should be able to render view", () => {
    render(<Notes />);

    expect(screen.getByText("Personal Notes"));
  });
});
