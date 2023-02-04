import React, { useState } from "react";
import "./Sidebar.css";

const Accordian = ({ sections, onSectionClick }) => {
  const [expanded, setExpanded] = useState([]);

  const toggleExpand = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <div className="accordion">
      {sections.map((section, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header" onClick={() => toggleExpand(index)}>
            <h2 className="mb-0">
              <button className="btn btn-link">{section.title}</button>
              <span>
              
                <p className="p1a">1/1</p>
              </span>
              <i
                className={`fas fa-angle-down ${
                  expanded[index] ? "expanded" : ""
                }`}
              />
            </h2>
          </div>
          <div
            className={`accordion-body contentdiv ${
              expanded[index] ? "show" : ""
            }`}
            onClick={() => onSectionClick(section.video_link)}
          >
            <div className="content">
              <input type="checkbox" className="checkbox" />
              <p>{section.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
