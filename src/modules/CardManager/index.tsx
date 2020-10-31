import React from "react";
import { of } from "rxjs";

import { useObservable } from "../../hooks/use-observable";

export function CardManager() {
  const source = ["Adam", "Brian", "Christine"];
  const names$ = of(source);
  const names = useObservable(names$);

  return (
    <div className="App">
      <h1>RxJS with React</h1>
      <div>{names}</div>
    </div>
  );
}
