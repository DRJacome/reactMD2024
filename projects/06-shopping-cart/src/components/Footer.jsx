import "./Footer.css";

function Footer({ filters }) {
    return (
        <footer className='footer'>
            {JSON.stringify(filters, null, 2)}
            {/*             <h4>
                Prueba técnica de React - <span>@David</span>
            </h4>
            <h5>Shopping cart con useContext y useReducer</h5> */}
        </footer>
    );
}
export default Footer;
