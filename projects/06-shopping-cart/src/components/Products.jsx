import "./Products.css";
import { AddToCartIcon } from "./Icons";

export function Products({ products }) {
    return (
        <main className='products'>
            <ul className=''>
                {products.slice(0, 10).map((product) => (
                    <li key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <div>
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                        <div>
                            <button>
                                <AddToCartIcon />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
}
