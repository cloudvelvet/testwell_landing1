import React from 'react';

export const TestFlowPanel: React.FC = () => (
  <aside aria-label="TestWell 사용 흐름" className="hidden self-end border border-white/20 bg-brand-black-card/70 p-6 lg:block">
    <p className="font-mono text-xs font-bold tracking-wider text-brand-yellow">TESTWELL / FLOW</p>
    <ol className="mt-6 space-y-0 border-t border-white/20">
      <li className="grid grid-cols-[2.5rem_1fr] border-b border-white/15 py-4">
        <span className="font-mono text-xs text-brand-yellow">01</span>
        <div>
          <p className="font-bold text-white">검사 찾기</p>
          <p className="mt-1 text-sm text-white/60">참여할 검사 선택</p>
        </div>
      </li>
      <li className="grid grid-cols-[2.5rem_1fr] border-b border-white/15 py-4">
        <span className="font-mono text-xs text-brand-yellow">02</span>
        <div>
          <p className="font-bold text-white">응답하기</p>
          <p className="mt-1 text-sm text-white/60">온라인으로 검사 실시</p>
        </div>
      </li>
      <li className="grid grid-cols-[2.5rem_1fr] py-4">
        <span className="font-mono text-xs text-brand-yellow">03</span>
        <div>
          <p className="font-bold text-white">결과 확인</p>
          <p className="mt-1 text-sm text-white/60">진행 상태와 결과 보기</p>
        </div>
      </li>
    </ol>
  </aside>
);
