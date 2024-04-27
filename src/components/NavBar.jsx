import Button from "./Button";
import CartWidget from "./CartWidget/Cartwidget";
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div style={{ marginRight: 200 }}>

        <Link to="/">
          <img
            style={{ borderRadius: 8, width: 180, marginTop: 5 }}
            src="/src/assets/2.svg"
            alt="Logo"
          />
        </Link>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ margin: 10 }}>
          <img src="/src/assets/location-dot-solid.svg" />
        </div>
        <div>
          <p>Tienda</p>
        </div>
      </div>
      <div>
        <Link to="/categoria/vinos-tintos">Vinos Tintos</Link>
      </div>
      <div>
        <Link to="/categoria/vinos-blancos">Vinos Blancos</Link>
      </div>
      <div>
        <Link to="/categoria/cervezas">Cervezas</Link>
      </div>
      <div>
        <button>Iniciar sección</button>
      </div>
      <div style={{ marginLeft: 200 }}>
        <CartWidget />
        <Button
          color="red"
          label="COMPRAR"
          style={{ padding: "3px 3px", fontSize: "14px", color: "#f0f0f0" }}
        />
      </div>
    </nav>
  );
}

export default NavBar;
