"use client";

import { 
  Cookie, 
  Sliders, 
  Shield, 
  Lock, 
  User, 
  BarChart, 
  Phone as PhoneIcon, 
  Target, 
  Megaphone, 
  Share2, 
  Globe, 
  Clock, 
  FileText, 
  CheckCircle,
  AlertCircle,
  Database,
  RefreshCw,
  ChevronDown,
  Info,
} from "lucide-react";
import NextLink from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND, CONTACT } from "@/app/constants";

export default function CookiePolicyPage() {
  const sections = [
    {
      icon: Info,
      title: "Introduction",
      content: [
        "This Cookie Policy explains how Tickettomiddleeast.com, operated by Noam Flyers Inc., uses cookies and similar technologies when you visit or interact with the Website, booking pages, landing pages, communications, and related digital interfaces.",
        "Tickettomiddleeast.com is an independent travel agency and is not an airline.",
        "For purposes of this policy, the term “cookies” is used broadly to include cookies and similar technologies that store information on, or access information from, a device, browser, or application environment. These technologies may include pixels, tags, scripts, software development kits (SDKs), local storage objects, and comparable identifiers."
      ]
    },
    {
      icon: Cookie,
      title: "1. What Are Cookies?",
      content: [
        "Cookies are small files or similar data elements that may be stored on your device when you visit a website.",
        "They can help websites:",
        "• Remember information",
        "• Maintain a secure session",
        "• Preserve booking information",
        "• Improve website functionality",
        "• Understand how visitors use a website",
        "• Measure advertising performance",
        "• Prevent fraud",
        "• Remember selected preferences",
        "• Support customer-service functions",
        "Some cookies are placed directly by Tickettomiddleeast.com and Noam Flyers Inc. Others may be placed or triggered by carefully selected third-party service providers that provide services such as analytics, payment protection, advertising measurement, call tracking, or customer support."
      ],
      twoColumn: true
    },
    {
      icon: Sliders,
      title: "2. How We Use Cookies",
      content: [
        "Noam Flyers Inc. may use cookies and similar technologies for several different purposes.",
        "These purposes may include:",
        "• Website operation",
        "• Booking and checkout functionality",
        "• Security",
        "• Fraud prevention",
        "• Session management",
        "• Preference storage",
        "• Analytics",
        "• Performance measurement",
        "• Personalisation",
        "• Advertising",
        "• Campaign attribution",
        "• Call attribution",
        "• Social-media functionality",
        "• Customer-support functionality",
        "Not every technology is used for every visitor, and the technologies used may change as our Website and service providers evolve."
      ],
      twoColumn: true
    },
    {
      icon: Shield,
      title: "3. Cookie Consent and Our Layered Approach",
      content: [
        "Tickettomiddleeast.com uses a layered approach to cookie transparency.",
        "When you first visit the Website, a cookie notice or consent interface may explain that cookies and similar technologies are being used.",
        "Where applicable, the consent interface may allow you to:",
        "• Accept all applicable categories",
        "• Reject non-essential technologies",
        "• Customize your preferences",
        "• Change your preferences later",
        "Strictly necessary technologies may be used without marketing consent where they are genuinely required to provide a service that you have requested, operate the Website, maintain security, or complete a transaction.",
        "Non-essential categories, such as analytics, personalisation, advertising, and certain social-media technologies, should remain optional where consent is required by applicable law."
      ],
      twoColumn: true
    },
    {
      icon: Lock,
      title: "4. Strictly Necessary Technologies",
      content: [
        "Strictly necessary cookies and similar technologies help Tickettomiddleeast.com operate and provide core functionality.",
        "These technologies may be used to:",
        "• Maintain secure user sessions",
        "• Preserve booking and itinerary information",
        "• Support search and checkout functionality",
        "• Maintain shopping or booking-session information",
        "• Protect the booking process against fraud",
        "• Support payment or verification steps initiated by the customer",
        "• Remember necessary language or regional settings",
        "• Maintain website security",
        "• Support load balancing",
        "• Remember cookie-consent preferences",
        "If these technologies are disabled, some or all core Website functions may not operate correctly.",
        "Essential storage or similar technologies may also be used where necessary to complete a payment, verification, authentication, or booking step actively requested by the customer."
      ],
      twoColumn: true
    },
    {
      icon: User,
      title: "5. Functional and Preference Technologies",
      content: [
        "Functional technologies help remember non-essential preferences and improve convenience.",
        "Depending on the Website's features, these technologies may remember:",
        "• Recently used airports",
        "• Cabin preferences",
        "• Passenger-search preferences",
        "• Language preferences",
        "• Regional preferences",
        "• Saved search settings",
        "• Communication preferences",
        "• Certain voluntarily saved account or profile information",
        "Functional technologies can make the booking experience easier, but they should not be treated as strictly necessary merely because they provide additional convenience."
      ],
      twoColumn: true
    },
    {
      icon: BarChart,
      title: "6. Analytics and Measurement Technologies",
      content: [
        "Analytics technologies may help Noam Flyers Inc. understand how visitors use Tickettomiddleeast.com and improve the Website.",
        "Analytics may be used to understand:",
        "• Which pages receive traffic",
        "• Which pages load slowly",
        "• Where users encounter technical problems",
        "• Which search filters are useful",
        "• Where customers abandon a booking journey",
        "• How the booking funnel performs",
        "• How Website functionality can be improved",
        "• Which routes or destinations generate interest",
        "• Campaign performance",
        "• Customer-support demand generated by Website activity",
        "Where permitted, aggregated measurement may also help Noam Flyers Inc. understand whether customers who previously visited the Website later contact the company through another support channel.",
        "Analytics technologies are generally not required for the core booking function and may therefore be subject to applicable consent requirements."
      ],
      twoColumn: true
    },
    {
      icon: PhoneIcon,
      title: "7. Call and Customer-Service Attribution",
      content: [
        "Tickettomiddleeast.com may use technologies that help measure interactions between Website visits and customer-service contacts.",
        "For example, where the Website displays a telephone number, callback option, chat feature, or other support mechanism, applicable technology may help determine whether a customer previously visited the Website before initiating contact.",
        "Depending on the technology and applicable permissions, this information may be used for:",
        "• Service improvement",
        "• Performance measurement",
        "• Campaign attribution",
        "• Fraud prevention",
        "• Customer-support analysis",
        "• Training and operational purposes",
        "Where required by applicable law, non-essential call-attribution technologies will be subject to appropriate consent or privacy choices."
      ],
      twoColumn: true
    },
    {
      icon: Target,
      title: "8. Personalisation Technologies",
      content: [
        "Where permitted, Tickettomiddleeast.com may use personalisation technologies to make Website content more relevant to a visitor.",
        "These technologies may help present:",
        "• Relevant travel content",
        "• Route suggestions",
        "• Destination ideas",
        "• Search-related information",
        "• Previously viewed information",
        "• More relevant Website messages",
        "Personalisation technologies are generally optional unless a particular technology is genuinely necessary to provide a service specifically requested by the customer."
      ],
      twoColumn: true
    },
    {
      icon: Megaphone,
      title: "9. Advertising and Marketing Technologies",
      content: [
        "Noam Flyers Inc. may use advertising and marketing technologies to measure campaigns, understand advertising effectiveness, limit repetitive advertisements, or present more relevant promotional content.",
        "Depending on applicable permissions, these technologies may be used to:",
        "• Measure advertising performance",
        "• Attribute bookings or conversions",
        "• Understand campaign reach",
        "• Reduce repeated advertisements",
        "• Create or manage advertising audiences",
        "• Support retargeting",
        "• Measure interactions with advertisements",
        "• Improve future marketing campaigns",
        "Advertising technologies are not required for the core booking function and should be subject to applicable consent requirements.",
        "If you reject non-essential advertising technologies, Tickettomiddleeast.com should continue to provide core Website and booking functions, subject only to technologies genuinely necessary to operate the requested service."
      ],
      twoColumn: true
    },
    {
      icon: Share2,
      title: "10. Social-Media Technologies",
      content: [
        "Tickettomiddleeast.com may use social-media technologies when the Website:",
        "• Embeds social content",
        "• Provides social-sharing functionality",
        "• Links to social-media channels",
        "• Measures engagement with travel content",
        "• Supports social-media campaigns",
        "These technologies may be controlled or triggered by third-party social-media providers.",
        "They are generally not necessary to complete an airline booking and may therefore be subject to applicable consent requirements."
      ],
      twoColumn: true
    },
    {
      icon: Globe,
      title: "11. Third-Party Service Providers",
      content: [
        "Some cookies and similar technologies may be provided by third parties.",
        "These providers may support functions such as:",
        "• Website analytics",
        "• Advertising measurement",
        "• Payment protection",
        "• Fraud prevention",
        "• Customer support",
        "• Call tracking",
        "• Marketing attribution",
        "• Social-media functionality",
        "• Website performance monitoring",
        "The identity of technology providers may change as Noam Flyers Inc. changes or updates its technology stack.",
        "Where applicable, the cookie-management interface or technology inventory should identify the current provider, general purpose, category, and expected retention period."
      ],
      twoColumn: true
    },
    {
      icon: Clock,
      title: "12. Cookie Duration",
      content: [
        "Cookies and similar technologies may operate for different periods depending on their purpose.",
        "",
        "Session Technologies",
        "Some technologies expire when:",
        "• You close your browser",
        "• Your session ends",
        "• A defined period of inactivity occurs",
        "",
        "Persistent Technologies",
        "Other technologies may remain on your device for a defined period after you leave the Website.",
        "The retention period may depend on the purpose of the technology.",
        "Where reasonably practicable, Noam Flyers Inc. aims to use a retention-led approach so that analytics, personalisation, and marketing identifiers are not retained or active longer than reasonably necessary for their intended purpose."
      ]
    },
    {
      icon: FileText,
      title: "13. Cookie Category Table",
      content: (
        <div className="overflow-x-auto mt-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="min-w-[480px] sm:min-w-full">
            <table className="w-full border-collapse text-xs sm:text-sm" style={{ borderColor: '#f5edc8' }}>
              <thead>
                <tr style={{ backgroundColor: '#f5edc8' }}>
                  <th className="border px-4 py-3 text-left font-semibold" style={{ borderColor: '#f5edc8', color: '#0c0a4a' }}>Category</th>
                  <th className="border px-4 py-3 text-left font-semibold" style={{ borderColor: '#f5edc8', color: '#0c0a4a' }}>Typical Purpose</th>
                  <th className="border px-4 py-3 text-left font-semibold" style={{ borderColor: '#f5edc8', color: '#0c0a4a' }}>Usually Required for Core Service?</th>
                  <th className="border px-4 py-3 text-left font-semibold" style={{ borderColor: '#f5edc8', color: '#0c0a4a' }}>Typical Retention Approach</th>
                </tr>
              </thead>
              <tbody>
                <tr className="transition-colors" style={{ borderColor: '#f5edc8' }}>
                  <td className="border px-4 py-3 font-medium" style={{ borderColor: '#f5edc8', color: '#0c0a4a' }}>Strictly Necessary</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#f5edc8', color: '#0c0a4a99' }}>Security, session continuity, fraud prevention, consent storage, payment and checkout continuity</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#f5edc8', color: '#0c0a4a99' }}>Yes</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#f5edc8', color: '#0c0a4a99' }}>Session or short operational period</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#f5edc8' }}>
                  <td className="border px-4 py-3 font-medium" style={{ borderColor: '#f5edc8', color: '#0c0a4a' }}>Functional</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#f5edc8', color: '#0c0a4a99' }}>Preferences, saved searches, convenience settings</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#f5edc8', color: '#0c0a4a99' }}>No, but useful</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#f5edc8', color: '#0c0a4a99' }}>Short to medium</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#f5edc8' }}>
                  <td className="border px-4 py-3 font-medium" style={{ borderColor: '#f5edc8', color: '#0c0a4a' }}>Analytics</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#f5edc8', color: '#0c0a4a99' }}>Traffic analysis, booking-funnel measurement, UX improvement, attribution</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#f5edc8', color: '#0c0a4a99' }}>No</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#f5edc8', color: '#0c0a4a99' }}>Short to medium</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#f5edc8' }}>
                  <td className="border px-4 py-3 font-medium" style={{ borderColor: '#f5edc8', color: '#0c0a4a' }}>Personalisation</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#f5edc8', color: '#0c0a4a99' }}>Route suggestions, content relevance, prior-search information</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#f5edc8', color: '#0c0a4a99' }}>No</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#f5edc8', color: '#0c0a4a99' }}>Medium</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#f5edc8' }}>
                  <td className="border px-4 py-3 font-medium" style={{ borderColor: '#f5edc8', color: '#0c0a4a' }}>Advertising</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#f5edc8', color: '#0c0a4a99' }}>Retargeting, campaign measurement, audience management, frequency control</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#f5edc8', color: '#0c0a4a99' }}>No</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#f5edc8', color: '#0c0a4a99' }}>Medium</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#f5edc8' }}>
                  <td className="border px-4 py-3 font-medium" style={{ borderColor: '#f5edc8', color: '#0c0a4a' }}>Social Media</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#f5edc8', color: '#0c0a4a99' }}>Sharing, embedded content, engagement measurement</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#f5edc8', color: '#0c0a4a99' }}>No</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#f5edc8', color: '#0c0a4a99' }}>Medium</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: '#0c0a4a60' }}>
            Actual cookie names, providers, purposes, and retention periods may vary over time and should be reviewed through the Website's applicable cookie-management interface.
          </p>
        </div>
      )
    },
    {
      icon: Sliders,
      title: "14. Managing Your Cookie Preferences",
      content: [
        "You may manage cookie preferences through the cookie settings or consent-management interface made available on Tickettomiddleeast.com.",
        "Depending on the available functionality, you may be able to:",
        "• Accept all cookie categories",
        "• Reject non-essential categories",
        "• Accept selected categories",
        "• Change your choices later",
        "You may also use your browser or device settings to block or delete cookies.",
        "However, blocking all cookies may interfere with Website functionality, including:",
        "• Secure login",
        "• Booking-session continuity",
        "• Saved preferences",
        "• Search functionality",
        "• Payment processes",
        "• Fraud-prevention checks",
        "• Checkout functionality",
        "Deleting cookies after beginning a booking may also affect your ability to resume a partially completed search or booking journey."
      ],
      twoColumn: true
    },
    {
      icon: Shield,
      title: "15. Privacy Preference Signals",
      content: [
        "Where required or applicable, Noam Flyers Inc. may evaluate whether Tickettomiddleeast.com recognizes browser-based privacy preference signals or other legally recognized opt-out mechanisms.",
        "The availability and treatment of such signals may depend on:",
        "• Applicable law",
        "• Technical capabilities",
        "• Browser or device configuration",
        "• The type of privacy signal received",
        "Where applicable, additional information will be provided through the Website's privacy-choice interface."
      ]
    },
    {
      icon: Lock,
      title: "16. Cookies and Personal Information",
      content: [
        "Information collected through cookies and similar technologies may sometimes constitute personal information or personal data, particularly where it can be connected to an identifiable or reasonably identifiable person, device, account, or booking.",
        "Where this occurs, the information will be handled in accordance with the applicable Privacy Policy and relevant privacy requirements.",
        "The Privacy Policy provides additional information concerning matters such as:",
        "• Data security",
        "• Retention",
        "• Service providers",
        "• Data sharing",
        "• Privacy rights",
        "• Requests concerning personal information",
        "This Cookie Policy should therefore be read together with the applicable Privacy Policy and any Your Privacy Choices interface provided on Tickettomiddleeast.com."
      ],
      twoColumn: true
    },
    {
      icon: CheckCircle,
      title: "17. Cookie Consent Does Not Affect Essential Services",
      content: [
        "Where consent is not required for a technology because it is genuinely necessary to provide a service requested by the customer, that technology may continue to operate even when non-essential categories have been rejected.",
        "For example, a customer may still need essential technologies to:",
        "• Maintain a secure booking session",
        "• Preserve an itinerary during checkout",
        "• Complete a payment step",
        "• Prevent fraudulent activity",
        "• Maintain essential Website security",
        "Rejecting analytics or advertising technologies should not, where technically and legally feasible, prevent customers from using core booking functionality."
      ],
      twoColumn: true
    },
    {
      icon: RefreshCw,
      title: "18. Changes to Cookie Technology",
      content: [
        "Noam Flyers Inc. may change the technologies used on Tickettomiddleeast.com as its Website, booking systems, analytics infrastructure, advertising arrangements, security tools, or service providers evolve.",
        "The categories described in this policy are intended to remain relatively stable even if individual technology providers change.",
        "Where appropriate, the current cookie-management interface should provide more specific information regarding the technologies currently active on the Website."
      ]
    },
    {
      icon: FileText,
      title: "19. Changes to This Cookie Policy",
      content: [
        "Noam Flyers Inc. may update this Cookie Policy from time to time to reflect:",
        "• Changes in technology",
        "• Website functionality",
        "• Analytics tools",
        "• Advertising practices",
        "• Third-party service providers",
        "• Privacy requirements",
        "• Legal requirements",
        "• Business operations",
        "The latest version will be made available on Tickettomiddleeast.com.",
        "If changes materially affect how non-essential cookie information is used and applicable law requires renewed consent, Noam Flyers Inc. may request consent again rather than relying solely on a previous consent choice."
      ],
      twoColumn: true
    },
    {
      icon: FileText,
      title: "20. Consent Banner",
      content: [
        "When applicable, Tickettomiddleeast.com's cookie notice may state:",
        "",
        "We use necessary cookies to keep Tickettomiddleeast.com secure and functioning. With your permission, we may also use analytics, personalisation, advertising, and similar technologies to understand how the Website is used, improve the booking experience, measure marketing performance, and provide more relevant travel content. You can accept all, reject non-essential technologies, or customize your choices at any time."
      ]
    },
    {
      icon: FileText,
      title: "21. Cookie Preference Process",
      content: (
        <div className="mt-2">
          <p className="leading-relaxed mb-6" style={{ color: '#0c0a4a99' }}>
            The general cookie-management process may be summarized as follows:
          </p>
          
          <div className="relative">
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-center gap-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0"
                  style={{
                    background: `linear-gradient(to right, #131164, #b7901b)`
                  }}
                >
                  1
                </div>
                <div>
                  <p className="font-medium text-sm" style={{ color: '#0c0a4a' }}>User Visits Tickettomiddleeast.com</p>
                  <p className="text-xs" style={{ color: '#0c0a4a60' }}>Visitor arrives on the website</p>
                </div>
              </div>

              <div className="flex justify-center py-1">
                <div className="flex flex-col items-center">
                  <div className="w-px h-4" style={{ background: `linear-gradient(to bottom, #b7901b, #131164)` }} />
                  <ChevronDown size={16} style={{ color: '#131164' }} />
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-center gap-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 border-2"
                  style={{ 
                    backgroundColor: '#faf5e6', 
                    borderColor: '#b7901b', 
                    color: '#131164'
                  }}
                >
                  2
                </div>
                <div>
                  <p className="font-medium text-sm" style={{ color: '#0c0a4a' }}>Cookie Notice / Consent Interface Appears</p>
                  <p className="text-xs" style={{ color: '#0c0a4a60' }}>User is presented with cookie options</p>
                </div>
              </div>

              <div className="flex justify-center py-1">
                <div className="flex flex-col items-center">
                  <div className="w-px h-4" style={{ background: `linear-gradient(to bottom, #b7901b, #131164)` }} />
                  <ChevronDown size={16} style={{ color: '#131164' }} />
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-center gap-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 border-2"
                  style={{ 
                    backgroundColor: '#faf5e6', 
                    borderColor: '#b7901b', 
                    color: '#131164'
                  }}
                >
                  3
                </div>
                <div>
                  <p className="font-medium text-sm" style={{ color: '#0c0a4a' }}>User Selects a Preference</p>
                  <p className="text-xs" style={{ color: '#0c0a4a60' }}>Choice is made regarding cookie categories</p>
                </div>
              </div>

              <div className="flex justify-center py-1">
                <div className="flex flex-col items-center">
                  <div className="w-px h-4" style={{ background: `linear-gradient(to bottom, #b7901b, #131164)` }} />
                  <ChevronDown size={16} style={{ color: '#131164' }} />
                </div>
              </div>

              {/* Step 4 - Split options */}
              <div className="flex items-start gap-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 border-2"
                  style={{ 
                    backgroundColor: '#faf5e6', 
                    borderColor: '#b7901b', 
                    color: '#131164'
                  }}
                >
                  4
                </div>
                <div className="flex-1 pt-1">
                  <p className="font-medium text-sm" style={{ color: '#0c0a4a' }}>Accept All → Necessary + Applicable Optional Categories</p>
                  <p className="text-xs" style={{ color: '#0c0a4a60' }}>Reject Non-Essential → Necessary Technologies Only</p>
                  <p className="text-xs" style={{ color: '#0c0a4a60' }}>Customize → User Selects Individual Categories</p>
                </div>
              </div>

              <div className="flex justify-center py-1">
                <div className="flex flex-col items-center">
                  <div className="w-px h-4" style={{ background: `linear-gradient(to bottom, #b7901b, #131164)` }} />
                  <ChevronDown size={16} style={{ color: '#131164' }} />
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-center gap-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 border-2"
                  style={{ 
                    backgroundColor: '#faf5e6', 
                    borderColor: '#b7901b', 
                    color: '#131164'
                  }}
                >
                  5
                </div>
                <div>
                  <p className="font-medium text-sm" style={{ color: '#0c0a4a' }}>Preference Is Stored Where Applicable</p>
                  <p className="text-xs" style={{ color: '#0c0a4a60' }}>User's choice is saved</p>
                </div>
              </div>

              <div className="flex justify-center py-1">
                <div className="flex flex-col items-center">
                  <div className="w-px h-4" style={{ background: `linear-gradient(to bottom, #b7901b, #131164)` }} />
                  <ChevronDown size={16} style={{ color: '#131164' }} />
                </div>
              </div>

              {/* Step 6 */}
              <div className="flex items-center gap-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 border-2"
                  style={{ 
                    backgroundColor: '#faf5e6', 
                    borderColor: '#b7901b', 
                    color: '#131164'
                  }}
                >
                  6
                </div>
                <div>
                  <p className="font-medium text-sm" style={{ color: '#0c0a4a' }}>Website Applies the Selected Preferences</p>
                  <p className="text-xs" style={{ color: '#0c0a4a60' }}>Cookies are set according to user choice</p>
                </div>
              </div>

              <div className="flex justify-center py-1">
                <div className="flex flex-col items-center">
                  <div className="w-px h-4" style={{ background: `linear-gradient(to bottom, #b7901b, #131164)` }} />
                  <ChevronDown size={16} style={{ color: '#131164' }} />
                </div>
              </div>

              {/* Step 7 - Final */}
              <div className="flex items-center gap-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0 ring-2"
                  style={{
                    background: `linear-gradient(to right, #131164, #b7901b)`,
                    
                  }}
                >
                  7
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: '#131164' }}>User Can Update Preferences Later</p>
                  <p className="text-xs" style={{ color: '#0c0a4a60' }}>Preferences can be changed at any time</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2">
              <div className="h-px flex-1" style={{ background: `linear-gradient(to right, transparent, #b7901b)` }} />
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border" style={{ backgroundColor: '#faf5e6', borderColor: '#b7901b' }}>
                <CheckCircle size={14} style={{ color: '#131164' }} />
                <span className="text-xs font-medium" style={{ color: '#131164' }}>Cookie Preference Set</span>
              </div>
              <div className="h-px flex-1" style={{ background: `linear-gradient(to left, transparent, #b7901b)` }} />
            </div>
          </div>
        </div>
      )
    },
    {
      icon: PhoneIcon,
      title: "22. Contact",
      content: [
        "If you have questions regarding this Cookie Policy or the use of cookies and similar technologies on Tickettomiddleeast.com, please use the contact information provided on the Website.",
        "",
        "Tickettomiddleeast.com",
        "Operated by Noam Flyers Inc."
      ]
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-6">
            <NextLink href="/" className="transition-colors" style={{ color: '#131164' }}>
              Home
            </NextLink>
            <span className="text-[#0c0a4a]/30">›</span>
            <span className="text-[#0c0a4a]/60">Cookie Policy</span>
          </nav>

          {/* Full width container */}
          <div className="w-full">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight" style={{ color: '#0c0a4a' }}>
                Cookie Policy
              </h1>
              <div 
                className="w-12 h-1 mt-3 rounded-full"
                style={{
                  background: `linear-gradient(to right, #131164, #b7901b)`
                }}
              />
            </div>

            {/* Sections */}
            {sections.map((section, index) => {
              const Icon = section.icon;
              const isTwoColumn = section.twoColumn;
              
              return (
                <div key={index} className="mt-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#f5edc8' }}
                    >
                      <Icon size={16} style={{ color: '#131164' }} />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold" style={{ color: '#0c0a4a' }}>
                      {section.title}
                    </h2>
                  </div>
                  
                  {/* Mobile left (ml-0), Desktop aligned under icon (sm:ml-11) */}
                  <div className="text-sm sm:text-base leading-relaxed ml-0 sm:ml-11 text-justify">
                    {Array.isArray(section.content) ? (
                      <div className={isTwoColumn ? "grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3" : "space-y-3"}>
                        {section.content.map((paragraph, pIndex) => {
                          // 1. Empty spacer
                          if (paragraph === "") {
                            return <div key={pIndex} className="h-2 col-span-2" />;
                          }

                          // 2. Render bullet point
                          if (paragraph.startsWith("•")) {
                            return (
                              <div key={pIndex} className="flex items-start gap-2 col-span-2 md:col-span-1 text-justify">
                                <div 
                                  className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                  style={{ backgroundColor: '#131164' }}
                                />
                                <span className="leading-relaxed" style={{ color: '#0c0a4a99' }}>
                                  {paragraph.substring(2)}
                                </span>
                              </div>
                            );
                          }

                          // 3. Render headers in bold navy
                          if (paragraph === "Session Technologies" || paragraph === "Persistent Technologies") {
                            return (
                              <p key={pIndex} className="col-span-2 font-semibold" style={{ color: '#0c0a4a' }}>
                                {paragraph}
                              </p>
                            );
                          }

                          // 4. Normal paragraph
                          return (
                            <p key={pIndex} className="col-span-2 leading-relaxed" style={{ color: '#0c0a4a99' }}>
                              {paragraph}
                            </p>
                          );
                        })}
                      </div>
                    ) : (
                      // React element handler (tables and flowcharts)
                      <div className="w-full">
                        {section.content}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Call to Action */}
            <div 
              className="mt-10 p-6 rounded-lg text-white"
              style={{
                background: `linear-gradient(to right, #131164, #1e1a8a)`
              }}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-2 !text-white">
                Need Help With Your Travel Plans?
              </h3>
              <p className="text-sm mb-4 text-white/80">
                Our travel experts are here to assist you with flight bookings, changes, and more.
              </p>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:scale-105"
                style={{
                  backgroundColor: '#faf5e6',
                  color: '#131164'
                }}
              >
                <PhoneIcon size={16} />
                Call Us Now: {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}