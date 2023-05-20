//hooks
import { useState } from 'react';

//styles
import './ColorGenerator.css'


export default function ColorGenerator() {
    const [color, setColor]= useState("");

    const generateColor = () => {
        const randomColor = '#${Math.floor(Math.random() * 16777215).toString(16)}';
        setColor(randomColor);
        console.log(color);
    }

return (
    <div 
        className='generator'
        onClick={generateColor}
    >
    </div>
)
}
