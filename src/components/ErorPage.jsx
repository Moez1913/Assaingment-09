
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const ErorPage = () => (
 <>
  <Helmet>
  <title>CareerGuidePro|ErrorPage</title>
</Helmet>
  <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
    
    <h1 className="text-4xl font-bold text-blue-700 mb-2">Oops! Page Not Found</h1>
    <p className="text-lg text-gray-600 mb-6">
      The page you are looking for doesn't exist or an error occurred.
    </p>
    <Link to="/" className="btn btn-primary">
      Go Home
    </Link>
  </div>
  </>
);

export default ErorPage;