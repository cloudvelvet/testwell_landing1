import { FileText, Files, UsersRound, ArrowRight } from 'lucide-react';
import { SITE_CONTENT } from '@/constants/content';

export function ProductFlow() {
  const { capabilities } = SITE_CONTENT;
  return (
    <figure className="product-flow" aria-label={capabilities.figureLabel}>
      <div className="flow-objects">
        <div className="flow-object"><FileText size={32} strokeWidth={1.3} aria-hidden="true" /><span>{capabilities.items[0].noun}</span></div>
        <div className="flow-relation"><span>{capabilities.relation}</span><ArrowRight size={26} strokeWidth={1.3} aria-hidden="true" /></div>
        <div className="flow-object"><Files size={32} strokeWidth={1.3} aria-hidden="true" /><span>{capabilities.items[1].noun}</span></div>
        <div className="flow-group"><UsersRound size={32} strokeWidth={1.3} aria-hidden="true" /><div><span>{capabilities.items[2].noun}</span><p>{capabilities.groupRelation}</p></div></div>
      </div>
      <figcaption>{capabilities.figureCaption}</figcaption>
    </figure>
  );
}
