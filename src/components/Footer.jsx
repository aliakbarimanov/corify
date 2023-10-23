// import icons
import {
  FaTwitter,
  FaFacebookF,
  FaRss,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

// import Context
import { useContext } from "react";
import { Context } from "../utils/ModeContext";

// import i18n hook
import { useTranslation } from "react-i18next";

const Footer = () => {

  const {changeMode} = useContext(Context);

  const {i18n, t} = useTranslation();

  const changeLng = (e) => {
    let choosedLng = e.target.value;
    i18n.changeLanguage(choosedLng);
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <p className="copyright">
            {t("footer.allRightsReserved")} <span>Tarlan Alijanov</span> ©{" "}
            {new Date().getFullYear()}
          </p>
          <ul className="socialList">
            <li className="socialItem">{t("footer.followUs")}</li>
            <li className="socialItem">
              <FaTwitter />
            </li>
            <li className="socialItem">
              <FaFacebookF />
            </li>
            <li className="socialItem">
              <FaRss />
            </li>
            <li className="socialItem">
              <FaInstagram />
            </li>
            <li className="socialItem">
              <FaYoutube />
            </li>
          </ul>
          <div className="inps">
            <select name="language" className="language" onChange={changeLng} value={i18n.language}>
              <option value="">Choose language..</option>
              <option value="en">English</option>
              <option value="az">Azərbaycanca</option>
              <option value="ru">Русский</option>
            </select>
            <label className="switch">
              <input type="checkbox" onChange={changeMode}/>
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
