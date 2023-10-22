import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <div>
            No page found - please return
            <Link to="/">Return Home</Link>
        </div>
    );
};
