import { useId, useState } from "react";
import "./Filters.css";

function Filters({ onChange }) {
    const [minPrice, setMinPrice] = useState(0);
    const minPriceFilteredId = useId();
    const categoryFilteredId = useId();

    console.log({ minPriceFilteredId, categoryFilteredId });

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value);
        onChange((prevState) => ({
            ...prevState,
            minPrice: event.target.value,
        }));
    };

    const handleChangeCategory = (event) => {
        onChange((prevState) => ({
            ...prevState,
            category: event.target.value,
        }));
    };
    
    return (
        <section className='filters'>
            <div>
                <label htmlFor={minPriceFilteredId}>Precio a partir de:</label>
                <input
                    type='range'
                    id={minPriceFilteredId}
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                />
                <span>${minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilteredId}>Categoría</label>
                <select id={categoryFilteredId} onChange={handleChangeCategory}>
                    <option value='all'>Todas</option>
                    <option value='laptops'>Portátiles</option>
                    <option value='smartphones'>Móviles</option>
                </select>
            </div>
        </section>
    );
}
export default Filters;
