import React from "react";
import { useRecoilValue, selector, atom } from "recoil";

/*
  # Selector
  ## DOCS
  selector는 파생된 상태를 의미합니다. 파생된 상태는 변형된 값을 의미하며, 현재 주어진 상태를 어떤 방식으로든 순수 함수를 이용하여 변형한 값을 생각하면 됩니다.
  
  ## 의견
  useMemo를 전역에서 사용하는 것과 비슷합니다.
*/

const textState = atom({
  key: "textState", // 다른 atom이나 selector와 다른 유일한 ID
  default: "", // 초기값
});

const charCountState = selector({
  key: "charCountState", // 다른 atom이나 selector와 다른 유일한 ID
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

export default function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}
