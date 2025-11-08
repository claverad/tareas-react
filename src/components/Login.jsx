
import { useState } from 'react';

const Login = () => {

    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [errorCampos, setCampos] = useState(false);
    const [errorLargoContrasenas, setLargoContrasenas] = useState(false);
    const [mensaje, setMensaje] = useState(false);

    const validarFormulario = (e) => {
        e.preventDefault()
        console.log("Email:", email);
        console.log("Contraseña:", contrasena);

        if (email === "" || contrasena === "") {
            console.log("Todos los campos son obligatorios");
            setCampos(true)
            return;
        }
        //Eliminar mensaje de error
        setCampos(false)

        if (contrasena.length < 6) {
            console.log("La contraseña debe tener al menos 6 caracteres");
            setLargoContrasenas(true)
            return;
        }
        //Eliminar mensaje de error
        setLargoContrasenas(false)

        if (email === "correo@pruebas.cl" && contrasena === "123456") {
            alert("¡Inicio de sesión exitoso!");
            setMensaje(true);
        } else {
            alert("Correo o contraseña incorrecta");
            setMensaje(false);
        }
        // Limpiar el formulario
        setEmail("");
        setContrasena("");
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
                {errorCampos ? <p className="error">Todos los campos son obligatorios</p> : null}
                {errorLargoContrasenas ? <p className="error">La contraseña debe tener al menos 6 caracteres</p> : null}
                <button type="submit" className="btn btn-primary">Enviar</button>

            </form>
        </>
    )
}

export default Login