import { useRouteError, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/not-found.svg";
const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Ohh! page not found</h3>
          <p>We can&apos;t seem to find the page you are looking for</p>
          <Link to="/">back home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h3>Somthing went wrong</h3>
      <Link to="/">back home</Link>
    </Wrapper>
  );
};
export default Error;
