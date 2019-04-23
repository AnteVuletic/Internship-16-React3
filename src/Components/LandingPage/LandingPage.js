import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default _ =>
<div className="navigation">
    <Link to="/dogs">Dogs</Link>
    <Link to="/cats">Cats</Link>
</div>