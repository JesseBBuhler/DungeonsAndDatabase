import React from 'react';
import {Link} from 'react-router-dom';

export default function NavMenu() {
    return <>
    <h1>Dungeons and Database!</h1>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Archive">Archive</Link></li>
            <li><Link to="/Campaigns">Champaigns</Link></li>
            <li><Link to="/CharacterCreator">Character Creator</Link></li>
            <li><Link to="/MonsterMaker">Monster Maker</Link></li>
        </ul>
    </nav>
    </>;
}