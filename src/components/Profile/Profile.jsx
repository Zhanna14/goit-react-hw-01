import css from "./Profile.module.css"

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div>
        <img className={css.img} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.description}>{tag}</p>
        <p className={css.description}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listItem}>
          <span className={css.itemName}>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.itemName}>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.itemName}>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
