import { Icon } from '../atoms/Icon';
import { Input } from '../atoms/Input';
import { useNav } from '../../app/NavContext';
import { useToast } from '../../app/ToastContext';
import { useState } from 'react';

export function ChatBar() {
  const { goProduct } = useNav();
  const { notify } = useToast();
  const [query, setQuery] = useState('');

  const ask = () => {
    const q = query.trim() || 'your question';
    notify(`Support: “${q.slice(0, 40)}${q.length > 40 ? '…' : ''}”`);
    goProduct('support', 'learn');
    setQuery('');
  };

  return (
    <div className="tds-chat" role="search" aria-label="Ask Tesla a question">
      <button
        type="button"
        className="tds-chat-action"
        aria-label="Ask a Question"
        onClick={() => {
          notify('Opening Support');
          goProduct('support');
        }}
      >
        <Icon name="chat" size={20} />
        <span>Ask a Question</span>
      </button>

      <Input
        placeholder="What's Pet Mode?"
        aria-label="Type your question"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          flex: 1,
          minWidth: 0,
          color: 'var(--color-carbon-dark)',
          padding: '8px 4px',
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') ask();
        }}
      />

      <button type="button" className="tds-icon-btn" aria-label="Send question" onClick={ask}>
        <Icon name="send" size={20} />
      </button>

      <div className="tds-chat-divider" aria-hidden />

      <button
        type="button"
        className="tds-chat-action"
        aria-label="Schedule a Drive Today"
        onClick={() => {
          notify('Schedule a Drive — Demo Drive');
          goProduct('demo-drive', 'order');
        }}
      >
        <Icon name="schedule" size={20} style={{ color: 'var(--color-electric-blue)' }} />
        <span className="tds-chat-schedule-label">Schedule a Drive Today</span>
      </button>
    </div>
  );
}
