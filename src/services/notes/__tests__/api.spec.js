import { describe, expect, test } from "vitest";
import { create, getList } from "../api";

describe("Notes API tests", async () => {
  test("should return an object", async () => {
    const response = await getList();
    // console.log(response);
    expect(response).toBeTypeOf("object");
  });

  test("should create an object", async () => {
    const response = await create(new AbortController(), {
      title: "Automated Test",
      contents: "Automated Test Contents",
    });

    // console.log(response);
    expect(response).toHaveProperty("title");
  });
});
