import React, { useState } from 'react';

function OrderPage() {
    {/* Creating form data */ }
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
                <h1>Order Page</h1>
                <form>
                    <div>
                        <label>First Name: </label>
                    <   input type="text" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                    </div>                    
                    <div>
                        <label>Last Name: </label>
                        <input type="text" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input type="text" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                    <div>
                        <label>Phone: </label>
                        <input type="text" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                    </div>
                    <div>
                        <label>Address 1: </label>
                        <input type="text" value={formData.address1} onChange={(e) => setFormData({ ...formData, address1: e.target.value })} />
                    </div>
                    <div>
                        <label>Address 2: </label>
                        <input type="text" value={formData.address2} onChange={(e) => setFormData({ ...formData, address2: e.target.value })} />
                    </div>
                    <div>
                        <label>City: </label>
                        <input type="text" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
                    </div>
                    <div>
                        <label>State: </label>
                        <input type="text" value={formData.state} onChange={(e) => setFormData({ ...formData, state: e.target.value })} />
                    </div>
                    <div>
                        <label>Zip: </label>
                        <input type="text" value={formData.zip} onChange={(e) => setFormData({ ...formData, zip: e.target.value })} />
                    </div>
                    <div>
                        <label>Country: </label>
                        <input type="text" value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} />
                    </div>
                    <div>
                        <label>Description: </label>
                        <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                    </div>
                </form>
            </div>

    );
};

export default OrderPage;