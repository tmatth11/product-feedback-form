import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState } from 'react';
import TextInput from './TextInput';
import PhoneNumberInput from './PhoneNumberInput';
import RadioGroup from './RadioGroup';
import SelectInput from "./SelectInput";
import Textarea from './Textarea';
import FileUpload from "./FileUpload";

const ProductFeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        productName: '',
        dateOfPurchase: '',
        rating: '',
        feedbackType: 'General Feedback',
        comments: '',
        recommend: '',
        file: null,
    });

    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            file: e.target.files[0],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
        setShowAlert(true);
        window.scrollTo(0, 0);
        setTimeout(() => setShowAlert(false), 3000);

        // Reset form fields
        setFormData({
            name: '',
            email: '',
            phone: '',
            productName: '',
            dateOfPurchase: '',
            rating: '',
            feedbackType: 'General Feedback',
            comments: '',
            recommend: '',
            file: null,
        });
    };

    return (
        <div className='bg-light container rounded-2 mt-3 p-2 d-flex flex-column'>
            <h1 className='mt-2 text-center'>Product Feedback Form</h1>
            <p className='text-center'>Please fill out the form fields below involving your experience with your purchased product.</p>

            {/* Form Submission Alert */}
            {showAlert && (
                <div className="alert alert-success" role="alert">
                    Form submitted!
                </div>
            )}

            <form className='d-flex flex-column px-5' onSubmit={handleSubmit}>

                {/* Name */}
                <TextInput id="name" name="name" label="Name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />

                {/* Email */}
                <TextInput id="email" name="email" label="Email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />

                {/* Phone Number */}
                <PhoneNumberInput id="phone" name="phone" label="Phone Number" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} />

                {/* Product Name */}
                <TextInput id="productName" name="productName" label="Product Name" placeholder="Enter the product name" value={formData.productName} onChange={handleChange} required />

                {/* Date of Purchase */}
                <TextInput id="dateOfPurchase" name="dateOfPurchase" label="Date of Purchase" type="date" value={formData.dateOfPurchase} onChange={handleChange} required />

                {/* Product Rating */}
                <RadioGroup
                    name="rating"
                    label="Product Rating"
                    options={[
                        { label: '1 Star', value: '1' },
                        { label: '2 Stars', value: '2' },
                        { label: '3 Stars', value: '3' },
                        { label: '4 Stars', value: '4' },
                        { label: '5 Stars', value: '5' },
                    ]}
                    value={formData.rating}
                    onChange={handleChange}
                    required
                    showStars={true}
                />

                {/* Feedback Type */}
                <SelectInput
                    id="feedbackType"
                    label="Feedback Type"
                    options={[
                        { label: 'Delivery', value: 'Delivery' },
                        { label: 'Feature Request', value: 'Feature Request' },
                        { label: 'General Feedback', value: 'General Feedback' },
                        { label: 'Other', value: 'Other' },
                    ]}
                    value={formData.feedbackType}
                    onChange={handleChange}
                    required
                />

                {/* Comments */}
                <Textarea id="comments" label="Comments" placeholder="Enter your comments" value={formData.comments} onChange={handleChange} required />

                {/* Product Recommendation */}
                <RadioGroup
                    name="recommend"
                    label="Would you recommend this product?"
                    options={[
                        { label: 'Yes', value: 'Yes' },
                        { label: 'No', value: 'No' },
                    ]}
                    value={formData.recommend}
                    onChange={handleChange}
                    required
                />

                {/* File Upload */}
                <FileUpload id="file" label="Upload Image of Product" onChange={handleFileChange} />

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary mb-3 mx-auto">Submit</button>

            </form>
        </div>
    );
};

export default ProductFeedbackForm;
