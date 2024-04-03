import CartWidget from "./CartWidget/Cartwidget"
const NavBar = () => {
    return (
        <nav>
            <h3>Vinoteca</h3>
            <div>
                <button>Vinos</button>
                <button>Cervezas</button>
                <button>Champagne</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar