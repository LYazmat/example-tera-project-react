import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../images/logo.svg";

export default function Home() {
  const navigate = useNavigate(); // Instancia para fazer navegação dinâmica no react-router-dom

  const [users, setUsers] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState("");

  const handleUserChange = (e) => {
    setCurrentUser(e.target.value);
  };

  const handleConfirmClick = () => {
    navigate(`users/${currentUser}`);
  };

  // Renderiza após o return
  React.useEffect(() => {
    fetch("https://62c4e487abea8c085a7e022a.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div className="home center">
      <div className="home__logo">
        <img src={logo} className="responsive" alt="" />
      </div>
      <select onChange={handleUserChange} className="home__select-users">
        <option value="">Selecionar usuário</option>
        {users
          .sort((a, b) => (a.fn + a.ln).localeCompare(b.fn + a.ln))
          .map((user) => (
            <option
              value={user.id}
              key={user.id}
            >{`${user.fn} ${user.ln}`}</option>
          ))}
      </select>
      {!!currentUser && (
        <button onClick={handleConfirmClick} className="button-primary">
          Entrar
        </button>
      )}
    </div>
  );
}

// !!currentUser => Transforma em booleano uma string
