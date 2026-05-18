import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Users, CreditCard, BarChart3, Mail, Brain, Shield, Zap, Building2, Monitor, MapPin, Lock, Award, MessageSquare, Share2, Newspaper, Star as StarIcon, CheckCircle2 } from 'lucide-react'

const coreFeatureGroups = [
  {
    id: 'booking',
    icon: Calendar,
    label: 'Booking & Scheduling',
    headline: 'Scheduling that runs itself',
    description: 'Class scheduling, waitlist automation, deferred bookings, recovery sessions, and check-in — all in one connected system. When a class fills, the waitlist manages itself. When an instructor cancels, the substitution workflow handles the rest.',
    features: [
      'Recurring and one-off class schedules',
      'Automated waitlist management with configurable hold windows',
      'Instructor substitution workflows',
      'Kiosk mode for front desk check-in',
      'Deferred booking for pre-paid members',
      'Recovery session scheduling',
      'Cancellation policy enforcement',
      'Class capacity management',
    ],
  },
  {
    id: 'members',
    icon: Users,
    label: 'Member Management',
    headline: 'A complete picture of every member',
    description: 'Member profiles that tell a story — attendance history, health score, credits, tags, and GDPR tools. Not a list of bookings. A profile that drives action.',
    features: [
      'Full member profile with attendance history',
      'Member health score (engagement indicator)',
      'Credit management and credit packs',
      'Smart member tags (manual and AI-assigned)',
      'GDPR export and anonymisation tools',
      'CSV import and bulk management',
      'Member notes and staff annotations',
      'Membership pause, cancel, and upgrade workflows',
    ],
  },
  {
    id: 'payments',
    icon: CreditCard,
    label: 'Payments & Billing',
    headline: 'Payments that reconcile themselves',
    description: 'Stripe and GoCardless integrated natively. Memberships, class packs, trial packs, and one-off payments — all managed from one place, with automatic reconciliation against attendance records.',
    features: [
      'Stripe integration (card payments)',
      'GoCardless integration (direct debit)',
      'Membership billing and renewal automation',
      'Class pack and credit pack management',
      'Trial pack management',
      'Refund processing',
      'Failed payment retry workflows',
      'Staff invoicing and payroll integration',
    ],
  },
  {
    id: 'crm',
    icon: Zap,
    label: 'CRM & Sales Pipeline',
    headline: 'The pipeline most studios are missing',
    description: 'Lead management, visual sales pipeline, task management, and retention sequences. The gap between a trial pack and a membership is almost always a follow-up problem. HelgoIQ closes that gap.',
    features: [
      'Visual sales pipeline with drag-and-drop stages',
      'Lead management and source tracking',
      'Task management and follow-up reminders',
      'Automated retention sequences',
      'Smart member segments (behaviour-based)',
      'Smart folders for dynamic member lists',
      'Journey orchestrator for lifecycle automation',
      'Trial conversion tracking',
    ],
  },
  {
    id: 'analytics',
    icon: BarChart3,
    label: 'Analytics & Reporting',
    headline: 'The data you need to make better decisions',
    description: 'Revenue intelligence, retention analytics, conversion funnels, geographic heatmaps, and studio benchmarking. Reports that answer the questions you actually have.',
    features: [
      'Revenue intelligence dashboard',
      'Retention analytics and cohort analysis',
      'Conversion funnel tracking (lead to member)',
      'Geographic member heatmap',
      'Studio benchmarking',
      'Class performance analytics',
      'Instructor performance reporting',
      'CSV and PDF export',
    ],
  },
  {
    id: 'staff',
    icon: Building2,
    label: 'Staff & Operations',
    headline: 'Operations that run without you',
    description: 'Staff rota, employment records, expense claims, payroll integration, and role-based access control. Your team has exactly the access they need — nothing more.',
    features: [
      'Staff rota and scheduling',
      'Employment records management',
      'Expense claim workflows',
      'Payroll integration',
      'Role-based access control',
      'Instructor substitution management',
      'Staff invoicing',
      'Multi-location staff management',
    ],
  },
  {
    id: 'compliance',
    icon: Shield,
    label: 'Compliance & Security',
    headline: 'Built for GDPR from the ground up',
    description: 'GDPR export, anonymisation, audit trail, and role-based access control. Not bolted on — built in from the start.',
    features: [
      'Full GDPR compliance tools',
      'Member data export and anonymisation',
      'Comprehensive audit trail',
      'Role-based access control',
      'Secure payment processing (PCI compliant via Stripe)',
      'Data retention policies',
    ],
  },
]

