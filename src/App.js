import React from "react";
import { RecoilRoot } from "recoil";
import CharacterCounter from "./components/CharacterCounter";

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
