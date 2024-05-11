import { Profile } from "./Profile";
import userData from "../userData.json";

export default function App () {
  return (
    <>
      <ul>
        {userData.map((user) => (
          <li>
                <Profile user={user} />
          </li>
        ))}
      </ul>
    </>
  );
}
