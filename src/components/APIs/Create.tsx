import React from 'react';

import "../../styles/Create.css"

function Create() {
    return (
        <div className="main-div">
            <div className="first-row">
                <div className="first-row-methods">
                    <select className="first-row-input-select" id="cars" name="cars">
                        <option value="get">GET</option>
                        <option value="post">POST</option>
                        <option value="put">PUT</option>
                        <option value="delete">DELETE</option>
                    </select>
                </div>
                <div className="first-row-input">
                    <input className="first-row-input-box" type="text" />
                </div>
                <div className="first-row-btn">
                    <button className="first-row-input-btn">
                        Create
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Create;