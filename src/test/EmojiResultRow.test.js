import React, { Component } from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App', () => {
    let items;
    beforeEach(() => {
        render(<App />);
        items = screen.getAllByText("Click to copy emoji");
    });
    test("Emoji listesi render edilecek", () => {
        //Uygulama ilk açıldığında emoji listesinin başarılı bir şekilde render edildiğini kontrol edecek olan test kodunu yazın.
            expect(items.length).toBe(20);
    });
    //Liste üzerinden herhangi emojiye tıklandığında, ilgili emojinin kopyalandığını kontrol edecek olan test kodunu yazın.
    test("Emoji kopyalanır", () => {
        const item = screen.getByText("Click to copy emoji");
        item.click();
        expect(item).toHaveAttribute("data-clipboard-text", "Click to copy emoji");
    });
    
});

 