import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { LINKS } from '@/constants/links';

export const WhatIsTestWell: React.FC = () => (
  <section id="about" className="creator-section" aria-labelledby="creator-title">
    <div><p className="section-kicker">FOR CREATORS</p><h2 id="creator-title">검사를 직접<br />만들고 운영하나요?</h2><p className="creator-description">문항과 검사지를 준비하고<br />응답자 그룹을 관리할 수 있습니다.</p></div>
    <div className="creator-links">{[{name:'문제은행',description:'검사에 사용할 문항 관리',href:LINKS.questionBank},{name:'검사지',description:'문항을 모아 검사지 구성',href:LINKS.testPapers},{name:'그룹관리',description:'검사에 참여할 응답자 관리',href:LINKS.respondentGroups}].map((item)=><a key={item.name} href={item.href}><span><strong>{item.name}</strong><small>{item.description}</small></span><ArrowUpRight size={26} strokeWidth={1.5} aria-hidden="true" /></a>)}</div>
  </section>
);
