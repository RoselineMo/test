import {Link} from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div>
      <p>
        Page not found. Go back to home page <Link to="/">Here</Link>
      </p>
    </div>
  );
};
