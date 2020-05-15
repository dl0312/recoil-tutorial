# Recoil Tutorial

## [Recoil](https://recoiljs.org/)?

Recoil은 리액트를 위한 상태 관리 라이브러리입니다.

## 특징

### 최소한 그리고 리액트같은

Recoil은 리액트처럼 동작하고 생각합니다. 당신의 앱에 추가해서 빠르고 유연한 공통의 상태를 가져보세요.

### 데이터 흐름 그래프

파생된 데이터와 비동기 쿼리들은 순수함수와 효율적인 구독들로 관리됩니다.

### 앱와 앱 간의 관측

코드 분할 없이 앱 간의 모든 상태 변화를 관측해서 persistence, routing, time-travel debugging이나 undo 기능을 구현해보세요.

## 라이브러리

### RecoilRoot

rocoil의 상태를 사용하는 컴포넌트들은 `RecoilRoot`이 부모 트리의 어느 곳에든 존재해야 합니다. RecoilRoot을 놓기 가장 좋은 위치는 당신의 root 컴포넌트입니다. Context api의 `(...)Context.Provider`와 비슷합니다.

### Atom

`atom`은 상태 조각을 의미합니다. `atom`은 어느 컴포넌트에서나 읽거나 쓸 수 있고, `atom`의 값을 읽은 컴포넌트는 즉각적으로 해당 `atom`을 구독하게됩니다. 따라서, 어떤 `atom`의 수정이 생기면 해당 atom을 구독한 모든 컴포넌트들이 리렌더될 것입니다. `useState(...)`를 전역으로 사용하는 것과 비슷합니다.

### Selector

`selector`는 파생된 상태를 의미합니다. 파생된 상태는 변형된 값을 의미하며, 현재 주어진 상태를 어떤 방식으로든 순수 함수를 이용하여 변형한 값을 생각하면 됩니다. `useMemo`를 전역으로 사용하는 것과 비슷합니다.
