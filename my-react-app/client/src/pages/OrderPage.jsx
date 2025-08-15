import React, {useState} from 'react';

function OrderPage() {
    {/* Creating form data */} 
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        notes: '',
    });

    return (
    <div>
        <h1>ORDER PAGE</h1>
    </div>
  );
};

export default OrderPage;