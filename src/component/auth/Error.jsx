const Error = (props) => {
    return (
        <div role="alert">
            <strong>Error:</strong>
            {props.mensaje}
        </div>
    );
}

export default Error;