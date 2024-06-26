import React from 'react';

const Textarea = ({ id, label, rows = 4, placeholder, value, onChange, required = false }) => (
    <div className="mb-3">
        <label htmlFor={id} className="form-label fw-bold">{label}</label>
        <textarea
            name="comments"
            className="form-control"
            id={id}
            rows={rows}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
        ></textarea>
    </div>
);

export default Textarea;
