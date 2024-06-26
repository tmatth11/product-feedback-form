import React from 'react';

const TextInput = ({ id, name, label, type = 'text', placeholder, value, onChange, required = true }) => {
    return (
        <div className='mb-3'>
            <label htmlFor={id} className="form-label fw-bold">{label}</label>
            {/* <div className="col col-9 col-md-5 col-lg-3"> */}
                <input type={type} className="form-control" id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} required={required} />
            {/* </div> */}
        </div>
    );
};

export default TextInput;
