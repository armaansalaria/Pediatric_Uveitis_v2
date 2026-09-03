import { Accordion } from '@/components/Accordion';
import { type ReactNode } from 'react';

const faqs: { id: string; title: string; content: ReactNode }[] = [
  {
    id: 'faq1',
    title: 'What is uveitis?',
    content: <p>Uveitis means inflammation inside the eye. It can affect different parts of the eye and may affect vision.<sup className="text-teal-600 font-semibold">[1,2]</sup></p>,
  },
  {
    id: 'faq2',
    title: 'Can children get uveitis?',
    content: <p>Yes. Uveitis can occur in children. It is sometimes linked to juvenile idiopathic arthritis (JIA) but can also occur on its own.<sup className="text-teal-600 font-semibold">[6,8]</sup></p>,
  },
  {
    id: 'faq3',
    title: 'Is uveitis contagious?',
    content: <p>No. Uveitis is an inflammatory condition, not an infection. It cannot be passed from one person to another.</p>,
  },
  {
    id: 'faq4',
    title: 'Will my child lose their vision?',
    content: <p>Outlook varies. With appropriate treatment and regular monitoring, many children are well supported. However, uveitis can affect vision, which is why monitoring matters. Your clinician can discuss your child's individual outlook.<sup className="text-teal-600 font-semibold">[13,17]</sup></p>,
  },
  {
    id: 'faq5',
    title: 'Why can my child have few symptoms?',
    content: <p>In children — especially with JIA-associated uveitis — inflammation can be present without pain, redness, or complaints. This is why regular eye screening is recommended for children at risk.<sup className="text-teal-600 font-semibold">[4,7]</sup></p>,
  },
  {
    id: 'faq6',
    title: 'Can uveitis come back?',
    content: <p>Yes, uveitis can recur (return) even after it has settled. This is why ongoing monitoring is important — your eye-care team can detect a recurrence early, often before symptoms appear.<sup className="text-teal-600 font-semibold">[20]</sup></p>,
  },
  {
    id: 'faq7',
    title: 'Will treatment be needed for a long time?',
    content: <p>Some children need treatment for a short time; others need longer-term treatment to keep inflammation controlled. Your clinician will tailor this to your child and adjust over time.<sup className="text-teal-600 font-semibold">[5,20]</sup></p>,
  },
  {
    id: 'faq8',
    title: 'Why are follow-up appointments important?',
    content: <p>Inflammation can return without symptoms, and complications can develop gradually. Regular reviews allow the team to monitor, detect problems early, and adjust treatment.<sup className="text-teal-600 font-semibold">[7]</sup></p>,
  },
  {
    id: 'faq9',
    title: 'Can my child go to school?',
    content: <p>Most children with uveitis attend school normally. With your child's permission, informing the school can help staff understand any needs — such as seating position or extra time for visual tasks.</p>,
  },
  {
    id: 'faq10',
    title: 'Can my child play sport?',
    content: <p>This depends on your child's individual clinical advice. Some activities may need extra care, but many children participate fully. Ask your clinician before making changes.</p>,
  },
  {
    id: 'faq11',
    title: 'Could uveitis be linked to another condition?',
    content: <p>Yes. In children, uveitis is sometimes associated with juvenile idiopathic arthritis or other inflammatory conditions. Your clinician may suggest blood tests or a referral to investigate this.<sup className="text-teal-600 font-semibold">[4,6,12]</sup></p>,
  },
  {
    id: 'faq12',
    title: 'Why might my child need another specialist?',
    content: <p>If uveitis is linked to a systemic condition, or if treatment beyond eye drops is needed, your ophthalmologist may refer to a rheumatologist, paediatrician, or other specialist. This is collaborative care.<sup className="text-teal-600 font-semibold">[3,5]</sup></p>,
  },
  {
    id: 'faq13',
    title: 'What should I ask at the next appointment?',
    content: <p>See the <a href="#questions" className="text-teal-600 underline">Questions for Your Appointment</a> section below. You can tick the questions you want to ask and print a copy to take with you.</p>,
  },
  {
    id: 'faq14',
    title: 'When should I seek urgent help?',
    content: <p>Seek urgent assessment for sudden or significant vision reduction, severe eye pain, rapidly worsening symptoms, or significant new visual disturbance. See the <a href="#urgent" className="text-teal-600 underline">Urgent Help</a> section above for details.</p>,
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-16 bg-slate-50 scroll-mt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-sm font-bold text-teal-600 uppercase tracking-wide">Section 8</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-1">Frequently Asked Questions</h2>
        </div>
        <Accordion items={faqs} />
      </div>
    </section>
  );
}
