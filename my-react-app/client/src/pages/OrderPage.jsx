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
            <h1 className="site-header">
                <nav>
                    <Link to="/" className="logo">MyStore</Link>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/order" className="active">Orders</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                    </ul>
                </nav>
            </h1>

            <main className="order-container">
                {/* …rest of your JSX… */}
            </main>

            <footer className="site-footer">
                <p>© 2025 MyStore. All rights reserved.</p>
            </footer>
        </div>

    );
};

export default OrderPage;