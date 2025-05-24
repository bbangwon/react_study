import reactImg from "./assets/react-core-concepts.png";

const reactDesciptions = ["Fundmantal", "Crucial", "Core"];

function getRandimInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDesciptions[getRandimInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
