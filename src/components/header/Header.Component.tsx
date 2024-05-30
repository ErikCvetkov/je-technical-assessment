import React from 'react';

const Header: React.FC<{ text: string }> = ({ text }) => {
    return (
        <header className='p-6 text-3xl font-bold container mx-auto'>{text}</header>
    )
}

export default Header;