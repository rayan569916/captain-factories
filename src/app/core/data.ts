/**
 * DUMMY CONTENT — every name, number and date in this file is placeholder
 * data. Replace with real figures before going live.
 */
import { Article, Capability, Factory, Leader, Milestone, Product, Stat } from './models';

export const COMPANY = {
  name: 'Captain Factories',
  parent: 'Captain International Alliance',
  tagline: 'Built in the Kingdom. Delivered to site.',
  phone: '+966 11 000 0000',
  email: 'factories@captain-alliance.example',
  address: 'Industrial City 2, Plot 14, Riyadh, Saudi Arabia',
  hours: 'Sun–Thu, 8:00–17:00 AST',
};

export const ANNOUNCEMENT = {
  text: 'New: Precast Plant 2 in Dammam is now accepting orders for Q1 2027.',
  linkText: 'See capacity',
  link: '/factories/precast-concrete',
};

export const HEADLINE_STATS: Stat[] = [
  { value: '5', label: 'Factories' },
  { value: '186,000 m²', label: 'Production floor' },
  { value: '1,240', label: 'Skilled staff' },
  { value: '14', label: 'Export markets' },
];

export const FACTORIES: Factory[] = [
  {
    slug: 'aluminium-extrusion',
    name: 'Captain Aluminium Extrusion',
    short: 'Aluminium',
    division: 'Metals',
    icon: 'aluminium',
    city: 'Riyadh',
    area: '42,000 m²',
    established: 2014,
    headcount: 310,
    capacity: '18,000 t / year',
    summary: 'Profiles, curtain-wall systems and powder-coated sections for façades and fit-out.',
    description:
      'Three extrusion presses from 1,800 to 3,600 tonnes feed an in-house anodising and powder-coating line. We extrude to customer dies or supply our own Captain Series window and curtain-wall systems, cut and machined to project schedules.',
    lines: [
      '3 extrusion presses (1,800 t · 2,500 t · 3,600 t)',
      'Vertical powder-coating line, 180+ RAL colours',
      'Anodising up to 7 m length',
      'CNC machining and thermal-break assembly',
    ],
    certifications: ['ISO 9001:2015', 'Qualicoat Class 2', 'SASO Certified'],
    stats: [
      { value: '18,000 t', label: 'Annual capacity' },
      { value: '7 m', label: 'Max profile length' },
      { value: '180+', label: 'RAL colours' },
    ],
  },
  {
    slug: 'glass-processing',
    name: 'Captain Glass Processing',
    short: 'Glass',
    division: 'Glazing',
    icon: 'glass',
    city: 'Jeddah',
    area: '36,000 m²',
    established: 2016,
    headcount: 260,
    capacity: '1.2 M m² / year',
    summary: 'Tempered, laminated and insulated glass units for high-rise and villa projects.',
    description:
      'A fully automated line cuts, edges, tempers and laminates architectural glass up to 3.3 × 6 m. Double- and triple-glazed units are assembled in a clean room, with low-E and solar-control coatings sourced from tier-one float suppliers.',
    lines: [
      'Horizontal tempering furnace, 3.3 × 6 m',
      'PVB and SGP lamination autoclave',
      'Insulated glass unit line with argon fill',
      'Digital ceramic printing for fritted glass',
    ],
    certifications: ['ISO 9001:2015', 'EN 12150', 'EN 1279', 'SASO Certified'],
    stats: [
      { value: '1.2 M m²', label: 'Annual capacity' },
      { value: '3.3 × 6 m', label: 'Max sheet size' },
      { value: '48 h', label: 'Fast-track tempering' },
    ],
  },
  {
    slug: 'steel-fabrication',
    name: 'Captain Steel Fabrication',
    short: 'Steel',
    division: 'Metals',
    icon: 'steel',
    city: 'Jubail',
    area: '48,000 m²',
    established: 2012,
    headcount: 340,
    capacity: '30,000 t / year',
    summary: 'Structural steel, pre-engineered buildings and industrial platforms.',
    description:
      'Our largest facility fabricates structural members, pre-engineered buildings and process-plant steel for industrial and infrastructure clients. Beam lines, plate processing and robotic welding cells run on two shifts with full traceability from mill certificate to site delivery.',
    lines: [
      'CNC beam drilling and sawing lines',
      'Plasma and oxy-fuel plate cutting to 150 mm',
      '6 robotic welding cells',
      'Shot-blasting and multi-coat paint shop',
    ],
    certifications: ['ISO 9001:2015', 'ISO 3834-2', 'AWS D1.1', 'SASO Certified'],
    stats: [
      { value: '30,000 t', label: 'Annual capacity' },
      { value: '150 mm', label: 'Max plate thickness' },
      { value: '40 t', label: 'Overhead crane' },
    ],
  },
  {
    slug: 'precast-concrete',
    name: 'Captain Precast Concrete',
    short: 'Precast',
    division: 'Concrete',
    icon: 'concrete',
    city: 'Dammam',
    area: '38,000 m²',
    established: 2018,
    headcount: 220,
    capacity: '85,000 m³ / year',
    summary: 'Hollow-core slabs, façade panels, boundary walls and utility structures.',
    description:
      'Two batching plants and long-line prestressing beds produce hollow-core slabs, architectural façade panels and modular utility structures. Plant 2, opened in 2026, doubles our capacity for villa and housing programmes.',
    lines: [
      '2 automated batching plants',
      '120 m long-line prestressing beds',
      'Architectural finishes: acid-etched, sandblasted, exposed aggregate',
      'Steam curing for 24-hour mould turnaround',
    ],
    certifications: ['ISO 9001:2015', 'ISO 14001:2015', 'SASO Certified'],
    stats: [
      { value: '85,000 m³', label: 'Annual capacity' },
      { value: '120 m', label: 'Prestressing beds' },
      { value: '24 h', label: 'Mould turnaround' },
    ],
  },
  {
    slug: 'architectural-hardware',
    name: 'Captain Architectural Hardware',
    short: 'Hardware',
    division: 'Hardware',
    icon: 'hardware',
    city: 'Riyadh',
    area: '22,000 m²',
    established: 2020,
    headcount: 110,
    capacity: '2.4 M units / year',
    summary: 'Glass fittings, patch fittings, spider systems and door hardware — own brand or white label.',
    description:
      'Stainless-steel and brass hardware for frameless glass, shower enclosures and entrance systems. Every SKU can be produced under the Captain brand or packed and laser-marked under a client label for distributors across the GCC.',
    lines: [
      'CNC turning and 5-axis milling',
      'Investment casting for 304 / 316 stainless',
      'PVD colour finishing (gold, black, champagne)',
      'Laser marking and private-label packing',
    ],
    certifications: ['ISO 9001:2015', 'EN 1906', 'SASO Certified'],
    stats: [
      { value: '2.4 M', label: 'Units per year' },
      { value: '900+', label: 'Catalogue SKUs' },
      { value: '500', label: 'White-label MOQ' },
    ],
  },
];

