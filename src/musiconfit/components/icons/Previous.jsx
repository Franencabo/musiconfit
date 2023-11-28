import PropTypes from 'prop-types'

export const Previous = ({ className }) =>
    <svg className={className} role="img" height="30" width="30" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"
    >
        <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"
            stroke="currentColor"  // Agregado para el color del trazo
            strokeWidth="2" ></path>
    </svg>


Previous.propTypes = {
    className: PropTypes.string
}
