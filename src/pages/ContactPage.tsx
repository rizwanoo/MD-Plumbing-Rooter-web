import React, { useState } from 'react';
import { z } from 'zod';
import { BRAND_INFO, VERIFIED_SERVICES, SERVICE_REGIONS } from '../data/brand';
import { ArrowUpRight, Instagram, CheckCircle2, Send, MapPin, AlertCircle } from 'lucide-react';

interface ContactPageProps {
  initialServiceId?: string;
  onNavigate: (page: 'home' | 'services' | 'work' | 'about' | 'contact') => void;
}

// Dedicated Zod Schema for Client-Side Validation
const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Full name must contain at least 2 characters')
    .max(80, 'Full name cannot exceed 80 characters'),
  phone: z
    .string()
    .trim()
    .regex(
      /^(\+?1[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/,
      'Please enter a valid 10-digit US telephone number (e.g. 909-555-0192)'
    ),
  email: z
    .string()
    .trim()
    .email('Please enter a valid email address (e.g. resident@gmail.com)'),
  address: z
    .string()
    .trim()
    .min(5, 'Service address must include street name and house number')
    .max(120, 'Address is too long'),
  city: z
    .string()
    .trim()
    .min(2, 'City name is required (e.g. Riverside, Ontario, Pasadena)'),
  region: z.enum(['Inland Empire', 'Los Angeles', 'Other'] as const),
  serviceType: z
    .string()
    .min(1, 'Please select the primary plumbing service needed'),
  urgency: z.enum(['Emergency (Immediate)', '24-48 Hours', 'Scheduled / Estimate'] as const),
  contactPreference: z.enum(['Phone Call', 'Text Message', 'Email'] as const),
  notes: z
    .string()
    .max(1000, 'Description cannot exceed 1000 characters')
    .optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactPage: React.FC<ContactPageProps> = ({ initialServiceId, onNavigate }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    region: 'Inland Empire',
    serviceType: initialServiceId || 'main-line-clogs',
    urgency: '24-48 Hours',
    contactPreference: 'Phone Call',
    notes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    id: string;
    timestamp: string;
    details: ContactFormData;
  } | null>(null);

  const handleFieldChange = <K extends keyof ContactFormData>(
    field: K,
    value: ContactFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationResult = contactFormSchema.safeParse(formData);

    if (!validationResult.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      for (const issue of validationResult.error.issues) {
        const fieldName = issue.path[0] as keyof ContactFormData;
        if (!fieldErrors[fieldName]) {
          fieldErrors[fieldName] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      const ticketId = `MD-${Math.floor(100000 + Math.random() * 900000)}`;
      const timestamp = new Date().toLocaleString('en-US', {
        timeZone: 'America/Los_Angeles',
        dateStyle: 'medium',
        timeStyle: 'short',
      });

      setSubmittedData({
        id: ticketId,
        timestamp: `${timestamp} (PT)`,
        details: validationResult.data,
      });

      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 600);
  };

  return (
    <div className="w-full bg-[#FFFDF7] text-[#1E282E] pt-24 sm:pt-28 selection:bg-[#FFE16B] overflow-x-hidden">
      {/* Header Banner */}
      <section className="bg-[#121A1F] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 hairline-b border-white/20">
        <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-[#FFE16B]">
            <span>Direct Dispatch</span>
            <span className="text-white/40">·</span>
            <span>Inland Empire &amp; Los Angeles</span>
            <span className="text-white/40">·</span>
            <span className="text-[#18C6C1]">Honest Work &amp; Fair Pricing</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-7xl tracking-tight leading-[1.05]">
            Request Service &amp; Dispatch Confirmation
          </h1>

          <p className="text-[17px] sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
            Submit your plumbing service inquiry. We review each ticket directly with honest
            assessments, straightforward pricing, and prompt response across the Inland Empire and LA.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto hairline-b">
        {submittedData ? (
          /* Confirmed Service Ticket Receipt */
          <div className="max-w-3xl mx-auto space-y-6 animate-fadeIn">
            <div className="p-6 sm:p-12 bg-[#121A1F] text-white space-y-6 border-t-4 border-[#2457F5]">
              <div className="flex items-center gap-3.5 text-[#18C6C1]">
                <CheckCircle2 className="w-8 h-8 text-[#18C6C1] shrink-0" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#FFE16B] font-semibold">
                    Inquiry Validated &amp; Received
                  </span>
                  <h2 className="font-heading font-extrabold text-2xl sm:text-3xl tracking-tight">
                    Service Ticket #{submittedData.id}
                  </h2>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                Thank you, <strong>{submittedData.details.fullName}</strong>. Your plumbing request has
                been validated and logged with our dispatch crew.
              </p>

              {/* Receipt Breakdown */}
              <div className="hairline-t hairline-b border-white/20 py-5 space-y-3 text-sm">
                <div className="flex justify-between py-1">
                  <span className="text-slate-400 font-medium">Timestamp:</span>
                  <span className="text-white font-normal">{submittedData.timestamp}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400 font-medium">Service:</span>
                  <span className="text-[#FFE16B] font-semibold">
                    {VERIFIED_SERVICES.find((s) => s.id === submittedData.details.serviceType)?.name ||
                      submittedData.details.serviceType}
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400 font-medium">Priority:</span>
                  <span className="text-white font-semibold">{submittedData.details.urgency}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400 font-medium">Address:</span>
                  <span className="text-white text-right font-normal">
                    {submittedData.details.address}, {submittedData.details.city} ({submittedData.details.region})
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400 font-medium">Phone:</span>
                  <span className="text-white font-normal">{submittedData.details.phone}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400 font-medium">Preferred Contact:</span>
                  <span className="text-[#18C6C1] font-semibold">{submittedData.details.contactPreference}</span>
                </div>
                {submittedData.details.notes && (
                  <div className="pt-2 text-slate-300">
                    <span className="text-slate-400 block mb-1 font-medium">Issue Description:</span>
                    <p className="italic bg-white/5 p-3 rounded-xs text-sm">{submittedData.details.notes}</p>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  onClick={() => setSubmittedData(null)}
                  className="text-sm font-semibold text-slate-300 hover:text-white underline cursor-pointer"
                >
                  ← Submit Another Inquiry
                </button>

                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2457F5] text-white px-5 py-2.5 font-bold text-xs uppercase tracking-wider hover:bg-[#1A42C2] transition-colors flex items-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#FFE16B]" />
                  <span>Instagram @mdplumbing_rooter</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        ) : (
          /* Human-Centric Inter Typography Form (No tiny monospace!) */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Context & Verified IG */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#2457F5] font-bold block mb-1">
                  Service Request Intake
                </span>
                <h2 className="font-heading font-bold text-2xl sm:text-4xl tracking-tight text-[#1E282E]">
                  Tell Us About Your Plumbing Issue
                </h2>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed mt-3 font-normal">
                  Whether facing an urgent main line sewer backup, in-wall pipe leak, or planning
                  a tankless water heater installation, provide your details for fair, honest pricing.
                </p>
              </div>

              {/* Service Areas Callout */}
              <div className="p-5 bg-[#121A1F] text-white space-y-2 rounded-xs">
                <div className="flex items-center gap-2 text-[#FFE16B] font-semibold text-sm">
                  <MapPin className="w-4 h-4 text-[#18C6C1]" />
                  <span>Official Coverage Areas</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm font-normal">
                  Inland Empire (Riverside, San Bernardino, Ontario, Rancho Cucamonga, Corona, Fontana) and
                  Greater Los Angeles County (LA Metro, Pasadena, Glendale, SGV, South Bay).
                </p>
              </div>

              {/* Official Instagram Profile */}
              <div className="p-5 bg-[#E5F7F2] space-y-2 rounded-xs">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#2457F5]">
                  <Instagram className="w-4 h-4" />
                  <span>Official Instagram Channel</span>
                </div>
                <p className="text-sm text-slate-700 font-normal">
                  Follow our official account for daily job site stories, genuine rooter camera feeds,
                  and plumbing POV demonstrations:
                </p>
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2457F5] hover:text-[#18C6C1] uppercase tracking-wider"
                >
                  <span>instagram.com/mdplumbing_rooter</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="space-y-1 text-sm text-slate-600 font-normal">
                <p>• Zero hidden emergency surcharges</p>
                <p>• Camera inspections available for main lines &amp; sewers</p>
                <p>• Honest assessments tailored to your property</p>
              </div>
            </div>

            {/* Right Column: Inter Readable Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* 1. Contact Information */}
                <div className="space-y-3.5">
                  <h3 className="font-heading font-bold text-lg text-[#1E282E] hairline-b border-[#1E282E]/15 pb-2">
                    1. Contact Details
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-sm font-semibold text-[#1E282E]">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleFieldChange('fullName', e.target.value)}
                        placeholder="Marcus Davis"
                        className={`w-full px-4 py-3 bg-white border text-base text-[#1E282E] placeholder:text-slate-400 focus:outline-none focus:border-[#2457F5] rounded-xs font-normal ${
                          errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-[#1E282E]/20'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="block text-sm font-semibold text-[#1E282E]">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleFieldChange('phone', e.target.value)}
                        placeholder="909-555-0192"
                        className={`w-full px-4 py-3 bg-white border text-base text-[#1E282E] placeholder:text-slate-400 focus:outline-none focus:border-[#2457F5] rounded-xs font-normal ${
                          errors.phone ? 'border-red-500 bg-red-50/30' : 'border-[#1E282E]/20'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-semibold text-[#1E282E]">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleFieldChange('email', e.target.value)}
                      placeholder="resident@gmail.com"
                      className={`w-full px-4 py-3 bg-white border text-base text-[#1E282E] placeholder:text-slate-400 focus:outline-none focus:border-[#2457F5] rounded-xs font-normal ${
                        errors.email ? 'border-red-500 bg-red-50/30' : 'border-[#1E282E]/20'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* 2. Service Location */}
                <div className="space-y-3.5">
                  <h3 className="font-heading font-bold text-lg text-[#1E282E] hairline-b border-[#1E282E]/15 pb-2">
                    2. Property Address &amp; Service Region
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2 space-y-1">
                      <label className="block text-sm font-semibold text-[#1E282E]">
                        Street Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => handleFieldChange('address', e.target.value)}
                        placeholder="1240 Foothill Blvd"
                        className={`w-full px-4 py-3 bg-white border text-base text-[#1E282E] placeholder:text-slate-400 focus:outline-none focus:border-[#2457F5] rounded-xs font-normal ${
                          errors.address ? 'border-red-500 bg-red-50/30' : 'border-[#1E282E]/20'
                        }`}
                      />
                      {errors.address && (
                        <p className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.address}</span>
                        </p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="block text-sm font-semibold text-[#1E282E]">
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => handleFieldChange('city', e.target.value)}
                        placeholder="Ontario"
                        className={`w-full px-4 py-3 bg-white border text-base text-[#1E282E] placeholder:text-slate-400 focus:outline-none focus:border-[#2457F5] rounded-xs font-normal ${
                          errors.city ? 'border-red-500 bg-red-50/30' : 'border-[#1E282E]/20'
                        }`}
                      />
                      {errors.city && (
                        <p className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.city}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-[#1E282E]">
                      Service Region
                    </label>
                    <div className="grid grid-cols-3 gap-2.5">
                      {(['Inland Empire', 'Los Angeles', 'Other'] as const).map((reg) => (
                        <button
                          type="button"
                          key={reg}
                          onClick={() => handleFieldChange('region', reg)}
                          className={`py-2.5 px-3 text-xs sm:text-sm font-semibold transition-colors border rounded-xs cursor-pointer ${
                            formData.region === reg
                              ? 'bg-[#2457F5] text-white border-[#2457F5]'
                              : 'bg-white text-slate-700 border-[#1E282E]/20 hover:border-[#2457F5]'
                          }`}
                        >
                          {reg}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3. Plumbing Issue & Details */}
                <div className="space-y-3.5">
                  <h3 className="font-heading font-bold text-lg text-[#1E282E] hairline-b border-[#1E282E]/15 pb-2">
                    3. Plumbing Issue &amp; Priority
                  </h3>

                  <div className="space-y-1">
                    <label className="block text-sm font-semibold text-[#1E282E]">
                      Primary Service Needed <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => handleFieldChange('serviceType', e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-[#1E282E]/20 text-base text-[#1E282E] focus:outline-none focus:border-[#2457F5] rounded-xs font-normal"
                    >
                      {VERIFIED_SERVICES.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name} — {s.tagline}
                        </option>
                      ))}
                      <option value="other">Other Plumbing / Rooter Issue</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-sm font-semibold text-[#1E282E]">
                        Urgency Level
                      </label>
                      <select
                        value={formData.urgency}
                        onChange={(e) =>
                          handleFieldChange(
                            'urgency',
                            e.target.value as ContactFormData['urgency']
                          )
                        }
                        className="w-full px-4 py-3 bg-white border border-[#1E282E]/20 text-base text-[#1E282E] focus:outline-none focus:border-[#2457F5] rounded-xs font-normal"
                      >
                        <option value="Emergency (Immediate)">Emergency (Active backup/leak)</option>
                        <option value="24-48 Hours">Within 24-48 Hours</option>
                        <option value="Scheduled / Estimate">Scheduled / General Estimate</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-sm font-semibold text-[#1E282E]">
                        Preferred Contact Method
                      </label>
                      <select
                        value={formData.contactPreference}
                        onChange={(e) =>
                          handleFieldChange(
                            'contactPreference',
                            e.target.value as ContactFormData['contactPreference']
                          )
                        }
                        className="w-full px-4 py-3 bg-white border border-[#1E282E]/20 text-base text-[#1E282E] focus:outline-none focus:border-[#2457F5] rounded-xs font-normal"
                      >
                        <option value="Phone Call">Phone Call</option>
                        <option value="Text Message">Text Message</option>
                        <option value="Email">Email</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-semibold text-[#1E282E]">
                      Describe What Is Happening (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes || ''}
                      onChange={(e) => handleFieldChange('notes', e.target.value)}
                      placeholder="Describe symptoms, location of fixture, or issues you are experiencing..."
                      className="w-full px-4 py-3 bg-white border border-[#1E282E]/20 text-base text-[#1E282E] placeholder:text-slate-400 focus:outline-none focus:border-[#2457F5] rounded-xs font-normal"
                    />
                  </div>
                </div>

                {/* Submit Action: Inter Bold (700) */}
                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#2457F5] text-white py-4 px-6 font-bold text-sm uppercase tracking-wider hover:bg-[#1A42C2] transition-colors border border-[#18C6C1]/50 flex items-center justify-center gap-2.5 disabled:opacity-60 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'VALIDATING & TRANSMITTING...' : 'SUBMIT SERVICE INQUIRY'}</span>
                  </button>

                  <p className="text-xs text-slate-500 text-center font-normal">
                    MD Plumbing &amp; Rooter · Honest work and fair pricing · Inland Empire &amp; Los Angeles
                  </p>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
