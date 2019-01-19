import React from 'react';
import { NavLink } from 'react-router-dom';

// const Header = () => (
//     <header>
//         <h1>Expensify</h1>
//         <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
//         <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
//         <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
//         <NavLink to="/help" activeClassName="is-active">Help</NavLink>
//     </header>
// );
const Header = () => (
    <header className="container">
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div class="container">

                <div>
                    <div>
                        <NavLink to="/" activeClassName="is-active" exact={true}>
                            Acceuil
                        </NavLink>
                        <NavLink >
                            A Propos
                        </NavLink>
                        <NavLink>
                            Contact
                        </NavLink>
                        <NavLink>
                            S'incrire
                        </NavLink>
                        <NavLink>
                            Se connecter
                        </NavLink>
                    </div>
                </div>

            </div>
        </nav>
    </header>
    );

export default Header;