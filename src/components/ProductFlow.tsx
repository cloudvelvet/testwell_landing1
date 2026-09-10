import { FilePenLine, Files, UsersRound, Send, ClipboardCheck, ChartNoAxesColumn } from 'lucide-react';
import { SITE_CONTENT } from '@/constants/content';

const FEATURE_ICONS = [FilePenLine, Files, UsersRound, Send, ClipboardCheck, ChartNoAxesColumn];

export function ProductFlow() {
  const { capabilities } = SITE_CONTENT;
  return (
    <ul className="capability-circles" aria-label="TestWell 주요 기능">
      {capabilities.displayItems.map((label, index) => {
        const Icon = FEATURE_ICONS[index];
        return (
          <li key={label} className="capability-circle">
            <Icon size={32} strokeWidth={1.3} aria-hidden="true" />
            <span>{label}</span>
          </li>
        );
      })}
    </ul>
  );
}
