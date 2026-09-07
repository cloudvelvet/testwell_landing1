import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, FileText, ListChecks, Users } from 'lucide-react';
import { LINKS } from '@/constants/links';

const views = [
  { id: 'items', title: '문항 관리', icon: ListChecks, heading: '먼저, 질문을 준비합니다.', description: '검사에 사용할 질문은 문제은행에서 관리합니다.', action: '문제은행 열기', href: LINKS.questionBank },
  { id: 'paper', title: '검사지 구성', icon: FileText, heading: '문항을 하나의 검사로 구성합니다.', description: '검사지를 구성하는 작업은 검사지 관리에서 이어갑니다.', action: '검사지 관리하기', href: LINKS.testPapers },
  { id: 'groups', title: '그룹 관리', icon: Users, heading: '검사에 참여할 사람을 관리합니다.', description: '응답자는 그룹 관리 화면에서 정리할 수 있습니다.', action: '그룹 관리하기', href: LINKS.respondentGroups },
] as const;
const questions = ['지난 7일 동안, 공부를 시작하기 전에 할 일을 정했다.', '지난 7일 동안, 공부한 내용을 다시 살펴보았다.'];

export const TestFlowPanel: React.FC = () => {
  const [active, setActive] = useState(0);
  const view = views[active];
  return (
    <section id="workflow" aria-labelledby="workflow-title" className="work-preview">
      <div className="work-preview-topline">
        <h2 id="workflow-title">검사를 준비하는 세 가지 작업</h2>
        <span>작업 흐름 예시</span>
      </div>
      <div className="work-preview-shell">
        <div role="group" aria-label="살펴볼 작업 선택" className="work-navigation">
          <p className="work-navigation-label">WORKSPACE</p>
          {views.map((item, index) => (
            <button key={item.id} type="button" aria-pressed={active === index} aria-controls="work-stage" onClick={() => setActive(index)} className={`work-navigation-item ${active === index ? 'is-active' : ''}`}>
              <item.icon size={18} strokeWidth={1.6} aria-hidden="true" /><span>{item.title}</span><span className="work-nav-number" aria-hidden="true">0{index + 1}</span>
            </button>
          ))}
          <p className="work-navigation-note">문항을 준비하고,<br />검사지를 구성하고,<br />참여자를 관리합니다.</p>
        </div>
        <div id="work-stage" className="work-stage">
          <div className="work-stage-heading" aria-live="polite" aria-atomic="true">
            <div><p className="work-eyebrow">0{active + 1} / {view.title}</p><h3>{view.heading}</h3></div>
            <span className="work-sample-label">설명용 화면</span>
          </div>
          <div className="work-stage-content">
            <div className="work-document">
              <div className="work-document-heading"><FileText size={19} strokeWidth={1.5} aria-hidden="true" /><span>학습 습관 살펴보기</span><span className="work-document-meta">예시</span></div>
              {active === 0 && <div className="work-question-list"><p className="work-column-label">문항 내용</p>{questions.map((question, index) => <div className="work-question-row" key={question}><span className="work-question-number">Q{index + 1}</span><div><p>{question}</p><span className="work-question-tag">{index === 0 ? '계획' : '복습'} · 자기보고 문항</span></div></div>)}</div>}
              {active === 1 && <div className="work-paper"><p className="work-paper-instruction">지난 7일을 떠올리며 각 문장을 읽어주세요.</p>{questions.map((question, index) => <div key={question} className="work-paper-question"><p><span>{index + 1}.</span> {question}</p><div className="work-scale" aria-label="5단계 응답 형식 예시"><span>전혀 그렇지 않다</span><span className="work-scale-marks" aria-hidden="true">1 — 2 — 3 — 4 — 5</span><span>매우 그렇다</span></div></div>)}</div>}
              {active === 2 && <div className="work-group-list"><p className="work-column-label">응답자 그룹 이름</p>{['첫 번째 참여 그룹', '두 번째 참여 그룹'].map((name, index) => <div className="work-group-row" key={name}><Users size={22} strokeWidth={1.5} aria-hidden="true" /><div><p>{name}</p><span>그룹 {index + 1} · 설명용 이름</span></div></div>)}<p className="work-group-note">검사에 참여할 응답자를 그룹별로 정리하는 예시입니다.</p></div>}
            </div>
            <div className="work-margin-note">
              <span className="work-note-line" aria-hidden="true" />
              <h4>{active === 0 ? '질문을 다루는 곳' : active === 1 ? '검사를 다루는 곳' : '참여자를 다루는 곳'}</h4>
              <p>{view.description}</p>
              <a href={view.href}>{view.action}<ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="work-stage-footer"><span>메뉴를 선택해 각 작업을 살펴보세요.</span>{active < 2 && <button type="button" onClick={() => setActive(active + 1)}>{views[active + 1].title}<ArrowRight size={15} aria-hidden="true" /></button>}</div>
        </div>
      </div>
      <p className="work-example-caption">서비스의 작업 흐름을 설명하기 위해 재구성한 화면입니다. 예시 문항은 검증된 척도가 아닙니다.</p>
    </section>
  );
};
