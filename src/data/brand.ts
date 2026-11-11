export interface ServiceItem {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  image: string;
  summary: string;
  diagnosticSigns: string[];
  scopePoints: string[];
  urgencyLevel: 'Emergency Available' | 'Same-Day / Next-Day' | 'Scheduled Priority';
  technicalSpecs: string;
}

export interface RegionCoverage {
  region: string;
  code: string;
  description: string;
  cities: string[];
}

export const BRAND_INFO = {
  name: 'MD Plumbing & Rooter',
  shortName: 'MD Plumbing',
  tagline: 'Plumbing POV',
  message: 'Honest work and fair pricing.',
  heroHeadline: 'WHEN PLUMBING MATTERS. WE GET IT RIGHT.',
  heroSubheadline:
    'Professional plumbing solutions, honest work and fair pricing. Proudly serving the Inland Empire and Los Angeles areas.',
  instagramUrl: 'https://www.instagram.com/mdplumbing_rooter/?hl=en',
  instagramHandle: '@mdplumbing_rooter',
  serviceAreasSummary: 'Proudly servicing all Inland Empire (IE) and Los Angeles areas.',
  colors: {
    cobalt: '#2457F5',
    aqua: '#18C6C1',
    yellow: '#FFE16B',
    mint: '#E5F7F2',
    warmWhite: '#FFFDF7',
    charcoal: '#26343D',
  },
};

export const VERIFIED_SERVICES: ServiceItem[] = [
  {
    id: 'main-line-clogs',
    name: 'Main Line Clogs',
    shortName: 'Main Line',
    tagline: 'High-output mechanical snaking & rooter clearing for sewer mainlines',
    image: '/images/service_rooter.jpg',
    summary:
      'When your entire home backs up or gurgles simultaneously, the issue sits deep in the primary sewer lateral. We deploy commercial-grade rooter cables and camera diagnostics to cut through heavy roots, grease build-up, and foreign blockages right at the cleanout.',
    diagnosticSigns: [
      'Multiple drains backing up at the same time',
      'Water rising in bathtubs when toilets flush',
      'Gurgling sounds from floor drains and base fixtures',
      'Sewage odor near exterior cleanout caps',
    ],
    scopePoints: [
      'Exterior cleanout access and pressure relief',
      'Heavy-duty drum rooter cable penetration up to street main',
      'Root cutting and heavy scale scraping',
      'Flow-test verification across all fixtures',
    ],
    urgencyLevel: 'Emergency Available',
    technicalSpecs: 'Commercial 3/4" industrial drum cables with interchangeable root-cutting blades.',
  },
  {
    id: 'plumbing-leaks',
    name: 'Plumbing Leaks',
    shortName: 'Leaks',
    tagline: 'Non-destructive leak detection and precision copper & PEX repairs',
    image: '/images/service_leak.jpg',
    summary:
      'Hidden plumbing leaks waste thousands of gallons and undermine home foundations. Using acoustic leak detection equipment and digital pressure monitoring, we pinpoint underground and in-wall pinholes without tearing your property apart unnecessarily.',
    diagnosticSigns: [
      'Unexplained spikes on your monthly water bill',
      'Warm spots on hardwood, tile, or concrete slab floors',
      'Sound of running water behind drywall with all faucets closed',
      'Damp drywall, baseboard discoloration, or musty odor',
    ],
    scopePoints: [
      'Acoustic and pressure gauge diagnostics',
      'Slab leak and in-wall pinhole isolation',
      'Precision copper soldering and press-fitting repair',
      'Post-repair pressure seal verification',
    ],
    urgencyLevel: 'Emergency Available',
    technicalSpecs: 'Digital acoustic sensor probers and calibrated hydraulic pressure test manifolds.',
  },
  {
    id: 'sewer-repairs',
    name: 'Sewer Repairs',
    shortName: 'Sewer',
    tagline: 'Camera-verified lateral restoration, spot fixes & cleanout installations',
    image: '/images/service_sewer.jpg',
    summary:
      'Damaged sewer lines cause recurring backups, ground sinkage, and structural hazards. We provide candid video inspections to show you exactly what is broken inside your pipes, followed by honest repair recommendations tailored to your home layout.',
    diagnosticSigns: [
      'Frequent sewer line clogs happening every few months',
      'Soggy or unusually lush patches in your front yard',
      'Deep cracks in exterior concrete or settling soil',
      'Sewage backup containing dirt, clay, or tree roots',
    ],
    scopePoints: [
      'High-definition fiber optic push-camera inspection',
      'Sewer line depth and location telemetry',
      'Sectional excavation or lateral replacement',
      'Dual-way exterior cleanout installation for long-term maintenance',
    ],
    urgencyLevel: 'Same-Day / Next-Day',
    technicalSpecs: 'HD color self-leveling pipe camera systems with 512Hz sonde transmitters.',
  },
  {
    id: 'water-heaters',
    name: 'Water Heater Services',
    shortName: 'Water Heaters',
    tagline: 'Tankless & high-recovery tank installations, repairs & safety valves',
    image: '/images/service_heater.jpg',
    summary:
      'From sudden cold showers to corroded tank bottoms, hot water issues disrupt everyday life. We install, repair, and maintain both ultra-efficient on-demand tankless systems and traditional gas or electric storage units with proper venting and expansion protection.',
    diagnosticSigns: [
      'Water turns lukewarm or runs cold within minutes',
      'Rusty, brown, or discolored water from hot faucets',
      'Popping, rumbling, or boiling noises from the tank',
      'Moisture, standing water, or corrosion around heater base',
    ],
    scopePoints: [
      'Tankless conversion and high-efficiency unit sizing',
      'Gas valve, thermocouple, and heating element diagnostics',
      'Temperature & Pressure (T&P) relief valve safety replacement',
      'Thermal expansion tank and sediment flush service',
    ],
    urgencyLevel: 'Same-Day / Next-Day',
    technicalSpecs: 'Navien, Rheem, and Bradford White compliant gas, electric, and tankless configurations.',
  },
  {
    id: 'toilet-installations',
    name: 'Toilet Installations',
    shortName: 'Toilets',
    tagline: 'Professional fixture mounting, flange rebuilding & zero-leak sealing',
    image: '/images/service_toilet.jpg',
    summary:
      'A poorly installed toilet can rot subfloors and invite sewer gases into your bathroom. We handle complete toilet replacements, broken closet flange repairs, premium wax ring sealing, and heavy-duty angle stop valve replacements with zero mess left behind.',
    diagnosticSigns: [
      'Wobbling or rocking toilet base on the bathroom floor',
      'Water pooling around the bottom caulking line',
      'Constant phantom flushing or trickling tank sounds',
      'Cracked porcelain, worn out bolts, or persistent sewer gas scent',
    ],
    scopePoints: [
      'Old fixture removal and sanitary disposal',
      'Closet flange inspection, repair, or cast iron / PVC replacement',
      'Reinforced wax seal or rubber gasket positioning',
      'Stainless steel braided supply line and brass quarter-turn shutoff install',
    ],
    urgencyLevel: 'Scheduled Priority',
    technicalSpecs: 'Heavy-duty closet bolts, solid brass quarter-turn valves, and reinforced seal rings.',
  },
];

