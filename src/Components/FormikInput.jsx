import React from 'react';
import PropTypes from 'prop-types';

const FormikInput = (props) => {
    return (
        <StyledFormikInput type={props.type} name={props.name} placeholder={props.placeholder}
                           value={props.value} onChange={props.onChangeProps ? props.onChangeProps : null}>
        </StyledFormikInput>
    )
};

FormikInput.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    onChangeProps: PropTypes.func,
};

export default FormikInput;