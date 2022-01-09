import PropTypes from "prop-types";
import sorryImage from "../../img/sorry.png";
import s from "./ErrorView.module.css";

function ErrorView({ texterror }) {
  return (
    <div className={s.wrapper}>
      <p text={texterror} className={s.text}>
        {texterror}
      </p>
      <img src={sorryImage} width="500" alt="error occurred img" />
    </div>
  );
}

ErrorView.propTypes = {
  texterror: PropTypes.string.isRequired,
};

export default ErrorView;
