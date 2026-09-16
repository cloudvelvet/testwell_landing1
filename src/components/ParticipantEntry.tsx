import { useEffect, useRef, useState, type FormEvent } from 'react';
import { ChevronDown } from 'lucide-react';
import { LINKS } from '@/constants/links';
import { SITE_CONTENT } from '@/constants/content';

export function ParticipantEntry({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const { hero, ticketForm } = SITE_CONTENT;
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  useEffect(() => { if (open) inputRef.current?.focus(); }, [open]);
  function submitTicket(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const code = inputRef.current?.value.trim();
    if (!code) {
      setError(ticketForm.emptyError);
      inputRef.current?.focus();
      return;
    }
    // A code is one URL path segment; dot segments would navigate to the parent.
    if (code === '.' || code === '..') {
      setError(ticketForm.invalidError);
      inputRef.current?.focus();
      return;
    }
    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const destination = submitter?.value === 'result' ? LINKS.resultByTicket : LINKS.testByTicket;
    window.location.assign(destination + encodeURIComponent(code));
  }
  return (
    <div className="ticket-entry">
      <button ref={triggerRef} type="button" className="secondary-entry-link" aria-expanded={open} aria-controls="ticket-form" aria-describedby="ticket-note" onClick={() => { onOpenChange(!open); setError(''); }}>
        {hero.ticket}<ChevronDown size={20} aria-hidden="true" />
      </button>
      <p id="ticket-note" className="entry-note">{hero.ticketNote}</p>
      <form id="ticket-form" className="ticket-form" noValidate hidden={!open} onSubmit={submitTicket} onKeyDown={event => {
        if (event.key === 'Escape') { event.preventDefault(); onOpenChange(false); setError(''); triggerRef.current?.focus(); }
      }}>
        <label htmlFor="ticket-code">{ticketForm.label}</label>
        <input ref={inputRef} id="ticket-code" name="ticketCode" type="text" required autoComplete="off" autoCapitalize="none" spellCheck={false} placeholder={ticketForm.placeholder} aria-invalid={Boolean(error)} aria-describedby={error ? 'ticket-error ticket-destination' : 'ticket-destination'} onInput={() => setError('')} />
        {error && <p id="ticket-error" className="ticket-error" role="alert">{error}</p>}
        <div className="ticket-actions">
          <button type="submit" name="action" value="test" className="primary-link">{ticketForm.submit}</button>
          <button type="submit" name="action" value="result" className="ticket-result-button">{ticketForm.resultSubmit}</button>
        </div>
        <p id="ticket-destination" className="entry-note">{ticketForm.note}</p>
      </form>
    </div>
  );
}
