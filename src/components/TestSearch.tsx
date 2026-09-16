import { useState, type FormEvent } from 'react';
import { Search } from 'lucide-react';
import { SITE_CONTENT } from '@/constants/content';
import { LINKS } from '@/constants/links';

export function TestSearch() {
  const { search } = SITE_CONTENT;
  const [error, setError] = useState('');
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const query = String(data.get('query') ?? '').trim();
    if (!query || query === '.' || query === '..') { setError(search.error); return; }
    window.location.assign(LINKS.searchTests + encodeURIComponent(query) + '/' + data.get('category'));
  }
  return <form className="test-search" role="search" aria-label={search.label} onSubmit={submit}>
    <label className="search-label" htmlFor="test-query">{search.label}</label>
    <div className="search-fields">
      <select name="category" aria-label={search.category} defaultValue="None">
        <option value="None">{search.all}</option><option value="0">{search.psychology}</option><option value="1">{search.learning}</option>
      </select>
      <input id="test-query" type="search" name="query" aria-label={search.label} placeholder={search.placeholder} onChange={() => setError('')} />
      <button type="submit" aria-label={search.submit}><Search size={20} aria-hidden="true" /><span>{search.submit}</span></button>
    </div>
    {error && <p className="search-error" role="alert">{error}</p>}
  </form>;
}
