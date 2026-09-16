import { FilePenLine, Files, UsersRound, Send, ClipboardCheck, ChartNoAxesColumn } from 'lucide-react';
import { SITE_CONTENT } from '@/constants/content';

const FEATURE_ICONS = [FilePenLine, Files, UsersRound, Send, ClipboardCheck, ChartNoAxesColumn];

export function ProductFlow() {
  const { capabilities } = SITE_CONTENT;
  return (
    <ul className="capability-circles" aria-label={capabilities.listLabel}>
      {capabilities.displayItems.map((label, index) => {
        const Icon = FEATURE_ICONS[index];
        return (
          <li key={label} className="capability-circle">
            <div className="feature-symbol"><Icon size={28} strokeWidth={1.4} aria-hidden="true" /></div>
            <span>{label}</span>
          </li>
        );
      })}
    </ul>
  );
}
