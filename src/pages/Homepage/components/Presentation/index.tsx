import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Header, Topbar } from './styles'
import { useInterval } from '../../../../utils/useInterval'

export const Presentation: React.FC = () => {
    
    const texts = [
        "Cansado de links longos?",
        "Precisa de links mais curtos para algum app?",
        "Você está no lugar certo!",
        "Encurte seus links com a gente."
    ]

    const [textIndex, setTextIndex] = useState(0);

    useInterval(() => {
        if (textIndex >= texts.length - 1) setTextIndex(0);
        else setTextIndex(textIndex + 1);
    }, 2200);

    return (
        <Header>
            <Topbar>
                <Link to="/documentation">Documentação</Link>
                <a href="https://github.com/emiliosanches/urlshortener-web">Open Source</a>
            </Topbar>
            <main>
                <h1>{texts[textIndex]}</h1>

                <Link to="/documentation">Aprenda mais sobre como funciona nosso encurtador &gt;&gt;</Link>
            </main>
        </Header>
    );
}