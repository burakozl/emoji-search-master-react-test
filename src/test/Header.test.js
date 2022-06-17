import React, { Component } from 'react';
import {render, screen} from '@testing-library/react';
import Header from '../Header';
     
    test("Header render edilecek", () => {
        //Başlık kısmının başarılı bir şekilde render edildiğini kontrol edecek olan test kodunu yazın.
        render(<Header />);
        expect(screen.getByText("Emoji Search"));
    });


