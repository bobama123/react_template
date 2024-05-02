import { render, screen } from "@testing-library/react";
import Recipe from "../src/components/Recipe";

test("renders with the correct title ", () => {
    render(<Recipe title="Finnish cinnamon buns"/>);
    expect(screen.getByRole("heading")).toHaveTextContent("Finnish cinnamon buns");
});


test("renders with the correct type ", () => {
    render(<Recipe type="dessert"/>);
    expect(screen.getByText("dessert")).toBeInTheDocument();
});


test("renders with the correct duration", () => {
    render(<Recipe duration={60}/>);
    expect(screen.getByText(60)).toBeInTheDocument();
});