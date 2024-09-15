import React, { useState } from "react";
import './Account.css'; 

function Account() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");

  const handleRegister = () => {
    if (!username || !password || !email || !surname || !age) {
      alert("Будь ласка, заповніть всі поля.");
      return;
    }

    const userCount = Object.keys(localStorage).filter(key => key.startsWith("user")).length + 1;

    const newUser = { username, password, email, surname, age };
    localStorage.setItem(`user${userCount}`, JSON.stringify(newUser));

    setUsername("");
    setPassword("");
    setEmail("");
    setSurname("");
    setAge("");
    alert("Ви успішно зареєстровані!");
  };

  return (
    <div className="account-container">
      <h1>Реєстрація</h1>
      <div className="form-group">
        <label>Ім'я користувача:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>

      <div className="form-group">
        <label>Прізвище:
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </label>
      </div>

      <div className="form-group">
        <label>Вік:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
      </div>

      <div className="form-group">
        <label>Електронна пошта:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>

      <div className="form-group">
        <label>Пароль:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
    
      <button className="register-button" onClick={handleRegister}>
        Зареєструватись
      </button>
    </div>
  );
}

export default Account;
