import React from 'react';
import Link from "next/link";
import {FaBoxes, FaHome} from 'react-icons/fa'

const Navigation = (props) => {
    const activeUrl = window.location.pathname.split('/')
    return (
        <div className='navigation'>
            <ul>

                <Link href='/'>

                    <li className={`${activeUrl[1] !== 'products' && 'active'}`}>
                        <FaHome/>  Main Page
                    </li>
                </Link>
                <Link href='/products'>


                    <li className={`${activeUrl[1] === 'products' && 'active'}`}>
                    <FaBoxes/>    Products
                    </li>
                </Link>
            </ul>
        </div>
    );
};

export default Navigation;
