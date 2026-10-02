import Card from "./components/Card";
import "./App.css";

function App() {
  const cards = [
    {
      title: "Artificial Intelligence",
      icon: "🧠",
      color: "pink",
    },
    {
      title: "Machine Learning",
      icon: "🤖",
      color: "blue",
    },
    {
      title: "Prompt Engineering",
      icon: "✨",
      color: "green",
    },
  ];

  return (
    <div className="app">
      <div className="decoration decoration-one"></div>
      <div className="decoration decoration-two"></div>

      <header className="header">
        <h1>
          <span>⚛</span> React <strong>Like</strong> Cards
        </h1>

        <p>A simple React project using Props and useState</p>
      </header>

      <main className="cards-container">
        {cards.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            icon={card.icon}
            color={card.color}
          />
        ))}
      </main>

      <div className="dots dots-one">
        • • •
        <br />
        • • •
        <br />
        • • •
      </div>

      <div className="dots dots-two">
        • • •
        <br />
        • • •
        <br />
        • • •
      </div>
    </div>
  );
}

export default App;