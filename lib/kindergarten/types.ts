/**
 * TypeScript interfaces for kindergarten website data models
 * All text fields support bilingual content (Russian and English)
 */

export interface LocalizedString {
  ru: string
  en: string
}

// ============================================================================
// Programs & Curriculum
// ============================================================================

export interface Program {
  id: string
  slug: string
  name: LocalizedString
  ageRange: {
    min: number // in months: 18 for 1.5 years
    max: number // in months: 84 for 7 years
    display: LocalizedString // "1.5-3 года"
  }
  description: LocalizedString
  goals: LocalizedString[] // Educational goals
  image: string

  schedule: {
    arrival: string // "8:30"
    departure: string // "19:30"
    napTime: { start: string; end: string } // "13:00-15:00"
  }

  curriculum: {
    subjects: ProgramSubject[]
    activities: ProgramActivity[]
  }

  staffing: {
    teacherRatio: string // "1:8" - one teacher per 8 children
    maxGroupSize: number // 15
  }

  features: LocalizedString[]
  featured?: boolean
}

export interface ProgramSubject {
  id: string
  name: LocalizedString
  description: LocalizedString
  weeklyHours: number
  icon?: string
}

export interface ProgramActivity {
  id: string
  name: LocalizedString
  description: LocalizedString
  frequency: LocalizedString // "3 раза в неделю"
  icon?: string
}

// ============================================================================
// Teachers & Staff
// ============================================================================

export interface Teacher {
  id: string
  slug: string
  name: LocalizedString
  photo: string
  role: LocalizedString // "Старший воспитатель"

  bio: {
    short: LocalizedString // For cards
    full: LocalizedString // For detail page
  }

  qualifications: {
    education: LocalizedString[]
    certifications: LocalizedString[]
    specializations: LocalizedString[]
  }

  experience: {
    years: number
    description: LocalizedString
  }

  programs: string[] // Program IDs this teacher works with
  quote?: LocalizedString // Optional personal quote
  featured?: boolean
}

// ============================================================================
// Pricing & Services
// ============================================================================

export interface PricingTier {
  id: string
  name: LocalizedString
  description: LocalizedString
  schedule: {
    type: 'full-day' | 'half-day' | 'extended'
    hours: LocalizedString // "8:30-19:30 (11 часов)"
  }
  pricing: {
    monthly: number // Base price in rubles
    registration?: number // One-time fee
    currency: 'RUB'
  }
  includes: LocalizedString[]
  programs: string[] // Which programs this applies to
  featured?: boolean
}

export interface AdditionalService {
  id: string
  name: LocalizedString
  description: LocalizedString
  pricing: {
    type: 'monthly' | 'per-session' | 'one-time'
    amount: number
    currency: 'RUB'
  }
  category: 'education' | 'activity' | 'care' | 'other'
  icon?: string
}

export interface Discount {
  id: string
  name: LocalizedString
  description: LocalizedString
  type: 'percentage' | 'fixed'
  amount: number // 10 for 10%, or fixed amount in rubles
  conditions: LocalizedString[]
  icon?: string
  validUntil?: string // ISO date
}

// ============================================================================
// Daily Schedule & Menu
// ============================================================================

export interface DailyScheduleItem {
  time: string // "8:30"
  duration: number // in minutes
  activity: LocalizedString
  description?: LocalizedString
  icon?: string
  category: 'meal' | 'education' | 'activity' | 'rest' | 'free-play' | 'outdoor'
}

export interface MealSchedule {
  time: string
  name: LocalizedString
  description?: LocalizedString
}

export interface Menu {
  id: string
  weekday: 1 | 2 | 3 | 4 | 5 // Monday = 1
  meals: {
    breakfast: LocalizedString[]
    snack1: LocalizedString[]
    lunch: LocalizedString[]
    snack2: LocalizedString[]
    dinner: LocalizedString[]
  }
  allergenInfo?: LocalizedString
}

// ============================================================================
// Gallery & Media
// ============================================================================

export interface GalleryCategory {
  id: string
  slug: string
  name: LocalizedString
  description: LocalizedString
  icon?: string
  order: number
}

export interface GalleryImage {
  id: string
  src: string
  alt: LocalizedString
  caption?: LocalizedString
  categories: string[] // Category IDs
  program?: string // Optional program ID
  date?: string // ISO date
  featured?: boolean
}

export interface VideoTestimonial {
  id: string
  title: LocalizedString
  description: LocalizedString
  videoUrl: string // YouTube, Vimeo, or direct link
  thumbnail: string
  author: LocalizedString
  program?: string
  date: string
  duration?: number // in seconds
  featured?: boolean
}

export interface VirtualTour {
  id: string
  name: LocalizedString
  description: LocalizedString
  tourUrl: string // 360 tour link (Matterport, etc.)
  thumbnail: string
  areas: VirtualTourArea[]
}

export interface VirtualTourArea {
  id: string
  name: LocalizedString
  description: LocalizedString
  images: string[]
}

// ============================================================================
// Reviews & Social Proof
// ============================================================================

