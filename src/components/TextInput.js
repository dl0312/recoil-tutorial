import React from "react";
import { useRecoilState, atom } from "recoil";

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

export default function TextInput() {
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