const signatureFeatures = [
  {
    id: 'screen-management',
    icon: Monitor,
    label: 'Studio Screens',
    headline: 'The right message, on the right screen, to the right member',
    description: 'Most studios have screens on the wall showing nothing useful. HelgoIQ turns every display into a connected, intelligent communication channel. Manage all your studio screens from one dashboard — what plays, when it plays, and who sees it.',
    detail: 'Audience rules let you target content by membership tier, attendance history, or member status. A new member checking in for the first time sees a welcome message. A member approaching their 50-class milestone sees a congratulations card. The screen in the waiting area shows today\'s schedule. The screen by the door shows the next class starting in 10 minutes. All of it managed from a single drag-and-drop playlist builder.',
    bullets: [
      'Manage unlimited connected displays from one dashboard',
      'Drag-and-drop playlist builder with duration control',
      'Audience targeting by membership tier, attendance, or member tag',
      'Live device status monitoring — online, offline, last seen',
      'Schedule content in advance with start and end dates',
      'Content library with images, video, class schedules, and member spotlights',
      'Retreat and event promotion content',
      'Real-time device health dashboard',
    ],
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663542647966/M5M2NvVjN6pgnh7wTTnP7c/feature-screen-management-N8JqcCCycrYMpoUyZTQrJY.webp',
    imageAlt: 'HelgoIQ Screen Management dashboard showing connected studio displays and content playlist',
  },
  {
    id: 'retreat-management',
    icon: MapPin,
    label: 'Retreat Management',
    headline: 'A new revenue stream, fully managed',
    description: 'Retreats are one of the highest-margin revenue opportunities available to fitness studios — and one of the most administratively complex. HelgoIQ gives you a complete retreat management system built directly into your platform.',
    detail: 'Create a retreat, set your room types and pricing, open bookings, and manage deposits and final payments — all without leaving HelgoIQ. The room allocation grid shows you exactly who is in which room, who has paid, and what balance remains. Participants receive automated communications at every stage. When your retreat sells out, the waitlist manages itself.',
    bullets: [
      'Full retreat listing with description, dates, pricing, and capacity',
      'Room type management with per-room pricing',
      'Visual room allocation grid — see every participant in every room',
      'Deposit and final payment tracking per participant',
      'Automated participant communications (confirmation, reminders, balance due)',
      'Waitlist management when retreat is full',
      'Itinerary builder for retreat schedule',
      'Revenue and payment summary dashboard',
      'Export participant list and room allocation report',
    ],
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663542647966/M5M2NvVjN6pgnh7wTTnP7c/feature-retreat-management-K5wf2o94yvopRCeQ3HkQXG.webp',
    imageAlt: 'HelgoIQ Retreat Management showing room allocation grid for Amorgos Greece retreat',
  },
  {
    id: 'access-control',
    icon: Lock,
    label: 'Access Control & Welcome',
    headline: 'Every arrival is a moment. Make it count.',
    description: 'Access control is usually a security feature. In HelgoIQ, it\'s also a member experience feature. The moment a member scans their QR code, the studio screen shows their name, their attendance streak, their membership tier, and a personalised message — all configured by you.',
    detail: 'Access rules are linked directly to member retention data. A member whose health score drops below a threshold can trigger a flag in the AI Command Centre. A member who hasn\'t attended in three weeks can be automatically added to a retention sequence. The door isn\'t just a door — it\'s a data point that connects physical presence to digital engagement.',
    bullets: [
      'Dynamic QR code check-in via member app',
      'Branded, configurable welcome screen on kiosk tablet',
      'Personalised welcome: member name, photo, streak, tier, custom message',
      'Access rules: active membership required, class booking required',
      'Kisi door access integration',
      'Live access log with real-time check-in feed',
      'Access denied logging with reason codes',
      'Door held-open notifications to staff',
      'Member retention stats linked to access patterns',
      'White-label kiosk interface with studio branding',
    ],
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663542647966/M5M2NvVjN6pgnh7wTTnP7c/feature-access-control-YT2mcCeyNXJV8N9YqQFL9F.webp',
    imageAlt: 'HelgoIQ Access Control showing branded kiosk welcome screen and live access log',
  },
  {
    id: 'milestones',
    icon: Award,
    label: 'Milestones & Recognition',
    headline: 'Recognition that builds community',
    description: 'Milestones are one of the most underused retention tools in fitness. HelgoIQ gives you a fully configurable milestone system for both members and teachers — with custom badges, rewards, and AI-managed touchpoints at every stage.',
    detail: 'For members: 10 classes, 50 classes, 100 classes, one year, referral champion — each milestone triggers a personalised message, a badge, and an optional reward (store credit, free class, merchandise). For teachers: 100 classes taught, 500 classes taught, 1,000 classes taught, 5-star rating streak — each milestone earns a badge that appears on their public instructor profile. Studios can upload custom badge images to match their brand.',
    bullets: [
      'Configurable member milestone journeys (classes, anniversaries, referrals)',
      'Configurable teacher milestone journeys (classes taught, ratings)',
      'Custom badge images — upload your own studio-branded badges',
      'Reward assignment per milestone (credits, free class, merchandise)',
      'AI-managed milestone touchpoints and communications',
      'Visual badges on public instructor profile pages',
      'Milestone achievement feed in admin dashboard',
      'Location-filtered milestone report dashboard',
      'Toggle milestones on/off per studio location',
    ],
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663542647966/M5M2NvVjN6pgnh7wTTnP7c/feature-milestones-TAPXxc4MpvWmSwxM2QcCc4.webp',
    imageAlt: 'HelgoIQ Milestones dashboard showing member and teacher milestone configuration with custom badges',
  },
  {
    id: 'ai-inbox',
    icon: MessageSquare,
    label: 'AI-Powered Inbox',
    headline: 'Every message, handled with intelligence',
    description: 'The HelgoIQ inbox isn\'t just a messaging tool — it\'s a retention tool. Every conversation is enriched with member context: their health score, last attendance, membership status, and churn risk. When a member messages to cancel, the AI drafts a retention reply before you\'ve even opened the thread.',
    detail: 'AI draft replies are always suggestions — your team reviews and approves before anything is sent. The AI knows the member\'s history, their engagement level, and the most effective language for their situation. It can suggest a membership pause instead of a cancellation, a class recommendation instead of a complaint response, or a personalised offer for a lapsed member.',
    bullets: [
      'Unified inbox for all member communications',
      'AI draft replies with member context awareness',
      'One-click send or edit-before-sending workflow',
      'Member health score and churn risk visible in every thread',
      'Attendance history and membership status in conversation sidebar',
      'AI Governance: all AI replies require human approval before sending',
      'Internal notes on conversations (not visible to member)',
      'Conversation tagging and filtering',
      'Bulk messaging from member segments',
    ],
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663542647966/M5M2NvVjN6pgnh7wTTnP7c/feature-ai-inbox-KRcnaEsKXsoM2gqJWmcoTz.webp',
    imageAlt: 'HelgoIQ AI-Powered Inbox showing AI draft reply with member context panel',
  },
  {
    id: 'social-meta',
    icon: Share2,
    label: 'Social Media & Meta Ads',
    headline: 'Post, advertise, and analyse — without leaving the platform',
    description: 'Social media management and Meta advertising built directly into HelgoIQ. Create posts, schedule them across Instagram and Facebook, run Meta ad campaigns, and get AI-powered analysis of what\'s working — all from the same platform you use to run your studio.',
    detail: 'The Meta Ads integration is designed for studio operators, not marketing agencies. The AI analyses your campaign performance and surfaces actionable insights in plain language: which days get the most engagement, which audiences convert to trials, which creative performs best. No dashboards to decode. Just clear recommendations.',
    bullets: [
      'Social media post composer with image upload',
      'Schedule posts to Instagram and Facebook',
      'Meta Ads campaign creation and management',
      'AI-powered ad performance analysis',
      'Campaign performance dashboard (reach, leads, cost per lead)',
      'AI insights: best posting times, audience performance, creative analysis',
      'AI-generated ad copy and creative suggestions',
      'Trial offer integration — promote your trial directly from the platform',
      'Campaign budget management',
    ],
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663542647966/M5M2NvVjN6pgnh7wTTnP7c/feature-social-meta-aoHuAjxgu25yiTsYnWAeSC.webp',
    imageAlt: 'HelgoIQ Social Media & Meta Ads dashboard showing post composer and AI ad analysis',
  },
  {
    id: 'newsletter',
    icon: Newspaper,
    label: 'AI Newsletter Creator',
    headline: 'A monthly newsletter in minutes, not hours',
    description: 'The HelgoIQ newsletter creator generates a complete, on-brand monthly newsletter from your studio data — new classes, instructor spotlights, upcoming retreats, member milestones, and community news — in the time it takes to make a coffee.',
    detail: 'Select what to include, choose a tone (warm and community-focused, informative and professional, energetic and motivating), and click generate. The AI pulls real data from your platform — actual class names, real instructor names, genuine milestone achievements — and writes copy that sounds like you, not a template. Every newsletter is different. Layouts vary month to month. Send via email, export as PDF, or upload to your asset library.',
    bullets: [
      'AI-generated newsletter from live studio data',
      'Configurable content: classes, instructor spotlight, retreat, milestones',
      'Tone selector: warm, professional, energetic',
      'Variable layouts — no two newsletters look the same',
      'Live preview before sending',
      'Send via email directly from the platform',
      'Export as PDF for print or sharing',
      'Upload to asset library with automatic tagging',
      'Schedule newsletters in advance',
    ],
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663542647966/M5M2NvVjN6pgnh7wTTnP7c/feature-newsletter-Sdd6q58DeQwgGCDnpSw5eM.webp',
    imageAlt: 'HelgoIQ AI Newsletter Creator showing generation panel and live newsletter preview',
  },
  {
    id: 'reviews',
    icon: StarIcon,
    label: 'Google Reviews & Sentiment',
    headline: 'Know what your members are saying. Act on it.',
    description: 'Google reviews are one of the most important signals for new member acquisition — and one of the most ignored by studio operators. HelgoIQ pulls your Google reviews into the platform, analyses sentiment with AI, extracts the topics that matter, and suggests replies.',
    detail: 'The AI sentiment analysis goes beyond positive/negative. It identifies the specific themes in your reviews — instructor quality, booking experience, facilities, atmosphere, parking — and tracks them over time. When a theme starts trending negatively, you see it before it becomes a pattern. When a reviewer leaves a negative review, the AI drafts a reply that acknowledges the issue and invites resolution.',
    bullets: [
      'Google Reviews integration — all reviews in one place',
      'AI sentiment analysis: positive, neutral, negative',
      'AI-extracted topic tags per review',
      'Overall rating trend tracking month-over-month',
      'AI suggested replies for negative reviews',
      'One-click reply via Google Business Profile',
      'Common themes word cloud',
      'Top praised areas and areas to improve',
      'Review volume and rating trend dashboard',
    ],
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663542647966/M5M2NvVjN6pgnh7wTTnP7c/feature-reviews-8b9nufVB4fCP2H5o5yLtSV.webp',
    imageAlt: 'HelgoIQ Google Reviews & Sentiment Analysis dashboard showing AI sentiment tags and insights',
  },
]