export const PRODUCTS: Product[] = [
  { id: 'P-1001', name: 'CS-60 Thermal-Break Window System', factorySlug: 'aluminium-extrusion', category: 'Aluminium', spec: '60 mm depth · Uw 1.6', leadTime: '3–4 weeks', moq: '500 kg', whiteLabel: true },
  { id: 'P-1002', name: 'CW-150 Unitised Curtain Wall', factorySlug: 'aluminium-extrusion', category: 'Aluminium', spec: '150 mm mullion · 1,500 Pa', leadTime: '6–8 weeks', moq: 'Project', whiteLabel: false },
  { id: 'P-1003', name: 'Powder-Coated Louvre Blade', factorySlug: 'aluminium-extrusion', category: 'Aluminium', spec: '100 / 150 / 200 mm', leadTime: '2 weeks', moq: '300 m', whiteLabel: true },
  { id: 'P-2001', name: 'Tempered Safety Glass', factorySlug: 'glass-processing', category: 'Glass', spec: '4–19 mm · EN 12150', leadTime: '5 days', moq: '50 m²', whiteLabel: false },
  { id: 'P-2002', name: 'Laminated SGP Balustrade Glass', factorySlug: 'glass-processing', category: 'Glass', spec: '10.76–21.52 mm', leadTime: '2 weeks', moq: '30 m²', whiteLabel: false },
  { id: 'P-2003', name: 'Low-E Double-Glazed Unit', factorySlug: 'glass-processing', category: 'Glass', spec: '6-16-6 · argon · U 1.3', leadTime: '2–3 weeks', moq: '100 m²', whiteLabel: false },
  { id: 'P-3001', name: 'Pre-Engineered Warehouse Frame', factorySlug: 'steel-fabrication', category: 'Steel', spec: 'Spans to 60 m', leadTime: '6 weeks', moq: 'Project', whiteLabel: false },
  { id: 'P-3002', name: 'Structural Beam Package', factorySlug: 'steel-fabrication', category: 'Steel', spec: 'S275 / S355 · galvanised', leadTime: '4 weeks', moq: '20 t', whiteLabel: false },
  { id: 'P-4001', name: 'Hollow-Core Slab HC-200', factorySlug: 'precast-concrete', category: 'Precast', spec: '200 mm · spans to 10 m', leadTime: '3 weeks', moq: '200 m²', whiteLabel: false },
  { id: 'P-4002', name: 'Architectural Façade Panel', factorySlug: 'precast-concrete', category: 'Precast', spec: 'Acid-etched · 150 mm', leadTime: '5 weeks', moq: 'Project', whiteLabel: false },
  { id: 'P-4003', name: 'Precast Boundary Wall', factorySlug: 'precast-concrete', category: 'Precast', spec: '2.4 m / 3.0 m height', leadTime: '2 weeks', moq: '100 m', whiteLabel: false },
  { id: 'P-5001', name: 'Glass Patch Fitting Set', factorySlug: 'architectural-hardware', category: 'Hardware', spec: 'SS316 · 10–12 mm glass', leadTime: '10 days', moq: '500 units', whiteLabel: true },
  { id: 'P-5002', name: 'Spider Fitting 4-Arm', factorySlug: 'architectural-hardware', category: 'Hardware', spec: 'SS316 · 200 / 250 mm', leadTime: '2 weeks', moq: '500 units', whiteLabel: true },
  { id: 'P-5003', name: 'Hydraulic Floor Spring', factorySlug: 'architectural-hardware', category: 'Hardware', spec: 'Up to 150 kg · EN 1154', leadTime: '3 weeks', moq: '200 units', whiteLabel: true },
  { id: 'P-5004', name: 'PVD Shower Hinge', factorySlug: 'architectural-hardware', category: 'Hardware', spec: '90° / 180° · 8–10 mm', leadTime: '10 days', moq: '500 units', whiteLabel: true },
];

