import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export function PizzaEdit(props) {
    const params = useParams();
    const id = params.pizzaId;
    const navigate = useNavigate();
    const [pizza, setPizza] = useState([]);
    const [edname , setEdname] = useState('');
    const [edgluten , setEdgluten] = useState('');
    const [edpicture , setEdpicture] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://pizza.kando-dev.eu/Pizza/${id}`);
                const pizza = await response.data;

                setPizza(pizza);
                setEdname(pizza.name);
                setEdgluten(pizza.isGlutenFree);
                setEdpicture(pizza.kepURL);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id, edname, edgluten, edpicture]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { id, name, gluten, img } = e.target.elements;
        const pizzaData = {
            id: pizza.id,
            name: edname.valueOf,
            isGlutenFree: edgluten.valueOf,
            kepURL: edpicture.valueOf
        };
        try{
            await axios.put(`https://pizza.kando-dev.eu/Pizza/${id}`, pizzaData, {
            });
            navigate('/');
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <div className="p-5 content bg-whitesmoke">
            <h2>Edit pizza</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Name:</label>
                    <div>
                        <input type="text" name="name" value={edname} className="form-control" />
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Gluten:</label>
                    <div className="form-check">
                        <label htmlFor="gluten" className="form-check-label">
                        Gluten-free
                        </label>
                        <input
                        type="radio"
                        name="gluten"
                        value={1}
                        className="form-check-input"
                        />
                    </div>
                    <div className="form-check">
                        <input
                        type="radio"
                        name="gluten"
                        value={0}
                        className="form-check-input"
                        />
                        <label htmlFor="gluten" className="form-check-label">
                        Not gluten-free
                        </label>
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Image:</label>
                    <div>
                        <input type="text" name="img" value={edpicture} className="form-control" />
                    </div>
                </div>
                <button type="submit" className="btn btn-success">Küldés</button>
            </form>
        </div>
        )
    }