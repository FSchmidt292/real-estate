import aspects from '../Maps';
import React from 'react';
function Nav() {
    return (
        <section>
            <nav>
            <h2> return
                <a href="/">
                </a>
            </h2>
                <ul className="flex-row">
                    <li class-name="horizontal-item">
                        {aspects.map((aspect) => (
                        <li
                        className="horizontal-item"
                        key={aspects.name}
                        >
                        </li>
                        ) )
                        }
                    </li>
                </ul>
            </nav>
        </section>
    );
}
export default Nav;


