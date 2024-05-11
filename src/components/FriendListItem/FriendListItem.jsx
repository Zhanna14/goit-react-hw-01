import clsx from "clsx";
import css from "./FriendListItem.module.css";



export default function friendListItem({ friend: { avatar, name, isOnline } }) {
    const statusClass = clsx(
      isOnline ? css.active : css.retired
    );
  return (
    <div className={css.card}>
      <img className={css.img} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={statusClass}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
