import { useState, useEffect } from "react";
import "./App.css";
import { generateRandomNumber } from "./random";

function App() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [answer, setAnswer] = useState("");
  const [logs, setLogs] = useState([]);
  const [isSuccess, setSuccess] = useState(false);

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

    if (answers.some((item) => isNaN(item))) {
      // 숫자인지 체크
      alert("숫자로만 입력해주세요.");
      return;
    }

    if (answers.length !== 4) {
      // 4자리 인지 체크
      alert("4자리 숫자만 입력해주세요.");
      return;
    }

    const isDuplicate = answers.some((number) => {
      // 중복숫자 찾기
      // [1,2,3,4]
      // -> 앞에서 참색했을때 index 0
      // <- 뒤에서 참색했을때 index 0
      // [1,1,3,4]
      // -> 앞에서 참색했을때 index 0
      // <- 뒤에서 참색했을때 index 1

      return answers.indexOf(number) !== answers.lastIndexOf(number);
    });

    if (isDuplicate) {
      alert("입력 값에 중복이 있어요.");
      return;
    }

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
      setSuccess(true);
      return;
    }

    setLogs([...logs, `${answer} (strike: ${strike}, ball: ${ball})`]);
  };

  const handleRetry = () => {
    setRandomNumber(generateRandomNumber());
    setAnswer("");
    setLogs([]);
    setSuccess(false);
  };

  return (
    <div className="App">
      <h1>숫자 야구 게임</h1>
      <header className="header">
        {isSuccess ? `정답: ${answer}` : "----"}
      </header>
      <section>
        <input
          type="text"
          value={answer}
          onChange={handleAnswerChanged}
          disabled={isSuccess}
        />
        {isSuccess ? (
          <button onClick={handleSubmit}>다시하기</button>
        ) : (
          <button onClick={handleSubmit}>맞춰보기</button>
        )}
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
