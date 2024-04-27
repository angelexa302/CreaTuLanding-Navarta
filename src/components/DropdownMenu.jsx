
import { Link } from "react-router-dom";
function DropdownMenu() {

  return (
    <div className="dropdown-menu">
      <div><Link to="/categoria/vinos-tintos">Vinos Tintos</Link></div>
      <div><Link to="/categoria/vinos-blancos">Vinos Blancos</Link></div>
      <div><Link to="/categoria/vinos-rosados">Vinos Rosados</Link></div>
    </div>
  );
}
export default DropdownMenu;