export const CAPABILITIES: Capability[] = [
  { icon: 'ruler', title: 'Design to spec', body: 'Our engineers review shop drawings, propose value-engineering and produce to your tolerances.' },
  { icon: 'box', title: 'White-label production', body: 'Any catalogue product can be produced, marked and packed under your own brand.' },
  { icon: 'flask', title: 'In-house testing', body: 'Load, impact, salt-spray and coating-thickness tests run on every batch before dispatch.' },
  { icon: 'truck', title: 'Delivery to site', body: 'Our own fleet and Captain Cargo partners deliver sequenced loads across the GCC.' },
  { icon: 'shield', title: 'Full traceability', body: 'Every item carries a batch code linked to raw-material certificates and QC records.' },
  { icon: 'leaf', title: 'Lower-carbon options', body: 'Recycled-content aluminium and low-clinker concrete mixes on request.' },
];

export const PROCESS_STEPS = [
  { step: '01', title: 'Send your BOQ', body: 'Share drawings, quantities and target dates. We reply within two working days.' },
  { step: '02', title: 'Engineering review', body: 'We confirm specs, propose alternatives and issue a fixed-price quotation.' },
  { step: '03', title: 'Production', body: 'Your order is scheduled across our factories with weekly progress reports.' },
  { step: '04', title: 'QC and delivery', body: 'Tested, documented and delivered to site in the sequence you need.' },
];

export const CLIENTS = [
  'Al Noor Developments',
  'Gulf Axis Contracting',
  'Riyadh Builders Co.',
  'Najd Towers',
  'Red Sea Habitat',
  'Eastern Infra Group',
  'Qasr Interiors',
  'Delta Façades',
  'Sahara MEP',
  'Crescent Homes',
  'Oasis Retail',
  'Hijaz Estates',
];

