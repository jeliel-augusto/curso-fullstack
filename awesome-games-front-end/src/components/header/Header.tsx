import { SearchField } from "./search/SearchField";
import { UserIcon } from "./user-icon/UserIcon";
import { MdAssignmentAdd } from "react-icons/md";
import styles from "./HeaderStyles.module.css";
export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerFirstSection}>
        <div className={styles.headerLogoContainer}>
          <img src="/images/logo.png" className={styles.headerLogo}></img>
        </div>
        <MdAssignmentAdd className={styles.headerIcon} />
        <h2 className={styles.headerTitle}>CRUD / Games </h2>
      </div>
      <div className={styles.extraHeaderTools}>
        <SearchField />
        <UserIcon />
      </div>
    </header>
  );
};
