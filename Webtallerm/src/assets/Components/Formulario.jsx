const Formulario = () => {
    return (
        <div className="col-md-8 mt-2">
            <div className="card">
                <div className="card-header">Formulario</div>
                <div className="card-body">
                    <form action="">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Num. Ine</span>
                            <input type="number" className="form-control" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Nombre</span>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Apellido Paterno</span>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Teléfono</span>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Correo</span>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="d-grid">
                            <button className="btn btn-success my-2" type="submit">Enviar</button>
                            <button className="btn btn-secondary" type="reset">Reestablecer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Formulario;
