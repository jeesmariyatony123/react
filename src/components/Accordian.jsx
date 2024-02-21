//single selection

import React, { useState } from 'react'

const Accordian = ({ items }) => {

    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleItem = index => {
        if (expandedIndex === index) {
            setExpandedIndex(null); // Collapse if already expanded
        } else {
            setExpandedIndex(index); // Expand the clicked item
        }
    }
    return (
        <div className="accordion">
            {items.map((item, index) => (
                <div key={index} className="accordion-item">
                    <div className={`accordion-title ${expandedIndex === index ? 'active' : ''}`}
                        onClick={() => toggleItem(index)}>
                        {item.title}
                    </div>
                    {expandedIndex === index && (
                        <div className="accordion-content">
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}


export default Accordian