import  { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export function InstrumentListPage() {
    const [instruments, setInstruments] = useState([]);
    const [isFetchPending, setFetchPending] = useState(false);

    useEffect(() => {
        setFetchPending(true);
        fetch("https://kodbazis.hu/api/instruments", {credentials: "include"})
        .then((res) => res.json())
        .then((hangszerek) => setInstruments(hangszerek))
        .catch(console.log)
        .finally(() => {
            setFetchPending(false);
        });
    }, []);
    return(
        <div className="p-5 m-auto text-center content bg-ivory">
            {
                isFetchPending ? (<div className="spinner-border"></div>) : (
                    <div>
                        <h2>Hangszerek</h2>
                        {instruments.map((instrument) => (
                            <NavLink key={instrument.id} to={"/hangszer/" + instrument.id}>
                            <div className="card col-sm-3 d-inline-block m-1 p-2">
                                <h6 className="text-muted">{instrument.brand}</h6>
                                <h5 className="text-muted">{instrument.name}</h5>
                                <div>{instrument.price}.- HUF</div>
                                <div className="small">Készleten: {instrument.quantity} db</div>
                                <div className="card-body">
                                    <img className="img-fluid"
                                    style={{ maxHeight: 200 }}
                                    alt="hello world, ide kéne a képed!"
                                    src={instrument.imageURL ? instrument.imageURL : "https://via.placeholder.com/400x800"}
                                    />
                                    <div className="m-2">
                                        <NavLink key="del" to={"/delete-hangszer/" + instrument.id} className="btn btn-danger">
                                            <i className="bi bi-trash"></i>
                                        </NavLink>
                                        &nbsp;&nbsp;&nbsp;
                                        <NavLink key="mod" to={"/mod-hangszer/" + instrument.id} className="btn btn-primary">
                                            <i className="bi bi-pencil"></i>
                                        </NavLink>
                                    </div>
                                </div>
                            </div></NavLink>
                        ))}
                    </div>
                )
            }
        </div>
    );
}