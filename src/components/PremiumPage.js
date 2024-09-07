import React from "react";
import "./PremiumPage.css";

const PremiumPage = () => {
  return (
    <div className="premium-container">
      <h1>Преміум Підписка</h1>
      <p>Отримайте доступ до ексклюзивного контенту та додаткових функцій, підписавшись на нашу преміум підписку.</p>
      <ul>
        <li>Додаткові категорії питань</li>
        <li>Без реклами</li>
        <li>Преміум підтримка</li>
      </ul>
      <button className="subscribe-button">Підписатися зараз</button>
    </div>
  );
};

export default PremiumPage;
