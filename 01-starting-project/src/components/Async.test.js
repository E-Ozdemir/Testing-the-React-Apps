import { render, screen } from "@testing-library/react";
import Async from "./Async";
describe("Async Component", () => {
  test("renders posts if request succeeds", async () => {
    // Mock data. Simulating dummy api............
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    //..................
    render(<Async />);
    //Act

    const listItemElement = await screen.findAllByRole("listitem");
    expect(listItemElement).not.toHaveLength(0);
  });
});