export const INDUSTRIES = [
  'High-rise residential',
  'Villas and housing programmes',
  'Hospitality and retail',
  'Industrial and logistics',
  'Healthcare and education',
  'Infrastructure and utilities',
];

export const ARTICLES: Article[] = [
  {
    slug: 'precast-plant-2',
    title: 'Precast Plant 2 opens in Dammam, doubling slab capacity',
    excerpt: 'The new 20,000 m² plant adds two prestressing beds and a second batching plant for housing programmes.',
    category: 'Company',
    date: '2026-09-10',
    readMinutes: 3,
    icon: 'concrete',
  },
  {
    slug: 'qualicoat-class-2',
    title: 'Aluminium coating line achieves Qualicoat Class 2',
    excerpt: 'Higher UV and weathering performance for façades in coastal and desert climates.',
    category: 'Quality',
    date: '2026-08-22',
    readMinutes: 4,
    icon: 'aluminium',
  },
  {
    slug: 'white-label-hardware',
    title: 'How white-label hardware works with Captain',
    excerpt: 'From MOQ to laser marking and retail packaging — a walkthrough for distributors.',
    category: 'Guide',
    date: '2026-07-30',
    readMinutes: 6,
    icon: 'hardware',
  },
  {
    slug: 'sgp-balustrades',
    title: 'Choosing between PVB and SGP for glass balustrades',
    excerpt: 'Post-breakage behaviour, edge stability and cost — what specifiers should know.',
    category: 'Technical',
    date: '2026-07-08',
    readMinutes: 5,
    icon: 'glass',
  },
  {
    slug: 'robotic-welding',
    title: 'Six new robotic welding cells go live in Jubail',
    excerpt: 'Faster throughput and repeatable weld quality for structural steel packages.',
    category: 'Company',
    date: '2026-06-15',
    readMinutes: 3,
    icon: 'steel',
  },
  {
    slug: 'saudi-made',
    title: 'Local content: why Saudi-made materials matter for your tender',
    excerpt: 'How locally manufactured materials help projects meet local-content targets.',
    category: 'Insight',
    date: '2026-05-28',
    readMinutes: 5,
    icon: 'factory',
  },
];

export const MILESTONES: Milestone[] = [
  { year: '2012', title: 'Steel fabrication begins', body: 'First factory opens in Jubail serving industrial clients.' },
  { year: '2014', title: 'Aluminium extrusion', body: 'Riyadh extrusion plant opens with two presses.' },
  { year: '2016', title: 'Glass processing', body: 'Jeddah glass plant brings tempering and lamination in-house.' },
  { year: '2018', title: 'Precast concrete', body: 'Dammam precast plant starts hollow-core production.' },
  { year: '2020', title: 'Architectural hardware', body: 'Hardware factory launches with white-label programme.' },
  { year: '2026', title: 'Precast Plant 2', body: 'Capacity doubled for national housing programmes.' },
];

export const VALUES = [
  { title: 'Made to last', body: 'We build for 50-year buildings in harsh climates, and test like it.' },
  { title: 'On schedule', body: 'Project timelines drive our production planning, not the other way round.' },
  { title: 'Open books', body: 'Clear pricing, clear lead times and full QC documentation with every delivery.' },
];

export const LEADERS: Leader[] = [
  { name: 'Faisal Al-Harbi', role: 'Managing Director', initials: 'FH' },
  { name: 'Sara Al-Qahtani', role: 'Director of Operations', initials: 'SQ' },
  { name: 'Omar Siddiqui', role: 'Head of Engineering', initials: 'OS' },
  { name: 'Lina Haddad', role: 'Head of Quality', initials: 'LH' },
];

export const FOOTER_LINKS = [
  {
    title: 'Factories',
    links: FACTORIES.map((f) => ({ label: f.short, path: `/factories/${f.slug}` })),
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', path: '/about' },
      { label: 'News', path: '/news' },
      { label: 'Careers', path: '/about' },
      { label: 'Quality', path: '/about' },
    ],
  },
  {
    title: 'Customers',
    links: [
      { label: 'Products', path: '/products' },
      { label: 'White label', path: '/products' },
      { label: 'Request a quote', path: '/contact' },
      { label: 'Contact', path: '/contact' },
    ],
  },
];
