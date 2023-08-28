import { SearchField } from "./search/SearchField";
import { UserIcon } from "./user-icon/UserIcon";
import { MdAssignmentAdd } from "react-icons/md";
import styles from "./HeaderStyles.module.css";
import { useContext } from "react";
import { HeaderContext } from "../../context/HeaderContext";
import { AuthContext } from "../../context/AuthContext";
export const Header = () => {
  const { headerTitle } = useContext(HeaderContext);
  const { isAuthenticated } = useContext(AuthContext);
  if (!isAuthenticated) return <></>;
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerFirstSection}>
        <div className={styles.headerLogoContainer}>
          <img src="/images/logo.png" className={styles.headerLogo}></img>
        </div>
        <MdAssignmentAdd className={styles.headerIcon} />
        <h2 className={styles.headerTitle}>CRUD / {headerTitle} </h2>
      </div>
      <div className={styles.extraHeaderTools}>
        <SearchField />
        <UserIcon />
      </div>
    </header>
  );
};
