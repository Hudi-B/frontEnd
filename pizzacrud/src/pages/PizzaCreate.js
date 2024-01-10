import { useNavigate } from "react-router-dom";
import axios from "axios";

export function PizzaCreate() {
    const navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, gluten, img } = e.target.elements;
    const pizzaData = {
        name: name.value,
        isGlutenFree: gluten.value,
        kepURL: img.value
    };

    try {
        await axios.post("https://pizza.kando-dev.eu/Pizza", pizzaData, {
            withCredentials: true,
        });
        
        navigate("/");
        } catch (error) {
        console.log(error);
        }
    }

    return (
        <div className="p-5 content bg-whitesmoke">
            <h2>New pizza</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Name:</label>
                    <div>
                        <input type="text" name="name" className="form-control" />
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
                        <input type="text" name="img" className="form-control" />
                    </div>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    );
}
