import React from 'react';
import './App.css';
import screenfull from 'screenfull';

function App() {
  const videos = [{
    url: "https://aolclfvhbbaq5612523.cdn.ntruss.com/1.mp4",
    selectionTime: 44,
    selectionTitle: "이게 한두 번도 아니고, 어떡해야 하지?",
    selection: [{
      text: "이건 못 참지ㅋㅋ",
      next: 1,
    }, {
      text: "적당히 돌려서 뭐라고 해야지.",
      next: 2,
    }, {
      text: "인내가 미덕이지.",
      next: 3,
    }],
  }, {
    url: "https://aolclfvhbbaq5612523.cdn.ntruss.com/2-1.mp4",
    endingTitle: "손절",
    endingDescription: [
      "\"한 친구를 얻는 데는 오래 걸리지만, 잃는 데는 잠시면 충분하다.\" - John Lyly",
      "친구 사이의 갈등은 피할 수 없는 것이나, 문제를 해결하려는 노력을 하지 않거나 실패한 경우 친구 관계가 약화되고 해체될 수 있다.",
      "특히 관계의 만족도가 낮고, 투자의 양이 적으며, 대안적인 관계가 있을수록 갈등을 방치하거나 관계를 떠나는 방식으로 대처한다.",
      "또한 친구에 대한 기대가 좌절되고 실망감이 누적되었을 때, 투자와 보상의 균형이 깨졌을 경우, 관계가 해체될 수 있다."
    ],
  }, {
    url: "https://aolclfvhbbaq5612523.cdn.ntruss.com/2-2.mp4",
    selectionTime: 23,
    selectionTitle: "그래도 한 마디는 할까?",
    selection: [{
      text: "아무래도 한 소리 더 해 줘야겠어.",
      next: 4,
    }, {
      text: "원래 이러니까, 쿨하게 넘어가자.",
      next: 5,
    }],
  }, {
    url: "https://aolclfvhbbaq5612523.cdn.ntruss.com/2-3.mp4",
    selectionTime: 20,
    selectionTitle: "그래도 한 마디는 할까?",
    selection: [{
      text: "아무래도 한 소리 더 해 줘야겠어.",
      next: 4,
    }, {
      text: "원래 이러니까, 쿨하게 넘어가자.",
      next: 5,
    }],
  }, {
    url: "https://aolclfvhbbaq5612523.cdn.ntruss.com/3-1.mp4",
    selectionTime: 71,
    selectionTitle: "일단 쿨한 척 했지만 화가 풀리지 않는다.",
    selection: [{
      text: "참을 인 세 번이면 살인도 면한다.",
      next: 6,
    }, {
      text: "내가 호구냐?",
      next: 7,
    }],
  }, {
    url: "https://aolclfvhbbaq5612523.cdn.ntruss.com/3-2.mp4",
    selectionTime: 70,
    selectionTitle: "일단 쿨한 척 했지만 화가 풀리지 않는다.",
    selection: [{
      text: "참을 인 세 번이면 살인도 면한다.",
      next: 6,
    }, {
      text: "내가 호구냐?",
      next: 7,
    }],
  }, {
    url: "https://aolclfvhbbaq5612523.cdn.ntruss.com/4-1.mp4",
    endingTitle: "화병",
    endingDescription: [
      "분노는 개인의 가치를 떨어뜨리는 공격 행동에 대한 반응적 감정이다.",
      "기본적으로 공격 행위를 한 대상에게 향하며, 공격과 복수 행동을 유발한다.",
      "분노를 즉각 행동화할 수 없을 때에는 대치행동, 수동적 공격, 내향화, 승화, 용서 등 대안행동을 통해 나타난다.",
      "해소되지 못한 감정은 주의집중 곤란, 기억력 저하, 지각이나 판단의 왜곡 등의 영향을 미치며, 신체화하여 몸이 아프기도 하다.",
    ],
  }, {
    url: "https://aolclfvhbbaq5612523.cdn.ntruss.com/4-2_1.mp4",
    selectionTime: 77,
    selectionTitle: "나랑 다닐 이유가 없다고?",
    selection: [{
      text: "극. 대. 노.",
      next: 8,
    }, {
      text: "크게 화낸거는 미안하다.",
      next: 9,
    }],
  }, {
    url: "https://aolclfvhbbaq5612523.cdn.ntruss.com/5-1.mp4",
    endingTitle: "손절",
    endingDescription: [
      "\"한 친구를 얻는 데는 오래 걸리지만, 잃는 데는 잠시면 충분하다.\" - John Lyly",
      "친구 사이의 갈등은 피할 수 없는 것이나, 문제를 해결하려는 노력을 하지 않거나 실패한 경우 친구 관계가 약화되고 해체될 수 있다.",
      "특히 관계의 만족도가 낮고, 투자의 양이 적으며, 대안적인 관계가 있을수록 갈등을 방치하거나 관계를 떠나는 방식으로 대처한다.",
      "또한 친구에 대한 기대가 좌절되고 실망감이 누적되었을 때, 투자와 보상의 균형이 깨졌을 경우, 관계가 해체될 수 있다."
    ],
  }, {
    url: "https://aolclfvhbbaq5612523.cdn.ntruss.com/5-2_2.mp4",
    endingTitle: "비폭력 대화",
    endingDescription: [
      "비폭력 대화는 자신과 타인을 희생하거나 해치지 않으면서, 모두의 욕구를 동시에 만족시키는 의사소통이다.",
      "자신과 타인의 느낌과 욕구를 자각하여 수용하는 것이 핵심이다.",
      "1단계에서는 판단, 평가, 해석을 배제하고 있는 그대로의 자극, 사실에 대한 관찰이 이루어진다.",
      "2단계에서는 그 자극에 대한 나의 정서적, 신체적 느낌을 자각하고 표현한다.",
      "3단계에서는 내가 원하는 것, 필요로 하는 것, 중요하게 여기는 것을 자각하고 표현한다.",
      "4단계에서는 지금 할 수 있는 명확하고 구체적인 행위, 방법을 부탁한다.",
    ],
  }];
  const player = React.createRef();
  const menu = React.createRef();
  const [step, setStep] = React.useState(0);
  const [previousStep, setPreviousStep] = React.useState(0);
  const [selection, enableSelection] = React.useState(false);
  const [started, start] = React.useState(false);
  const [ended, end] = React.useState(false);

  return (
    <div className="App">
      <div className="videocontainer">
        <video playsInline ref={player} onTimeUpdate={() => {
          if (selection !== (player.current.currentTime > videos[step].selectionTime)) {
            enableSelection(!selection);
          }
        }} onEnded={() => {
          if (videos[step].endingTitle) {
            if (screenfull.isEnabled) {
              screenfull.exit();
            }
            end(true);
          }
        }}>
          <source src={videos[step].url} type="video/mp4"></source>
        </video>
      </div>
      <div className="menucontainer">
        <div className="menu" ref={menu}>
          {!started ? <div className="start" onClick={() => {
            if (screenfull.isEnabled) {
              screenfull.request().then(() => {
                if (window.screen && window.screen.orientation.lock) {
                  window.screen.orientation.lock("landscape-primary").catch(() => {});
                }
              });
            }

            player.current.play();
            start(true);
          }}>
            시작
          </div> : null}
          {selection && videos[step].selectionTitle ? <h1 className="title">
            {videos[step].selectionTitle}
          </h1> : null}
          {selection && videos[step].selection ? videos[step].selection.map((selection, index) => <div key={index} onClick={() => {
            enableSelection(false);
            setPreviousStep(step);
            setStep(selection.next);
            player.current.load();
            player.current.play();
          }}>
            {selection.text}
          </div>) : null}
        </div>
      </div>
      {ended ? <div className="endingcontainer">
        <div className="ending">
          <div className="title">
            {videos[step].endingTitle}
          </div>
          {videos[step].endingDescription.map((desc, index) => <div className="desc" key={index}>
            {desc}
          </div>)}
          <div className="retry" onClick={() => {
            end(false);
            setStep(previousStep);
            player.current.load();
            player.current.currentTime = videos[previousStep].selectionTime - 3;

            if (screenfull.isEnabled) {
              screenfull.request().then(() => {
                if (window.screen && window.screen.orientation.lock) {
                  window.screen.orientation.lock("landscape-primary").catch(() => {});
                }
              });
            }
            player.current.play();
          }}>
            &#8634; 다시 시도
          </div>
        </div>
      </div> : null}
    </div>
  );
}

export default App;
