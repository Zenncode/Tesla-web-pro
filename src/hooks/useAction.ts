import { useCallback } from 'react';
import { useNav } from '../app/NavContext';
import { useToast } from '../app/ToastContext';

/** Pair toast feedback with a navigation/action callback */
export function useAction() {
  const nav = useNav();
  const { notify } = useToast();

  const run = useCallback(
    (label: string, action?: () => void) => {
      notify(label);
      action?.();
    },
    [notify],
  );

  return { nav, notify, run };
}
