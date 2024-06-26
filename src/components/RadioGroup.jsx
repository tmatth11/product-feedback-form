import React from 'react';

const RadioGroup = ({ name, label, options, value, onChange, required = false, showStars = false }) => (
    <div className="mb-3">
        <label className="form-label fw-bold">{label}</label>
        <div>
            {options.map(option => (
                <div className="form-check" key={option.value}>
                    <input className="form-check-input" role='button' type="radio" name={name} id={`${name}-${option.value}`} value={option.value} checked={value === option.value} onChange={onChange} required={required} />
                    <label className="form-check-label" role="button" htmlFor={`${name}-${option.value}`}>
                        {showStars && <i className={`bi bi-star${value >= option.value ? '-fill' : ''} text-warning`}></i>} {option.label}
                    </label>
                </div>
            ))}
        </div>
    </div>
);

export default RadioGroup;