import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

/*
  # RecoilRoot
  ## Docs
  rocoil 상태를 사용하는 컴포넌트들은 RecoilRoot이 부모 트리의 어느 곳에든 존재해야 합니다. RecoilRoot을 놓기 가장 좋은 위치는 당신의 root 컴포넌트입니다.

  ## 의견
  Context api의 Context.Provider와 비슷합니다.
*/
export default function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}

/*
  # Atom
  ## DOCS
  atom은 상태 조각을 의미합니다. atom은 어느 컴포넌트에서나 읽거나 쓸 수 있고, atom의 값을 읽은 컴포넌트는 즉각적으로 해당 atom을 구독하게됩니다. 따라서, 어떤 atom의 수정이 생기면 해당 atom을 구독한 모든 컴포넌트들이 리렌더될 것입니다.
  
  ## 의견
  useState를 전역으로 사용하는 것과 비슷합니다.
*/
const textState = atom({
  key: "textState", // 다른 atom이나 selector와 다른 유일한 ID
  default: "", // 초기값
});

function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

/*
  # Selector
  ## DOCS
  selector는 파생된 상태를 의미합니다. 파생된 상태는 변형된 값을 의미하며, 현재 주어진 상태를 어떤 방식으로든 순수 함수를 이용하여 변형한 값을 생각하면 됩니다.
  
  ## 의견
  useMemo를 전역에서 사용하는 것과 비슷합니다.
*/
const charCountState = selector({
  key: "charCountState", // 다른 atom이나 selector와 다른 유일한 ID
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}