export const SERVICE_REGIONS: RegionCoverage[] = [
  {
    region: 'Inland Empire (IE)',
    code: 'IE',
    description: 'Serving Riverside and San Bernardino counties with direct dispatch.',
    cities: [
      'Riverside',
      'San Bernardino',
      'Rancho Cucamonga',
      'Ontario',
      'Corona',
      'Fontana',
      'Moreno Valley',
      'Chino & Chino Hills',
      'Upland',
      'Redlands',
      'Rialto',
      'Eastvale',
    ],
  },
  {
    region: 'Los Angeles Areas (LA)',
    code: 'LA',
    description: 'Serving residential and commercial properties throughout greater LA.',
    cities: [
      'Los Angeles Metro',
      'Pasadena',
      'Glendale',
      'San Gabriel Valley',
      'Pomona Valley',
      'Downey & Norwalk',
      'South Bay Corridor',
      'Long Beach Gateway',
      'Whittier',
      'Burbank',
      'Torrance',
      'East Los Angeles',
    ],
  },
];

export const WORK_HIGHLIGHTS = [
  {
    id: 'pov-01',
    title: 'The Real Rooter Reality',
    category: 'Plumbing POV',
    tag: 'Main Line Diagnostic',
    description:
      'Heavy root balls invading clay sewer lines in older California homes. Our cameras reveal what others merely guess at before cutting.',
    image: '/images/service_rooter.jpg',
    stat: '100% Diagnostic Accuracy',
  },
  {
    id: 'pov-02',
    title: 'Pipeline Inspection Live Feed',
    category: 'Diagnostic POV',
    tag: 'Fiber Optic Telemetry',
    description:
      'Operating self-leveling color cameras inside residential sewer lines to pinpoint fractures, root intrusions, and pitch issues on-screen.',
    image: '/images/work_camera.jpg',
    stat: 'Live Screen Analysis',
  },
  {
    id: 'pov-03',
    title: 'High-Efficiency Tankless Installation',
    category: 'Modernization',
    tag: 'Navien Unit Setup',
    description:
      'Continuous endless hot water with pristine gas line sizing, dedicated condensation drains, and code-compliant combustion intake.',
    image: '/images/service_heater.jpg',
    stat: 'Endless Hot Water',
  },
  {
    id: 'pov-04',
    title: 'Trenchless Sewer Lateral Restoration',
    category: 'Sewer Repair',
    tag: 'Trenchless Pipelining',
    description:
      'Restoring compromised residential sewer pipes with heavy-duty lining equipment without tearing up landscaped driveways.',
    image: '/images/service_sewer.jpg',
    stat: 'Zero Lawn Demolition',
  },
];
