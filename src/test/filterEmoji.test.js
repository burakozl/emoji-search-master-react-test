import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("Emoji list must be rendered while filtering", () => {
    //Bir filtreleme işlemi yapıldığında, emoji listesinin bu filtreye uygun şekilde yeniden render edildiğini kontrol edecek olan test kodunu yazın.
    render(<App />);
    const inputText = screen.getByText("Grinning");
    expect(inputText).toBeInTheDocument("Grinning");
});
