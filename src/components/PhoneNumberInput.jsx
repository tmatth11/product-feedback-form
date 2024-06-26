import React from 'react';

const PhoneNumberInput = ({ id, name, label, placeholder, value, onChange, required = false }) => {
    return (
        <div className='mb-3'>
            <label htmlFor={id} className="form-label fw-bold">{label}</label>
            {/* <div className="col col-9 col-md-5 col-lg-3"> */}
                <input type="tel" className="form-control" id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} required={required} pattern="^\+?[0-9\s\-]{7,15}$" />
            {/* </div> */}
        </div>
    );
};

export default PhoneNumberInput;
