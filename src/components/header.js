import { CounterContainer } from "../container/counter-container";

export function Header() {
  return (
    <div className="header">
      <h1 className="title">
        <span>Movie App</span>
        <CounterContainer />
      </h1>
    </div>
  );
}
