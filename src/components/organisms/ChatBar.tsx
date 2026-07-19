import { Icon } from '../atoms/Icon';
import { Input } from '../atoms/Input';
import { useNav } from '../../app/NavContext';
import { useToast } from '../../app/ToastContext';
import { useState } from 'react';

/** Keyword routing for the bottom “Ask a Question” bar */
function routeQuery(q: string): { notify: string; go: (nav: ReturnType<typeof useNav>) => void } {
  const s = q.toLowerCase();

  if (/\b(compare|vs|versus|which model|help me choose)\b/.test(s)) {
    return { notify: 'Opening Compare', go: (n) => n.goCompare() };
  }
  if (/\b(trade[- ]?in|estimate|appraisal)\b/.test(s)) {
    return { notify: 'Opening Trade-in', go: (n) => n.goTradeIn() };
  }
  if (/\b(inventory|in stock|available|pre-?owned|used)\b/.test(s)) {
    return {
      notify: 'Opening Inventory',
      go: (n) => n.goInventory(/\b(used|pre-?owned)\b/.test(s) ? 'used' : 'new'),
    };
  }
  if (/\b(trip|route|supercharger map|plan)\b/.test(s)) {
    return { notify: 'Opening Trip Planner', go: (n) => n.goTrip() };
  }
  if (/\b(offer|apr|lease|0\.99|financing)\b/.test(s)) {
    return { notify: 'Opening Offers', go: (n) => n.goOffers() };
  }
  if (/\b(shop|apparel|accessory|accessories|wall connector)\b/.test(s)) {
    return { notify: 'Opening Shop', go: (n) => n.goShop() };
  }
  if (/\b(solar|powerwall|megapack|energy|roof)\b/.test(s)) {
    return { notify: 'Opening Energy', go: (n) => n.goEnergy() };
  }
  if (/\b(charg|supercharg|wall connector|home charg)\b/.test(s)) {
    return { notify: 'Opening Charging', go: (n) => n.goChargingHub() };
  }
  if (/\b(demo|test drive|drive today|schedule)\b/.test(s)) {
    return { notify: 'Demo Drive', go: (n) => n.goProduct('demo-drive', 'order') };
  }
  if (/\b(fsd|self-?driving|autopilot|pet mode)\b/.test(s)) {
    return { notify: 'Full Self-Driving', go: (n) => n.goProduct('fsd', 'learn') };
  }
  if (/\b(cybertruck|cyber truck)\b/.test(s)) {
    return { notify: 'Cybertruck', go: (n) => n.goProduct('cybertruck', 'learn') };
  }
  if (/\bmodel\s*y\s*l\b|\by l premium\b/.test(s)) {
    return { notify: 'Model Y L', go: (n) => n.goProduct('model-y-l', 'learn') };
  }
  if (/\bmodel\s*3\b/.test(s)) {
    return { notify: 'Model 3', go: (n) => n.goProduct('model-3', 'learn') };
  }
  if (/\bmodel\s*y\b/.test(s)) {
    return { notify: 'Model Y', go: (n) => n.goProduct('model-y', 'learn') };
  }
  if (/\bmodel\s*s\b/.test(s)) {
    return { notify: 'Model S', go: (n) => n.goProduct('model-s', 'learn') };
  }
  if (/\bmodel\s*x\b/.test(s)) {
    return { notify: 'Model X', go: (n) => n.goProduct('model-x', 'learn') };
  }
  if (/\b(insurance|military|event|story|stories|discover)\b/.test(s)) {
    return { notify: 'Discover', go: (n) => n.goDiscover() };
  }
  if (/\b(design|configure|order)\b/.test(s)) {
    return { notify: 'Design Studio', go: (n) => n.goDesign('model-3') };
  }

  return { notify: `Support: “${q.slice(0, 40)}${q.length > 40 ? '…' : ''}”`, go: (n) => n.goProduct('support', 'learn') };
}

export function ChatBar() {
  const nav = useNav();
  const { notify } = useToast();
  const [query, setQuery] = useState('');

  const ask = () => {
    const q = query.trim() || 'your question';
    const route = routeQuery(q);
    notify(route.notify);
    route.go(nav);
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
          nav.goProduct('support');
        }}
      >
        <Icon name="chat" size={20} />
        <span>Ask a Question</span>
      </button>

      <Input
        placeholder="Compare Model 3 and Model Y"
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
          nav.goProduct('demo-drive', 'order');
        }}
      >
        <Icon name="schedule" size={20} style={{ color: 'var(--color-electric-blue)' }} />
        <span className="tds-chat-schedule-label">Schedule a Drive Today</span>
      </button>
    </div>
  );
}
