import React, { useState } from "react";
import { TbMoodNerd } from "react-icons/tb";
import "./Quiz.css";

const questionsData = {
  history: [
    { question: "Коли розпочалася Друга світова війна?", options: ["1939", "1941", "1945", "1935"], correctAnswer: "1939" },
    { question: "Хто був першим президентом США?", options: ["Джон Адамс", "Томас Джефферсон", "Джордж Вашингтон", "Авраам Лінкольн"], correctAnswer: "Джордж Вашингтон" },
    { question: "Яке місто було столицею Римської імперії?", options: ["Афіни", "Константинополь", "Рим", "Александрія"], correctAnswer: "Рим" },
    { question: "Коли завершилась Перша світова війна?", options: ["1914", "1918", "1920", "1939"], correctAnswer: "1918" },
    { question: "Хто був лідером Радянського Союзу під час Другої світової війни?", options: ["Ленін", "Сталін", "Хрущов", "Брежнєв"], correctAnswer: "Сталін" },
    { question: "У якому році відбулася революція у Франції?", options: ["1789", "1848", "1799", "1871"], correctAnswer: "1789" },
    { question: "Хто був фараоном, коли була побудована Велика піраміда в Гізі?", options: ["Тутанхамон", "Хеопс", "Рамзес II", "Клеопатра"], correctAnswer: "Хеопс" },
    { question: "Який договір завершив Першу світову війну?", options: ["Версальський договір", "Віденський конгрес", "Паризький договір", "Портсмутський договір"], correctAnswer: "Версальський договір" },
  ],
  nature: [
    { question: "Яка найбільша пустеля на Землі?", options: ["Сахара", "Гобі", "Калахарі", "Антарктика"], correctAnswer: "Сахара" },
    { question: "Скільки океанів у світі?", options: ["3", "5", "7", "4"], correctAnswer: "5" },
    { question: "Яка найдовша річка у світі?", options: ["Ніл", "Амазонка", "Міссісіпі", "Конго"], correctAnswer: "Ніл" },
    { question: "Який найбільший острів у світі?", options: ["Мадагаскар", "Гренландія", "Нова Гвінея", "Борнео"], correctAnswer: "Гренландія" },
    { question: "Яке найглибше озеро у світі?", options: ["Байкал", "Вікторія", "Танганьїка", "Каспійське море"], correctAnswer: "Байкал" },
    { question: "Яка найвища гора в світі?", options: ["Еверест", "К2", "Канченджанга", "Макалу"], correctAnswer: "Еверест" },
    { question: "Який океан найбільший за площею?", options: ["Тихий", "Атлантичний", "Індійський", "Південний"], correctAnswer: "Тихий" },
    { question: "Яке дерево є найстарішим у світі?", options: ["Метусела", "Дуб Черінгтон", "Гігантська секвоя", "Фіцройя"], correctAnswer: "Метусела" },
  ],
  science: [
    { question: "Який хімічний елемент має символ O?", options: ["Кисень", "Водень", "Азот", "Вуглець"], correctAnswer: "Кисень" },
    { question: "Яка планета найбільша в Сонячній системі?", options: ["Марс", "Земля", "Юпітер", "Сатурн"], correctAnswer: "Юпітер" },
    { question: "Яка наука вивчає властивості матерії та енергії?", options: ["Хімія", "Фізика", "Біологія", "Астрономія"], correctAnswer: "Фізика" },
    { question: "Який газ складає більшу частину атмосфери Землі?", options: ["Кисень", "Азот", "Вуглекислий газ", "Гелій"], correctAnswer: "Азот" },
    { question: "Хто розробив теорію відносності?", options: ["Ньютон", "Максвелл", "Ейнштейн", "Галілей"], correctAnswer: "Ейнштейн" },
    { question: "Яка одиниця вимірювання електричного струму?", options: ["Вольт", "Ом", "Ампер", "Ватт"], correctAnswer: "Ампер" },
    { question: "Який найбільший орган в людському тілі?", options: ["Мозок", "Печінка", "Шкіра", "Серце"], correctAnswer: "Шкіра" },
    { question: "Скільки хромосом у людському організмі?", options: ["23", "46", "64", "32"], correctAnswer: "46" },
  ],
  movies: [
    { question: "Хто зняв фільм 'Великий Лебовські'?", options: ["Брати Коен", "Крістофер Нолан", "Джеймс Кемерон", "Квентін Тарантіно"], correctAnswer: "Брати Коен" },
    { question: "Який фільм отримав Оскар у 2020 році?", options: ["Паразити", "1917", "Джокер", "Одного разу в Голлівуді"], correctAnswer: "Паразити" },
    { question: "Хто зіграв роль Джокера у фільмі 2008 року 'Темний лицар'?", options: ["Гіт Леджер", "Хоакін Фенікс", "Джаред Лето", "Джек Ніколсон"], correctAnswer: "Гіт Леджер" },
    { question: "Який актор виконав головну роль у фільмі 'Титанік'?", options: ["Леонардо ДіКапріо", "Метт Деймон", "Бред Пітт", "Том Круз"], correctAnswer: "Леонардо ДіКапріо" },
    { question: "Хто зіграв головну роль у фільмі 'Термінатор'?", options: ["Сильвестр Сталлоне", "Арнольд Шварценеггер", "Брюс Вілліс", "Жан-Клод Ван Дамм"], correctAnswer: "Арнольд Шварценеггер" },
    { question: "Який фільм є найкасовішим за всі часи?", options: ["Аватар", "Титанік", "Зоряні війни", "Месники: Фінал"], correctAnswer: "Аватар" },
    { question: "Хто режисер фільму 'Інтерстеллар'?", options: ["Стівен Спілберг", "Рідлі Скотт", "Крістофер Нолан", "Мартін Скорсезе"], correctAnswer: "Крістофер Нолан" },
    { question: "Який фільм відкрив кінематографічний Всесвіт Marvel?", options: ["Залізна людина", "Халк", "Тор", "Капітан Америка"], correctAnswer: "Залізна людина" },
  ],
  cars: [
    { question: "Яка країна є батьківщиною марки автомобілів Ferrari?", options: ["Німеччина", "Італія", "Франція", "США"], correctAnswer: "Італія" },
    { question: "Який автомобільний бренд виробляє модель Mustang?", options: ["Ford", "Chevrolet", "Dodge", "Toyota"], correctAnswer: "Ford" },
    { question: "Який найшвидший серійний автомобіль у світі на 2020 рік?", options: ["Bugatti Chiron", "Koenigsegg Agera RS", "Hennessey Venom GT", "Tesla Roadster"], correctAnswer: "Bugatti Chiron" },
    { question: "Який автомобіль вважається найпродаванішим за всю історію?", options: ["Toyota Corolla", "Ford F-Series", "Volkswagen Beetle", "Honda Civic"], correctAnswer: "Toyota Corolla" },
    { question: "Який бренд автомобілів виробляє модель 911?", options: ["Porsche", "BMW", "Audi", "Mercedes-Benz"], correctAnswer: "Porsche" },
    { question: "Який автомобільний бренд заснував Генрі Форд?", options: ["Chevrolet", "Ford", "Cadillac", "Dodge"], correctAnswer: "Ford" },
    { question: "Який перший автомобіль, що був серійно випущений?", options: ["Ford Model T", "Benz Patent-Motorwagen", "Chevrolet Series C", "Cadillac Model Thirty"], correctAnswer: "Ford Model T" },
    { question: "Який автомобільний бренд використовує логотип з чотирма кільцями?", options: ["BMW", "Audi", "Mercedes-Benz", "Volkswagen"], correctAnswer: "Audi" },
  ],
};
const categoryNames = {
  history: "Історія",
  nature: "Природа",
  science: "Наука",
  movies: "Фільми",
  cars: "Автомобілі",
};
const Quiz = () => {
  const [category, setCategory] = useState("");
  const [questionCount, setQuestionCount] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [results, setResults] = useState([]);

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
    setQuestionCount(null);
    setQuestions([]);
  };

  const handleQuestionCountSelect = (count) => {
    const selectedQuestions = questionsData[category].slice(0, count);
    setQuestions(selectedQuestions);
    setQuestionCount(count);
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsFinished(false);
  };

  const handleAnswerSubmit = (selectedAnswer) => {
    if (questions[currentQuestionIndex].correctAnswer === selectedAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsFinished(true);
      setResults([...results, { category, score, total: questions.length }]);
    }
  };

  return (
    <div>
      {!category && (
        <div>
          <h2>Оберіть категорію:</h2>
          <button onClick={() => handleCategorySelect("history")}>Історія</button>
          <button onClick={() => handleCategorySelect("nature")}>Природа</button>
          <button onClick={() => handleCategorySelect("science")}>Наука</button>
          <button onClick={() => handleCategorySelect("movies")}>Фільми</button>
          <button onClick={() => handleCategorySelect("cars")}>Автомобілі</button>

          {results.length > 0 && (
            <div className="results-container">
              <h3><TbMoodNerd />Твої попередні результати:</h3>
              {results.map((result, index) => (
                <div key={index} className="result-item">
                  Категорія: {categoryNames[result.category]}; <br/>
                  Правильних відповідей: {result.score} з {result.total}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      {category && !questionCount && (
        <div>
          <h2>Оберіть кількість питань:</h2>
          <button onClick={() => handleQuestionCountSelect(3)}>3 питання</button>
          <button onClick={() => handleQuestionCountSelect(5)}>5 питань</button>
          <button onClick={() => handleQuestionCountSelect(8)}>8 питань</button>
        </div>
      )}
      {category && questionCount && !isFinished && (
        <div>
          <h3>{questions[currentQuestionIndex].question}</h3>
          {questions[currentQuestionIndex].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswerSubmit(option)}>
              {option}
            </button>
          ))}
        </div>
      )}
      {isFinished && (
        <div>
          <h2>Ваш результат: {score} з {questions.length}</h2>
          <button onClick={() => setCategory("")}>Грати ще раз</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;