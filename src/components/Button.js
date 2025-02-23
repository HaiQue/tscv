import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

function Button({
  label,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  anchor = null,
}) {
  const handleClick = (event) => {
    if (anchor) {
      const section = document.getElementById(anchor);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      className={`btn btn-${variant}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired, // Text on the button
  onClick: PropTypes.func, // Function to call on click
  type: PropTypes.oneOf(["button", "submit", "reset"]), // Button type
  variant: PropTypes.oneOf(["primary", "secondary", "danger", "success"]), // Button style
  disabled: PropTypes.bool, // Whether the button is disabled
  anchor: PropTypes.string, // ID of the target section to scroll to
};

export default Button;
