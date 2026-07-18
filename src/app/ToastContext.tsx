import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

type ToastContextValue = {
  message: string | null;
  /** Show a short confirmation so every button feels responsive */
  notify: (message: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  const notify = useCallback((msg: string) => {
    setMessage(msg);
    setVisible(true);
    window.setTimeout(() => setVisible(false), 2800);
  }, []);

  const value = useMemo(() => ({ message, notify }), [message, notify]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div
        role="status"
        aria-live="polite"
        style={{
          position: 'fixed',
          bottom: 72,
          left: '50%',
          transform: `translateX(-50%) translateY(${visible ? '0' : '16px'})`,
          opacity: visible ? 1 : 0,
          pointerEvents: 'none',
          zIndex: 200,
          background: 'var(--color-carbon-dark)',
          color: 'var(--color-pure-white)',
          fontFamily: 'var(--font-text)',
          fontSize: 14,
          fontWeight: 500,
          padding: '12px 20px',
          borderRadius: 4,
          maxWidth: 'min(420px, calc(100vw - 32px))',
          textAlign: 'center',
          boxShadow: '0 8px 28px rgba(0,0,0,0.2)',
          transition: 'opacity 0.25s ease, transform 0.25s ease',
        }}
      >
        {message}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}
