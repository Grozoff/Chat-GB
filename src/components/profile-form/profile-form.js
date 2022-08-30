import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../store/profile";

export const ProfileForm = ({ firstName, lastName, email }) => {
  const [form, setForm] = useState({ firstName, lastName, email });

  const handleChangeForm = (e) => {
    const field = e.target.getAttribute("data-name");

    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Profile form</h1>

      <div>
        <input
          value={form.firstName}
          placeholder="firstName"
          data-name="firstName"
          onChange={handleChangeForm}
        />
        <input
          value={form.lastName}
          placeholder="lastName"
          data-name="lastName"
          onChange={handleChangeForm}
        />
        <input
          value={form.email}
          placeholder="email"
          data-name="email"
          onChange={handleChangeForm}
        />

        <button onClick={() => dispatch(updateProfile(form))}>Save</button>
      </div>
    </div>
  );
};
