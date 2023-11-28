import PropTypes from "prop-types";

export const Next = ({ className }) => (
  <svg
    className={className}
    role="img"
    height="30"
    width="30"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"
      stroke="currentColor"  // Agregado para el color del trazo
      strokeWidth="2" ></path>
  </svg >
);

Next.propTypes = {
  className: PropTypes.string,
};