export default function Features() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-forest-600 text-white py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest-300 mb-4">Platform features</p>
          <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-5">
            Everything your studio needs.<br />Nothing it doesn't.
          </h1>
          <p className="text-forest-200 text-lg max-w-2xl mx-auto leading-relaxed">
            HelgoIQ replaces the 5–8 disconnected tools most studios use with a single platform where every system shares the same data layer.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Link to="/trial" className="btn-dark">
              Start free trial <ArrowRight size={15} />
            </Link>
            <Link to="/pricing" className="inline-flex items-center gap-2 border border-forest-400/50 text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-forest-500/30 transition-all">
              View pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Quick nav */}
      <section className="bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-none">
            {[
              { id: 'signature', label: 'Signature Features' },
              { id: 'booking', label: 'Booking' },
              { id: 'members', label: 'Members' },
              { id: 'crm', label: 'CRM' },
              { id: 'analytics', label: 'Analytics' },
              { id: 'ai', label: 'AI (26)' },
              { id: 'staff', label: 'Staff' },
              { id: 'compliance', label: 'Compliance' },
            ].map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="flex-shrink-0 text-xs font-medium text-gray-500 hover:text-forest-600 px-3 py-1.5 rounded-full hover:bg-forest-50 transition-all whitespace-nowrap"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Signature features — with screenshots */}
      <section id="signature" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Signature features</p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight mb-4">
              Features you won't find anywhere else
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Beyond the core platform, HelgoIQ includes a set of capabilities that no other fitness software offers — built from direct conversations with studio operators about what they actually need.
            </p>
          </div>

          <div className="space-y-32">
            {signatureFeatures.map(({ id, icon: Icon, label, headline, description, detail, bullets, image, imageAlt }, idx) => (
              <div key={id} id={id} className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
                {/* Text — alternates left/right */}
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="feature-icon">
                      <Icon size={20} />
                    </div>
                    <span className="section-label">{label}</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 tracking-tight mb-4 leading-snug">
                    {headline}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{detail}</p>
                  <ul className="space-y-2 mb-8">
                    {bullets.map(b => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <CheckCircle2 size={15} className="text-forest-500 mt-0.5 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link to="/trial" className="btn-primary text-sm">
                    Try it free <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Screenshot */}
                <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                    <img
                      src={image}
                      alt={imageAlt}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-forest-50 border-y border-forest-100 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-forest-700 font-medium text-lg">
            Plus the complete platform — booking, members, payments, CRM, analytics, AI, staff, and compliance.
          </p>
        </div>
      </div>

      {/* Core feature groups */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
          {coreFeatureGroups.map(({ id, icon: Icon, label, headline, description, features }, idx) => (
            <div key={id} id={id} className={`grid lg:grid-cols-2 gap-12 items-start ${idx % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={idx % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="feature-icon">
                    <Icon size={20} />
                  </div>
                  <span className="section-label">{label}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 tracking-tight mb-4">{headline}</h2>
                <p className="text-gray-500 leading-relaxed mb-6">{description}</p>
                <Link to="/trial" className="btn-primary text-sm">
                  Try it free <ArrowRight size={14} />
                </Link>
              </div>
              <div className={`bg-gray-50 rounded-2xl p-6 ${idx % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <ul className="space-y-3">
                  {features.map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle2 size={14} className="text-forest-500 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* AI section — special treatment */}
          <div id="ai" className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="feature-icon">
                  <Brain size={20} />
                </div>
                <span className="section-label">AI Intelligence</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 tracking-tight mb-4">
                Intelligence that surfaces, not replaces
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Twenty-six AI features designed around one principle: AI should surface insights and suggest actions, but your team approves anything that goes to a member. The AI Governance module routes all AI-generated communications through an approval queue.
              </p>
              <Link to="/trial" className="btn-primary text-sm">
                Try it free <ArrowRight size={14} />
              </Link>
            </div>
            <div className="bg-forest-600 rounded-2xl p-6 text-white">
              <p className="text-forest-300 text-xs font-semibold uppercase tracking-widest mb-4">26 AI features include</p>
              <ul className="space-y-2.5">
                {[
                  'AI Churn Prevention — flags at-risk members before they cancel',
                  'AI Class Filler — identifies under-filled classes and suggests actions',
                  'AI Campaign Composer — generates targeted campaign copy',
                  'AI Trial Conversion — prioritises trials most likely to convert',
                  'AI Member Insights — behavioural analysis per member',
                  'AI Financial Forecasting — revenue and cash flow projections',
                  'AI Anomaly Detection — flags unusual patterns',
                  'AI Command Centre — single view of all AI alerts',
                  'AI Weekly Growth Brief — automated weekly summary',
                  'AI Pre-Class Briefing — instructor briefing before each class',
                  'AI Newsletter Creator — generates member newsletters',
                  'AI Sentiment Analysis — member feedback analysis',
                  'AI Governance & Approval Queue — all AI actions require human approval',
                ].map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-forest-100">
                    <CheckCircle2 size={14} className="text-forest-300 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-forest-600 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">Ready to see it in action?</h2>
          <p className="text-forest-200 mb-8">Start your free trial today. No credit card required. Full platform access from day one.</p>
          <Link to="/trial" className="btn-dark">
            Start free trial <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  )
}
