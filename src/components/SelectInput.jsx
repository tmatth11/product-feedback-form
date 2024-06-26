import React from 'react';

const SelectInput = ({ id, label, options, value, onChange, required = false }) => (
    <div className="mb-3">
        <label htmlFor={id} className="form-label fw-bold">{label}</label>
        <select className="form-select" id={id} value={value} onChange={onChange} required={required}>
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    </div>
);

export default SelectInput;
