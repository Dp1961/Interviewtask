import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import { Link } from 'react-router-dom';

const Fieldconnect = () => {
    const [draggingLines, setDraggingLines] = useState([]);
    const [isDragging, setIsDragging] = useState(false);

    const handleDragStart = (e) => {
        setIsDragging(true);
        const startX = e.target.offsetLeft + e.target.offsetWidth;
        const startY = e.target.offsetTop + e.target.offsetHeight / 2;
        const newLine = { startX, startY, endX: startX, endY: startY };
        setDraggingLines([...draggingLines, newLine]);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    const handleDrag = (e) => {
        if (isDragging) {
            const updatedLines = draggingLines.map(line => {
                if (line.endX !== e.clientX || line.endY !== e.clientY) {
                    return { ...line, endX: e.clientX, endY: e.clientY };
                }
                return line;
            });
            setDraggingLines(updatedLines);
        }
    };

    return (
        <div className="container" onMouseMove={handleDrag} onMouseUp={handleDragEnd}>
            <div className="row">
                <div className="menu">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Text Editor</Link>
                            </li>
                            <li>
                                <Link to="/pdf">PDF Preview</Link>
                            </li>
                            <li>
                                <Link to="/fieldlinker">Field Linker</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="field-container">
                        <h2>Field Linker</h2>
                        <div className="row justify-content-center pt-4">
                            <div
                                className="col-2"
                                onMouseDown={handleDragStart}
                                style={{ position: 'relative' }}
                            >
                                <ul className="set1">
                                    <li>FirstName</li>
                                    <li>LastName</li>
                                    <li>Phone</li>
                                    <li>Email</li>
                                    <li>Address</li>
                                    <li>Job Title</li>
                                </ul>
                            </div>
                            <div className="col-2" style={{ position: 'relative' }}>
                                <ul className="set2">
                                    <li>FirstName</li>
                                    <li>LastName</li>
                                    <li>Phone</li>
                                    <li>Email</li>
                                    <li>Address</li>
                                    <li>Job Title</li>
                                </ul>
                            </div>
                            {draggingLines.map((line, index) => (
                                <svg key={index} style={{ position: 'absolute', top: 0, left: 0, zIndex: 999 }}>
                                    <line
                                        x1={line.startX}
                                        y1={line.startY}
                                        x2={line.endX}
                                        y2={line.endY}
                                        style={{ stroke: 'black', strokeWidth: 2 }}
                                    />
                                </svg>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fieldconnect;
