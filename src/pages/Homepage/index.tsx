import React, { useState } from 'react';
import { FaRegCopy } from 'react-icons/fa';
import { writeText } from 'clipboard-polyfill';

import { Presentation } from './components/Presentation';
import { AppContainer, InputSection, OutputSection } from './styles';
import { api } from '../../services/api';

export const Home: React.FC = () => {

    const [isDone, setIsDone] = useState(false);
    const [originalUrl, setOriginalUrl] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');

    function handleSubmit(evt: React.FormEvent) {
        evt.preventDefault();

        api.post('/create', {
            to: originalUrl
        }).then(response => {
            setShortenedUrl(response.data.newUrl)
            setIsDone(true);
        }).catch(err => {
            console.log(err)
            alert("Ocorreu um erro!");
        });
    }

    function handleChangeOriginalUrl(evt: React.ChangeEvent<HTMLInputElement>) {
        setOriginalUrl(evt.target.value);
    }

    async function handleCopy() {
        await writeText(shortenedUrl);
        alert("URL copiada para a área de transferência!")
    }

    return (
        <>
            <Presentation />
            
            <AppContainer>
                <InputSection>
                    <input
                        type="text"
                        placeholder="Digite sua URL aqui"
                        value={originalUrl}
                        onChange={handleChangeOriginalUrl}
                    />
                    <button type="submit" onClick={handleSubmit}>Encurte!</button>
                </InputSection>

                {
                    isDone && (
                        <OutputSection>
                            <h2>Sua url é:</h2>
                            <div>
                                <input
                                    type="text"
                                    id="result"
                                    value={shortenedUrl}
                                    readOnly
                                />
                                <button
                                    type="submit"
                                    onClick={handleCopy}
                                >
                                    <FaRegCopy color="#060606" />
                                </button>
                            </div>
                        </OutputSection>
                    )
                }
            </AppContainer>
        </>
    )
}