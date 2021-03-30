import React from 'react';
import Link from "next/link";
import {FaBoxes, FaHome} from 'react-icons/fa'

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>

                <Link href='/'>

                    <li>
                        <FaHome/>  Main Page
                    </li>
                </Link>
                <Link href='/products'>


                    <li>
                    <FaBoxes/>    Products
                    </li>
                </Link>
            </ul>
        </div>
    );
};

export default Navigation;
