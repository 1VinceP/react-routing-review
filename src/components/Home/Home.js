import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link to route between pages

export default function Home() {

    return (
        // This is the default page. It has two buttons, which link to the Store and Cart pages
        <div style={{width: '100%', minHeight: '100vh', background: 'cornflowerblue'}}>
            <h1>This is the home page!!</h1>
            <Link to='/store'><button>Store</button></Link>
            <Link to='/cart'><button>Cart</button></Link>
        </div>
    )
}