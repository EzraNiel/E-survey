import { Link } from "react-router-dom";

function Pdg() {
  // STATE (état,données)

  // COMPORTEMENT

  //   AFFICHAGE (RENDER)
  return (
    <>
      <h1>Procureur</h1>
      <div className="Pdg">
        <Link to="/">Client_d</Link>
        <Link to="/Pdg">Pdg</Link>
        <Link to="/Admin">Admin</Link>
      </div>
    </>
  );
}

export default Pdg;
