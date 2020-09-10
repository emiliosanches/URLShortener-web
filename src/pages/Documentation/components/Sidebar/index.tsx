import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { Sidebar, SidebarSection } from './styles'; 

export const SideBar: React.FC = () => {
    return (
        <Sidebar>
            <nav>
                <section>
                    <SidebarSection>
                        <h3>Informações</h3>
                        <ul>
                            <li>
                                <NavLink
                                    to="/info/about"
                                    activeClassName="active-section"
                                >
                                    Sobre
                            </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/info/contact"
                                    activeClassName="active-section"
                                >
                                    Contato
                            </NavLink>
                            </li>
                        </ul>
                    </SidebarSection>

                    <SidebarSection>
                        <h3>API</h3>
                        <ul>
                            <li>
                                <NavLink
                                    to="/api/introduction"
                                    activeClassName="active-section"
                                >
                                    Introdução
                            </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/api/how-to-use"
                                    activeClassName="active-section"
                                > 
                                    Como usar
                            </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/api/routes"
                                    activeClassName="active-section"
                                >
                                    Rotas
                            </NavLink>
                            </li>
                        </ul>
                    </SidebarSection>
                </section>

                <NavLink
                    to="/"
                    
                    id="doc-home-link"
                >
                    Voltar à página inicial
                </NavLink>
            </nav>
        </Sidebar>
    )
}