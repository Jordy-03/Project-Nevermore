import {Link} from 'react-router-dom';

function HomePage() {

    return ( 
    <div> 
        <h1>Welcome to the Home Page</h1>
        <p>To place an order, please refer to the 
            following <Link to="/order">Link</Link>.
        </p>
        <p />
        <p>
            To create a booking, please use the following
            <Link to="/booking">link</Link> to book
        </p>
    </div>
    )
}
    


export default HomePage;