import React from 'react';

const FileUpload = ({ id, label, onChange }) => (
    <div className="mb-3">
        <label htmlFor={id} className="form-label fw-bold">{label}</label>
        <input className="form-control" type="file" id={id} onChange={onChange} />
    </div>
);

export default FileUpload;
