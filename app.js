// Глобальная функция для генерации случайного цвета в формате HEX
function getRandomHexColor() {
  const randomChannel = () => Math.floor(Math.random() * 256);
  const toHex = (n) => n.toString(16).padStart(2, "0").toUpperCase();

  const r = randomChannel();
  const g = randomChannel();
  const b = randomChannel();

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

const { useState, useEffect } = React;

function ColorGenerator() {
  const [color, setColor] = useState("#4F46E5"); // стартовый цвет

  // При каждом изменении цвета обновляем фон страницы
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  const handleClick = () => {
    const nextColor = getRandomHexColor();
    setColor(nextColor);
  };

  return React.createElement(
    "div",
    { className: "card", onClick: handleClick },
    [
      React.createElement(
        "div",
        { key: "title", className: "title" },
        "Генератор цвета фона"
      ),
      React.createElement(
        "div",
        { key: "subtitle", className: "subtitle" },
        "Кликните по карточке, чтобы сгенерировать случайный цвет."
      ),
      React.createElement(
        "div",
        {
          key: "preview",
          className: "color-preview",
          style: { backgroundColor: color },
        },
        "Превью цвета"
      ),
      React.createElement(
        "div",
        { key: "code", className: "code" },
        color
      ),
      React.createElement(
        "div",
        { key: "hint", className: "hint" },
        "Нажмите ещё раз для нового случайного цвета"
      ),
    ]
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(React.createElement(ColorGenerator));


