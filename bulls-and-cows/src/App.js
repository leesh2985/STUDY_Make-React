import { useState, useEffect } from "react";
import "./App.css";
import { generateRandomNumber } from "./random";

function App() {
  const [randomNumber] = useState(generateRandomNumber());
  const [answer, setAnswer] = useState("");
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    console.log(randomNumber);
  }, [randomNumber]);

  const handleAnswerChanged = (e) => {
    //사용자 입력 이벤트
    setAnswer(e.target.value);
  };

  const handleSubmit = () => {
    // 스트라이크, 볼, 정답유무

    const answers = answer.split("").map((item) => Number(item));

    const { strike, ball } = randomNumber.reduce(
      (prev, cur, index) => {
        // 같은 자리에 같은수가 존재하면 스트라이크
        if (answers[index] === cur) {
          return {
            ...prev,
            strike: prev.strike + 1,
          };
        }

        //다른자리에 수가 존재하면 볼
        if (answers.includes(cur)) {
          return {
            ...prev,
            ball: prev.ball + 1,
          };
        }

        return prev;
      },
      {
        strike: 0,
        ball: 0,
      }
    );

    if (strike === 4) {
      alert("정답입니다.");
      setLogs([...logs, `${answer} (축하합니다. 정답입니다.)`]);
      return;
    }

    setLogs([...logs, `${answer} (strike: ${strike}, ball: ${ball})`]);
  };

  return (
    <div className="App">
      <h1>숫자 야구 게임</h1>
      <header className="header">----</header>
      <section>
        <input type="text" value={answer} onChange={handleAnswerChanged} />
        <button onClick={handleSubmit}>맞춰보기</button>
      </section>
      <h2>기록</h2>
      <ol>
        {logs.map((log, index) => {
          return <li key={`${log}_${index}`}>{log}</li>;
        })}
      </ol>
    </div>
  );
}

export default App;
