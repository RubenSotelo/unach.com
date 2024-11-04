import PropTypes from 'prop-types';

export default User.PropTypes = {
    id_usuario: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
};
