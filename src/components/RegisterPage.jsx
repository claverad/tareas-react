
import { useState } from 'react';

const RegisterPage = () => {
    //Estado del formulario
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [confirmar, setConfirmar] = useState("");
    const [errorCampos, setCampos] = useState(false);
    const [errorContrasenas, setContrasenas] = useState(false);
    const [errorLargoContrasenas, setLargoContrasenas] = useState(false);
    const [mensajeExito, setMensajeExito] = useState(false);

    const validarFormulario = (e) => {
        e.preventDefault()


        if (email === "" || contrasena === "" || confirmar === "") {
            console.log("Todos los campos son obligatorios");
            setCampos(true)
            return;
        }
        //Eliminar mensaje de error
        setCampos(false)

        if (contrasena.length < 6 || confirmar.length < 6) {
            console.log("La contraseña debe tener al menos 6 caracteres");
            setLargoContrasenas(true)
            return;
        }
        //Eliminar mensaje de error
        setLargoContrasenas(false)

        if (contrasena !== confirmar) {
            console.log("Las contraseñas no coinciden");
            setContrasenas(true)
            return;
        }
        //Eliminar mensaje de error
        setContrasenas(false)

        // Mostrar mensaje de éxito
        setMensajeExito(true);

        // Limpiar el formulario
        setEmail("");
        setContrasena("");
        setConfirmar("");

        // Ocultar mensaje de éxito después de 3 segundos
        setTimeout(() => {
            setMensajeExito(false);
        }, 3000);
    }

    return (
        <>
            <form className="formulario" onSubmit={validarFormulario}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input
                        type="password"
                        name="contraseña"
                        className="form-control"
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Confirmar contraseña</label>
                    <input
                        type="password"
                        name="contraseña"
                        className="form-control"
                        value={confirmar}
                        onChange={(e) => setConfirmar(e.target.value)}
                    />
                </div>
                {errorCampos ? <p className="error">Todos los campos son obligatorios</p> : null}
                {errorContrasenas ? <p className="error">Las contraseñas no coinciden</p> : null}
                {errorLargoContrasenas ? <p className="error">La contraseña debe tener al menos 6 caracteres</p> : null}
                {mensajeExito && <p className="success">¡Registro exitoso!</p>}
                <button type="submit" className="btn btn-primary">Enviar</button>

            </form>
        </>
    )
}

export default RegisterPage