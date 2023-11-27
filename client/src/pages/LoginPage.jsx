import {
  Link,
  Form,
  useNavigation,
  redirect,
  useActionData,
} from "react-router-dom";
import { toast } from "react-toastify";

import Wrapper from "../assets/wrappers/LoginPage.js";
import FormRow from "../components/FormRow.jsx";
import customFetch from "../utils/customFetch.js";
import Logo from "../components/Logo.jsx";
console.log("login page");

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const errors = { message: "" };

  if (data.password.length < 3) {
    errors.message = "password too short";
    return errors;
  }

  try {
    const response = await customFetch.post("/auth/login", data, {
      withCredentials: true,
    });
    console.log(response);
    toast.success("Login success", { autoClose: 3000 });
    if (response.data.isAdmin) {
      return redirect("/admin/dashboard/home");
    } else {
      return redirect("/member/dashboard/home");
    }
  } catch (error) {
    // toast.error(error?.response?.data?.message);
    error.message = error?.response?.data?.message;
    return error;
  }
};

const LogIn = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  // using the data returned from the action
  const errors = useActionData();
  //If the the action did not return any value this will be undefined
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        {errors?.message && <p style={{ color: "red" }}>{errors.message}</p>}
        <p></p>
        <h4>Login</h4>
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "submitting" : "submit"}
        </button>
      </Form>

      <p>
        Not a member yet?
        <Link to="/register" className="member-btn">
          Register
        </Link>
      </p>
    </Wrapper>
  );
};
export default LogIn;
