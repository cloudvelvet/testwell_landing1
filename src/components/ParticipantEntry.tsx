import { useEffect, useRef, useState, type FormEvent } from 'react';
import { ChevronDown } from 'lucide-react';
import { LINKS } from '@/constants/links';
import { SITE_CONTENT } from '@/constants/content';

export function ParticipantEntry() {
  const { hero, ticketForm } = SITE_CONTENT;
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => { if (open) inputRef.current?.focus(); }, [open]);
  function submitTicket(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const code = inputRef.current?.value.trim();
    if (!code) {
      inputRef.current?.setCustomValidity(ticketForm.emptyError);
      inputRef.current?.reportValidity();
      return;
    }
    window.location.assign(LINKS.testByTicket + encodeURIComponent(code));
  }
  return (
    <div className="ticket-entry">
      <button type="button" className="secondary-entry-link" aria-expanded={open} aria-controls="ticket-form" onClick={() => setOpen(!open)}>
        {hero.ticket}<ChevronDown size={20} aria-hidden="true" />
      </button>
      <p className="entry-note">{hero.ticketNote}</p>
      <form id="ticket-form" className="ticket-form" noValidate hidden={!open} onSubmit={submitTicket}>
        <label htmlFor="ticket-code">{ticketForm.label}</label>
        <input ref={inputRef} id="ticket-code" name="ticketCode" type="text" required autoComplete="off" autoCapitalize="none" spellCheck={false} placeholder={ticketForm.placeholder} onInput={event => event.currentTarget.setCustomValidity('')} />
        <button type="submit" className="primary-link">{ticketForm.submit}</button>
        <p className="entry-note">{ticketForm.note}</p>
      </form>
    </div>
  );
}
