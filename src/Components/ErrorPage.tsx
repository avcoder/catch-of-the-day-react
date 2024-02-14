import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred</p>

      <p>{isRouteErrorResponse(error) ? error.statusText : "Uknown error"}</p>
      <img src="/404.svg" alt="404 error page" style={{ width: "404px" }} />
    </div>
  );
};

export default ErrorPage;
