export interface EyePart {
  id: string;
  name: string;
  location: string;
  explanation: string;
  whyItMatters: string;
}

export const eyeParts: EyePart[] = [
  {
    id: 'sclera',
    name: 'Sclera',
    location: 'The white outer wall of the eye.',
    explanation: 'The sclera is the tough, white outer coat that protects the eye and helps maintain its shape.',
    whyItMatters: 'Inflammation of the sclera (scleritis) can cause pain and redness, but this is uncommon in children and is different from uveitis.',
  },
  {
    id: 'cornea',
    name: 'Cornea',
    location: 'The clear window at the very front of the eye.',
    explanation: 'The cornea is the transparent dome at the front that focuses light into the eye.',
    whyItMatters: 'Inflammation near the cornea can cause light sensitivity and blurred vision. Some types of uveitis affect the area just behind the cornea.',
  },
  {
    id: 'iris',
    name: 'Iris',
    location: 'The coloured part at the front of the eye.',
    explanation: 'The iris is the coloured ring that controls how much light enters, like a camera aperture.',
    whyItMatters: 'Inflammation of the iris (iritis) is the most common type of uveitis in children. It can cause a small or irregular pupil, redness, and light sensitivity.',
  },
  {
    id: 'ciliary-body',
    name: 'Ciliary Body',
    location: 'Just behind the iris, around the inside wall of the eye.',
    explanation: 'The ciliary body makes fluid inside the eye and helps the lens focus.',
    whyItMatters: 'When the ciliary body is inflamed, it can cause pain, light sensitivity, and changes in eye pressure. This area is commonly involved in pediatric uveitis.',
  },
  {
    id: 'lens',
    name: 'Lens',
    location: 'Behind the iris, focusing light onto the retina.',
    explanation: 'The lens is the clear structure behind the iris that fine-tunes focusing.',
    whyItMatters: 'Long-term inflammation or steroid treatment can cause the lens to become cloudy (cataract), which may affect vision.',
  },
  {
    id: 'vitreous',
    name: 'Vitreous',
    location: 'The clear gel filling the middle of the eye.',
    explanation: 'The vitreous is the transparent gel that fills the large central cavity of the eye.',
    whyItMatters: 'Inflammation in the vitreous (intermediate uveitis) can cause floaters and blurred vision. It is less common in young children but can occur.',
  },
  {
    id: 'retina',
    name: 'Retina',
    location: 'The light-sensitive lining at the back of the eye.',
    explanation: 'The retina is the thin layer at the back of the eye that turns light into signals the brain interprets as images.',
    whyItMatters: 'Inflammation at the back of the eye (posterior uveitis) can affect central or side vision. It may cause floaters, flashes, or vision changes.',
  },
  {
    id: 'optic-nerve',
    name: 'Optic Nerve',
    location: 'The nerve cable connecting the eye to the brain.',
    explanation: 'The optic nerve carries visual information from the retina to the brain.',
    whyItMatters: 'Severe or prolonged inflammation can sometimes affect the optic nerve, or raised eye pressure can damage it (glaucoma). Monitoring helps detect this early.',
  },
];
