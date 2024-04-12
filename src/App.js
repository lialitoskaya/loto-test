import { useEffect, useState } from "react";
// import axiosPostResult from "./js/axiosPostResult";

const getRandomNumber = (max) => Math.ceil(Math.random() * max);

const generateNumbers = () => {
  let firstField = [];
  for (; firstField.length < 8; ) {
    const randomNum = getRandomNumber(19);
    if (!firstField.includes(randomNum)) {
      firstField = [...firstField, randomNum];
    }
  }
  const secondField = [getRandomNumber(2)];
  const result = { firstField, secondField };
  return result;
};

const App = () => {
  const [selectedNumbers, setNumbers] = useState({
    firstField: [],
    secondField: [],
  });
  const [isTicketWon, setTicketWon] = useState(null);
  const [isResultLoaded, setResultLoaded] = useState(false);
  const [error, setError] = useState(null);

  const updateActiveButtons = (elementId) => {
    document
      .querySelectorAll(`#${elementId} .circle-number-btn`)
      .forEach((el) => {
        const currentNumber = Number(el.innerHTML);
        const isActive = selectedNumbers[elementId].includes(currentNumber);
        isActive ? el.classList.add("active") : el.classList.remove("active");
      });
  };

  const selectNumberHandler = (e) => {
    const fieldId = e.target.parentNode.id;
    const selectedNumber = Number(e.target.innerHTML);
    let isFilled;

    if (fieldId === "firstField") {
      isFilled = selectedNumbers.firstField.length === 8;
    }

    if (fieldId === "secondField") {
      isFilled = selectedNumbers.secondField.length === 2;
    }

    const isNotUnique = selectedNumbers[fieldId].includes(selectedNumber);

    if (isNotUnique) {
      const deletedNumber = selectedNumber;
      const newNumbers = selectedNumbers[fieldId].filter(
        (el) => el !== deletedNumber
      );
      setNumbers({ ...selectedNumbers, [fieldId]: newNumbers });
      return;
    }

    if (!isFilled) {
      setNumbers({
        ...selectedNumbers,
        [fieldId]: [...selectedNumbers[fieldId], selectedNumber],
      });
    }
  };

  // Код отправки данных на сервер

  // useEffect(() => {
  //   const { firstField, secondField } = selectedNumbers;

  //   const result = { selectedNumber: firstField, secondField, isTicketWon };

  //   if (isTicketWon !== null && !error) {
  //     axiosPostResult(result)
  //       .then(() => setResultLoaded(true))
  //       .catch(() => {
  //         setTimeout(() => {
  //           axiosPostResult(result)
  //             .then(() => setResultLoaded(true))
  //             .catch((e) => {
  //               setError(e.message);
  //               setResultLoaded(false);
  //             });
  //         }, 2000);
  //       });
  //   }
  // }, [isResultLoaded]);

  useEffect(() => {
    updateActiveButtons("firstField");
    setError(null);
  }, [selectedNumbers.firstField]);

  useEffect(() => {
    updateActiveButtons("secondField");
    setError(null);
  }, [selectedNumbers.secondField]);

  const resultClickHandler = (e) => {
    e.preventDefault();

    if (selectedNumbers.firstField.length < 8 || selectedNumbers.secondField.length < 1) {
      setError("Необходимо указать 8 чисел в первом поле и одно во втором");
      return;
    }

    const winNumbers = generateNumbers();

    const firstFieldMatchValues = selectedNumbers.firstField.filter((num) =>
      winNumbers.firstField.includes(num)
    );

    const secondFieldMatchValues = selectedNumbers.secondField.filter((num) =>
      winNumbers.secondField.includes(num)
    );

    if (firstFieldMatchValues.length >= 4 || (firstFieldMatchValues.length >= 3 && secondFieldMatchValues.length === 1)) {
      setTicketWon(true);
    } else {
      setTicketWon(false);
    }

    setResultLoaded(true);
  };

  const autocompleteClickHandler = () => {
    const resultNumbers = generateNumbers();

    setNumbers(resultNumbers);
  };

  const resultText = isTicketWon ? `Ого, вы выиграли! Поздравляем!` : `Вы проиграли. Попробуем еще раз ?`;

  return (
    <div className="ticket">
      <p className="text-bold ticket__title px-5">Билет 1</p>
      {isResultLoaded ? (
        <p className="text-secondary px-5">
          {resultText}
        </p>
      ) : (
        <>
          <p className="text-bold mb-10 px-5">
            Поле 1 <span className="text-secondary">Отметье 8 чисел</span>
          </p>
          <button
            type="button"
            className="autocomplete-magic-wand"
            onClick={() => autocompleteClickHandler()}></button>
          <div className="field-1" id="firstField">
            <button
              className="circle-number-btn"
              id="1"
              onClick={selectNumberHandler}>
              1
            </button>
            <button
              className="circle-number-btn"
              id="2"
              onClick={selectNumberHandler}>
              2
            </button>
            <button
              className="circle-number-btn"
              id="3"
              onClick={selectNumberHandler}>
              3
            </button>
            <button
              className="circle-number-btn"
              id="4"
              onClick={selectNumberHandler}>
              4
            </button>
            <button
              className="circle-number-btn"
              id="5"
              onClick={selectNumberHandler}>
              5
            </button>
            <button
              className="circle-number-btn"
              id="6"
              onClick={selectNumberHandler}>
              6
            </button>
            <button
              className="circle-number-btn"
              id="7"
              onClick={selectNumberHandler}>
              7
            </button>
            <button
              className="circle-number-btn"
              id="8"
              onClick={selectNumberHandler}>
              8
            </button>
            <button
              className="circle-number-btn"
              id="9"
              onClick={selectNumberHandler}>
              9
            </button>
            <button
              className="circle-number-btn"
              id="10"
              onClick={selectNumberHandler}>
              10
            </button>
            <button
              className="circle-number-btn"
              id="11"
              onClick={selectNumberHandler}>
              11
            </button>
            <button
              className="circle-number-btn"
              id="12"
              onClick={selectNumberHandler}>
              12
            </button>
            <button
              className="circle-number-btn"
              id="13"
              onClick={selectNumberHandler}>
              13
            </button>
            <button
              className="circle-number-btn"
              id="14"
              onClick={selectNumberHandler}>
              14
            </button>
            <button
              className="circle-number-btn"
              id="15"
              onClick={selectNumberHandler}>
              15
            </button>
            <button
              className="circle-number-btn"
              id="16"
              onClick={selectNumberHandler}>
              16
            </button>
            <button
              className="circle-number-btn"
              id="17"
              onClick={selectNumberHandler}>
              17
            </button>
            <button
              className="circle-number-btn"
              id="18"
              onClick={selectNumberHandler}>
              18
            </button>
            <button
              className="circle-number-btn"
              id="19"
              onClick={selectNumberHandler}>
              19
            </button>
          </div>
          <p className="text-bold mb-10 px-5">
            Поле 2. <span className="text-secondary">Отметьте 1 число</span>
          </p>
          <div className="field-2" id="secondField">
            <button
              className="circle-number-btn"
              id="1"
              onClick={selectNumberHandler}>
              1
            </button>
            <button
              className="circle-number-btn"
              id="2"
              onClick={selectNumberHandler}>
              2
            </button>
          </div>
          <div className="d-flex">
            <button
              type="submit"
              className="result-win-btn"
              onClick={resultClickHandler}>
              Показать результат
            </button>
          </div>
          {error && <p className="text-dangerous mt-8">{error}</p>}
        </>
      )}
    </div>
  );
};

export default App;
