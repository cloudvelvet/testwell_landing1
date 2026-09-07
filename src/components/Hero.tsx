import React, { useState } from 'react';
import { ArrowRight, ClipboardList, FileCheck2, Search } from 'lucide-react';
import { LINKS } from '@/constants/links';

export const Hero: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('0');
  const search = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!keyword.trim()) return;
    window.location.assign(`${LINKS.shop}/search/title__contains/${encodeURIComponent(keyword.trim())}/${category}`);
  };
  return (
    <section id="top" aria-labelledby="hero-title" className="service-hero">
      <div className="service-hero-inner">
        <p className="service-eyebrow">TestWell · 심리검사와 학습평가</p>
        <h1 id="hero-title">필요한 검사를 찾고,<br />내 결과를 확인하세요.</h1>
        <p className="service-hero-description">심리검사부터 학습평가까지.<br className="sm:hidden" /> TestWell에서 검사를 찾아 참여할 수 있습니다.</p>
        <form className="test-search" onSubmit={search} role="search" aria-label="TestWell 검사 검색">
          <label className="sr-only" htmlFor="test-category">검사 종류</label>
          <select id="test-category" value={category} onChange={(event) => setCategory(event.target.value)}><option value="0">심리검사</option><option value="1">학습검사</option></select>
          <label className="sr-only" htmlFor="test-keyword">검사 이름</label>
          <input id="test-keyword" type="search" placeholder="검사 이름을 입력하세요" value={keyword} onChange={(event) => setKeyword(event.target.value)} required maxLength={100} />
          <button type="submit"><Search size={19} aria-hidden="true" /><span>검색</span></button>
        </form>
        <p className="search-destination">검색 결과는 TestWell 공식 사이트에서 확인합니다.</p>
        <div className="member-paths">
          <a href={LINKS.myTests}><span className="member-path-icon"><ClipboardList size={23} strokeWidth={1.5} aria-hidden="true" /></span><span><strong>내 검사</strong><small>참여할 검사가 있다면</small></span><ArrowRight size={18} aria-hidden="true" /></a>
          <a href={LINKS.result}><span className="member-path-icon"><FileCheck2 size={23} strokeWidth={1.5} aria-hidden="true" /></span><span><strong>결과 확인</strong><small>진행 상태와 결과를 보려면</small></span><ArrowRight size={18} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
};
