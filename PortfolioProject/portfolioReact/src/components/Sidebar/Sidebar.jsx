import { Link } from "react-router-dom";
import { FacebookIcon } from "../../../public/icons/FacebookIcon";
import { TwitterIcon } from "../../../public/icons/TwitterIcon";
import { InstIcon } from "../../../public/icons/InstIcon";
import { PhoneIcon } from "../../../public/icons/PhoneIcon";
import { EmailIcon } from "../../../public/icons/EmailIcon";
import { LocationIcon } from "../../../public/icons/LocationIcon";
import { BirthdayIcon } from "../../../public/icons/BirthdayIcon";
import { DownloadIcon } from "../../../public/icons/DownloadIcon";
import { InIcon } from "../../../public/icons/InIcon";
import { Button } from "../../ui/Button/Button";
import styles from "./Sidebar.module.scss";


export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2>Bostami hasan</h2>
      <p>Ui/Ux Designer</p>
      <ul className={styles.socialIcons}>
        <li>
          <Link to="/">
            <FacebookIcon />
          </Link>
        </li>
        <li>
          <Link to="/">
            <TwitterIcon />
          </Link>
        </li>
        <li>
          <Link to="/">
            <InstIcon />
          </Link>
        </li>
        <li>
          <Link to="/">
            <InIcon />
          </Link>
        </li>
      </ul>
      <div>
        <ul className={styles.singleContact}>
          <li>
            <Link to="/">
              <div className={styles.divSvg}>
              <PhoneIcon />
              </div>
              <div className={styles.nameValue}>
              <p>Phone</p>
              <p className={styles.detailValue}>+123 456 7890</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div className={styles.divSvg}>
              <EmailIcon />
              </div>
              <div className={styles.nameValue}>
              <p>Email</p>
              <p className={styles.detailValue}>example@mail.com</p>
              </div>
            </Link>
          </li>
          <li>
          <Link>
            <div className={styles.divSvg}>
            <LocationIcon />
            </div>
            <div className={styles.nameValue}>
              <p>Location</p>
              <p className={styles.detailValue}>Hong Kong China</p>
            </div>
            </Link>
          </li>
          <li>
          <Link>
            <div className={styles.divSvg}>
            <BirthdayIcon />
            </div>
            <div className={styles.nameValue}>
              <p>Birthday</p>
              <p className={styles.detailValue}>May 25, 2001</p>
            </div>
            </Link>
          </li>
        </ul>
      </div>
      <Button variant="Primary"><DownloadIcon />Download CV</Button>
    </div>
  );
};