export interface Review {
  id: string
  author: LocalizedString
  authorPhoto?: string
  rating: number // 1-5
  text: LocalizedString
  date: string // ISO date

  childAge: string // "4" or "3, 5" for multiple children
  program: string // Program ID
  duration: LocalizedString // "Ходим 8 месяцев"

  photos?: string[]
  videoLink?: string
  verified: boolean
  featured?: boolean
}

export interface SuccessStory {
  id: string
  slug: string
  title: LocalizedString
  summary: LocalizedString
  story: LocalizedString // Full story HTML/Markdown
  childName: LocalizedString // "Маша" - just first name
  childAge: string
  program: string
  duration: LocalizedString
  image: string
  gallery?: string[]
  outcomes: LocalizedString[] // Achievements
  parentQuote: LocalizedString
  date: string
  featured?: boolean
}

// ============================================================================
// Enrollment Process
// ============================================================================

export interface EnrollmentStep {
  id: string
  order: number
  title: LocalizedString
  description: LocalizedString
  icon: string
  status?: 'pending' | 'in-progress' | 'completed'
}

export interface RequiredDocument {
  id: string
  name: LocalizedString
  description: LocalizedString
  required: boolean
  format?: string[] // ['PDF', 'JPG', 'PNG']
  maxSize?: number // in MB
  category: 'personal' | 'medical' | 'legal'
}

export interface OnboardingChecklist {
  id: string
  title: LocalizedString
  items: OnboardingChecklistItem[]
}

export interface OnboardingChecklistItem {
  id: string
  task: LocalizedString
  description: LocalizedString
  deadline?: LocalizedString // "До первого дня"
  completed: boolean
  category: 'document' | 'preparation' | 'orientation'
}

// ============================================================================
// FAQ & Resources
// ============================================================================

export interface FAQCategory {
  id: string
  slug: string
  name: LocalizedString
  description?: LocalizedString
  order: number
  icon?: string
}

export interface FAQItem {
  id: string
  question: LocalizedString
  answer: LocalizedString
  category: string // Category ID
  order: number
  tags?: string[]
}

export interface DownloadableResource {
  id: string
  title: LocalizedString
  description: LocalizedString
  fileUrl: string
  fileSize: string // "2.5 MB"
  fileType: 'PDF' | 'DOC' | 'XLS' | 'ZIP'
  category: string
  thumbnail?: string
  downloads: number
  date: string
}

export interface BlogPost {
  id: string
  slug: string
  title: LocalizedString
  excerpt: LocalizedString
  content: LocalizedString // HTML or Markdown
  author: {
    name: LocalizedString
    role: LocalizedString
    photo?: string
  }
  image: string
  category: string
  tags: string[]
  publishedAt: string
  readTime: number // in minutes
  featured?: boolean
}

// ============================================================================
// Forms & Bookings
// ============================================================================

export interface EnrollmentForm {
  parentInfo: {
    firstName: string
    lastName: string
    phone: string
    email: string
    alternatePhone?: string
  }

  childInfo: {
    firstName: string
    lastName: string
    dateOfBirth: string
    gender: 'male' | 'female'
    allergies?: string
    medicalNotes?: string
    specialNeeds?: string
  }

  program: string // Program ID
  pricingTier: string // Pricing tier ID
  additionalServices: string[] // Service IDs
  startDate: string // Desired start date

  tourRequested: boolean
  preferredTourDates?: string[] // ISO dates

  howDidYouHear?: string
  message?: string

  agreedToTerms: boolean
  agreedToPrivacy: boolean
}

export interface BookingSlot {
  id: string
  branchId: string
  date: string // ISO date
  time: string // "10:00"
  type: 'tour' | 'trial'
  available: boolean
  teacherId?: string
}

export interface Booking {
  id: string
  parentName: string
  phone: string
  email: string
  childName: string
  childAge: string
  slotId: string
  status: 'confirmed' | 'pending' | 'cancelled'
  createdAt: string
}

// ============================================================================
// Availability & Urgency
// ============================================================================

export interface Availability {
  branchId: string
  programId: string
  spotsAvailable: number
  totalSpots: number
  lastUpdated: string
  nextIntakeDate?: string
  waitlist: boolean
}

export interface Promotion {
  id: string
  title: LocalizedString
  description: LocalizedString
  discount: string // "15%", "5000₽"
  expiryDate: string // ISO date
  conditions: LocalizedString
  ctaText: LocalizedString
  type: 'earlyBird' | 'seasonal' | 'referral' | 'limited'
  active: boolean
}

// ============================================================================
// Certifications & Licenses
// ============================================================================

export interface Certification {
  id: string
  name: LocalizedString
  issuer: LocalizedString
  number: string
  issueDate: string
  expiryDate?: string
  documentUrl: string
  logo?: string
  type: 'license' | 'certificate' | 'award'
}

// ============================================================================
// Comparison Data
// ============================================================================

export interface ComparisonFeature {
  feature: LocalizedString
  kindergarten: string | boolean
  regular: string | boolean
  highlight?: boolean
}
