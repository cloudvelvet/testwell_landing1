import { useEffect, useRef, useState, type FormEvent } from 'react';
import { ChevronDown } from 'lucide-react';
import { LINKS } from '@/constants/links';
import { SITE_CONTENT } from '@/constants/content';

export function ParticipantEntry() {
  const { hero } = SITE_CONTENT;
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => { if (open) inputRef.current?.focus(); }, [open]);
  function submitTicket(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const code = inputRef.current?.value.trim();
    if (!code) {
      inputRef.current?.setCustomValidity('응시권 코드를 입력해 주세요.');
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
      <form id="ticket-form" className="ticket-form" hidden={!open} onSubmit={submitTicket}>
        <label htmlFor="ticket-code">응시권 코드</label>
        <input ref={inputRef} id="ticket-code" name="ticketCode" type="text" required autoComplete="off" autoCapitalize="none" spellCheck={false} placeholder="코드를 입력하세요" onInput={event => event.currentTarget.setCustomValidity('')} />
        <button type="submit" className="primary-link">검사 시작</button>
        <p className="entry-note">TestWell 공식 서비스로 이동합니다.</p>
      </form>
    </div>
  );
}
