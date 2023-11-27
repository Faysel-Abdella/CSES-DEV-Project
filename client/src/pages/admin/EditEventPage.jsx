import FormRow from "../../components/FormRow.jsx";
import Wrapper from "../../assets/wrappers/DashboardFormPage.js";
import { useLoaderData } from "react-router-dom";
import { EVENT_TYPE } from "../../utils/constants.js";
import { Form, useNavigation, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../../utils/customFetch.js";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/admin/event/${params.id}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message, { autoClose: 3000 });
    return "/admin/dashboard";
  }
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // console.log(data);
  try {
    await customFetch.put(`/admin/event/${params.id}`, data);
    toast.success("Event updated successfully", { autoClose: 3000 });
    return redirect("/admin/dashboard/home/events");
  } catch (error) {
    toast.error(error?.response?.data?.message, { autoClose: 3000 });
    return error;
  }
};

const EditEventPage = () => {
  const { event } = useLoaderData();
  console.log(event);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="POST" className="form">
        <h4 className="form-title">edit job</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="title"
            labelText="Title"
            defaultValue={event[0].title}
          />
          <FormRow
            type="text"
            name="subTitle"
            labelText="Sub Title"
            defaultValue={event[0].subTitle}
          />
          <FormRow
            type="text"
            name="description"
            defaultValue={event[0].description}
            labelText="Description"
          />
          <FormRow
            type="text"
            name="place"
            defaultValue={event[0].place}
            labelText="Place"
          />
          <FormRow
            type="text"
            name="date"
            defaultValue={event[0].date}
            labelText="Date"
          />
          <FormRow
            type="text"
            name="time"
            defaultValue={event[0].time}
            labelText="time"
          />
          <div className="relative z-0 w-full mb-5 group">
            <select
              name="eventType"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
              defaultValue={event[0].eventType}
            >
              <option value="" disabled selected>
                Select an event type
              </option>
              <option value="Skill-sharing">Skill-sharing</option>
              <option value="Hackathon">Hackathon</option>
              <option value="Tutorial">Tutorial</option>
            </select>
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Event Type
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-block form-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </Form>
    </Wrapper>
  );
};
export default EditEventPage;
