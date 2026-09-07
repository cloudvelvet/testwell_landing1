import React from 'react';
import { ArrowRight, ArrowUpRight, BookOpen, ClipboardList } from 'lucide-react';
import { LINKS } from '@/constants/links';

const tests = [
  { title: '단순우울검사', id: 4, icon: ClipboardList },
  { title: '왕 기초수학', id: 5, icon: BookOpen },
  { title: '낮반 퀴즈', id: 6, icon: BookOpen },
  { title: '사회도덕성 검사', id: 16, icon: ClipboardList },
];

export const TestCatalog: React.FC = () => (
  <section id="tests" aria-labelledby="tests-title" className="test-catalog">
    <div className="catalog-heading"><div><p>TESTWELL TESTS</p><h2 id="tests-title">검사 둘러보기</h2></div><a href={LINKS.shop}>전체 검사 보기<ArrowRight size={17} aria-hidden="true" /></a></div>
    <p className="catalog-description">공식 사이트에 등록된 검사입니다. 검사 정보와 구매 조건은 상품 페이지에서 확인하세요.</p>
    <div className="catalog-grid">{tests.map(({title, id, icon: Icon}) => <a className="catalog-test" href={`${LINKS.shop}/${id}`} key={id}><div className="catalog-cover"><Icon size={37} strokeWidth={1.2} aria-hidden="true" /><span>TestWell</span></div><div className="catalog-test-body"><h3>{title}</h3><p>검사 정보 보기<ArrowUpRight size={16} aria-hidden="true" /></p></div></a>)}</div>
    <p className="catalog-note">검사 목록은 2026.09.07 공개 페이지 기준입니다.</p>
  </section>
);
