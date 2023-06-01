import { React, useState } from 'react';

const Question = ({question}) => {
    const [isOpen, setOpen] = useState(false);

  return (
    <div>
        <div className={isOpen ? 'open' : 'closed'} >
            <h4>{question.title}</h4>
            <button onClick={() => setOpen(!isOpen)}>{isOpen ? '-' : '+'}</button>
        </div>
        {isOpen && <p>{question.info}</p>}
    </div>
  )
}

export default Question