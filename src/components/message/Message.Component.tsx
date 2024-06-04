import React from 'react';

const Message: React.FC<{ text: string }> = ({ text }) => {
    return (
        <span>{text}</span>
    )
}

export default Message;