import "./App.css";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>
          Crypto News <span>App</span>
        </h1>
        <p>Stay updated with cryptocurrency</p>
      </div>
      <div className="news-container">
        <Card>
          <img
            src="https://i-invdn-com.investing.com/news/LYNXMPEE0H0B5_L.jpg"
            alt=""
          ></img>
          <h3>
            SEC Carefully Considering Spot Bitcoin ETF in Response to
            Congressman
          </h3>
        </Card>
        <Card>
          <img
            src="https://i-invdn-com.investing.com/news/moved_LYNXMPEI0O0MB-ORUBS_L.jpg"
            alt=""
          ></img>
          <h3>Fidelity Exec Compares Bitcoin to Apple</h3>
        </Card>
        <Card>
          <img
            src="https://i-invdn-com.investing.com/news/LYNXMPED990HX_L.jpg"
            alt=""
          ></img>
          <h3>
            Yen bid, bitcoin battered as Ukraine fears leave traders nervous
          </h3>
        </Card>
        <Card>
          <img
            src="https://i-invdn-com.investing.com/news/moved_LYNXMPEI0O0MB-ORUBS_L.jpg"
            alt=""
          ></img>
          <h3>Fidelity Exec Compares Bitcoin to Apple</h3>
        </Card>
      </div>
    </div>
  );
}

export default App;
