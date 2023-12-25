import React from 'react'
import Button from './Button';

const ButtonList = () => {
  const btnList = [
    "All",
    "Live",
    "Music",
    "Cricket",
    "Mantra",
    "C++",
    "HTML",
    "Gaming",
    "Javascript",
    "Melodies",
    "Cooking",
    "Lo-fi",
  ];
  return (
    <div className="flex">
      {btnList.map((btn, index) => (
        <Button name={btn} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;