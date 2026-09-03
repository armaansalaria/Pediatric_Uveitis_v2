export interface TrustedResource {
  name: string;
  description: string;
  url: string;
  category: 'australian' | 'clinical' | 'patient' | 'indigenous' | 'professional' | 'further';
}

export const trustedResources: TrustedResource[] = [
  {
    name: 'Optometry Australia',
    description: 'Peak body for Australian optometrists — information on eye exams, scope of practice, and finding a local optometrist.',
    url: 'https://www.optometry.org.au',
    category: 'australian',
  },
  {
    name: 'RANZCO — Royal Australian and New Zealand College of Ophthalmologists',
    description: 'Professional body for ophthalmologists in Australia and New Zealand — clinical guidelines and patient information.',
    url: 'https://www.ranzco.edu',
    category: 'australian',
  },
  {
    name: 'Centre for Eye Health (UNSW)',
    description: 'A collaborative eye-imaging and assessment centre offering advanced diagnostic services in New South Wales.',
    url: 'https://www.centreforeyehealth.com.au',
    category: 'australian',
  },
  {
    name: 'Vision 2020 Australia',
    description: 'National peak body for the eye-health and vision-care sector — policy, advocacy, and Indigenous eye-health programs.',
    url: 'https://www.vision2020australia.org.au',
    category: 'australian',
  },
  {
    name: 'Australian Institute of Health and Welfare — Eye Health',
    description: 'Government data and reports on eye health, including children and Aboriginal and Torres Strait Islander eye health.',
    url: 'https://www.aihw.gov.au/reports/children-youth/eye-health',
    category: 'clinical',
  },
  {
    name: 'Pediatric Rheumatology Online Journal',
    description: 'Open-access journal publishing peer-reviewed research on childhood rheumatic diseases, including JIA-associated uveitis.',
    url: 'https://ped-rheum.biomedcentral.com',
    category: 'clinical',
  },
  {
    name: 'Vision Australia',
    description: 'National service provider for people who are blind or have low vision — practical support, assistive technology, and advice.',
    url: 'https://www.visionaustralia.org',
    category: 'patient',
  },
  {
    name: 'The Fred Hollows Foundation',
    description: 'Works to end avoidable blindness, including programs supporting Aboriginal and Torres Strait Islander eye health.',
    url: 'https://www.fredhollows.org',
    category: 'patient',
  },
  {
    name: 'Ocular Immunology and Uveitis Foundation (OIUF)',
    description: 'Dedicated uveitis education and research foundation — patient-friendly information about uveitis and its treatment.',
    url: 'https://uveitis.org',
    category: 'patient',
  },
  {
    name: 'Versus Arthritis — JIA & Uveitis',
    description: 'UK charity providing family-friendly information on juvenile idiopathic arthritis and associated uveitis.',
    url: 'https://www.versusarthritis.org',
    category: 'patient',
  },
  {
    name: 'Indigenous Eye Health, University of Melbourne',
    description: 'Leads the Roadmap to Close the Gap for Vision — evidence-based initiatives to improve Aboriginal and Torres Strait Islander eye health.',
    url: 'https://iehu.org.au',
    category: 'indigenous',
  },
  {
    name: 'AIHW — Aboriginal and Torres Strait Islander Eye Health',
    description: 'Government reports on the eye health of Aboriginal and Torres Strait Islander peoples, including access and outcomes data.',
    url: 'https://www.aihw.gov.au/reports/indigenous-australians/eye-health',
    category: 'indigenous',
  },
  {
    name: 'Optometry Australia — Outreach Optometry',
    description: 'Information on visiting optometry services and outreach programs supporting remote and Indigenous communities.',
    url: 'https://www.optometry.org.au',
    category: 'indigenous',
  },
  {
    name: 'American Uveitis Society',
    description: 'Professional society of uveitis specialists — research and educational resources for clinicians and patients.',
    url: 'https://www.uveitissociety.org',
    category: 'professional',
  },
  {
    name: 'Royal College of Ophthalmologists (UK)',
    description: 'Clinical guidelines for the management of uveitis — useful reference for evidence-based practice.',
    url: 'https://www.rcophth.ac.uk',
    category: 'professional',
  },
  {
    name: 'World Health Organization — World Report on Vision',
    description: 'Global perspective on eye health, vision impairment, and integrated people-centred eye care.',
    url: 'https://www.who.int/publications/i/item/9789241516570',
    category: 'further',
  },
];
