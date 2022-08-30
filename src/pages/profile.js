import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/counter";
import { ProfileForm } from "../components";
import { toggleVisibleProfile } from "../store/profile";

export const ProfilePage = () => {
  const data = useSelector((state) => state.counter.count);
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  return (
    <div>
      profile page
      <div>
        <h1>Counter</h1>
        <h1>{data}</h1>

        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <hr />
      </div>
      <div>
        {profile.isVisibleProfile && (
          <>
            <h3>firstName: {profile.firstName}</h3>
            <h3>lastName: {profile.lastName}</h3>
            <h3>email: {profile.email}</h3>
          </>
        )}
        <button onClick={() => dispatch(toggleVisibleProfile())}>toggle</button>
        <hr />

        <ProfileForm {...profile} />
        <hr />
      </div>
    </div>
  );
};
