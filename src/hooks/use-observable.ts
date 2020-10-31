import { useEffect, useState } from "react";
import { Observable } from "rxjs";

export function useObservable(observable: Observable<any>) {
  const [state, setState] = useState();

  useEffect(() => {
    const sub = observable.subscribe(setState);
    return () => sub.unsubscribe();
  }, [observable]);

  return state;
}
