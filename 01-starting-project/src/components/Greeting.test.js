import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";
describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was not clicked", () => {
    //Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    //Assert
    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders Changed! you if the button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act: Davranis ekliyoruz!!!(BU testi butona basilmasi durumunda yap diye belirtiyoruz.)
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.getByText("Changed!", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });
  test("does not render 'good to see you ' if the button clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act: Davranis ekliyoruz!!!(BU testi butona basilmasi durumunda yap diye belirtiyoruz.)
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    }); //if the elemen is not found , it returns null.(queryByText)
    expect(outputElement).toBeNull(); // element null ise test => pass!
  });
});
