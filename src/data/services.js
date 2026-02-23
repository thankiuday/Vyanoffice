import {
  Copy,
  Palette,
  FileText,
  Scan,
  Layers,
  BookOpen,
  Stamp,
  Package,
  GraduationCap,
  Building2,
} from 'lucide-react'

/**
 * Service list for Vyan Office Solution.
 * Each service has id, title, description, and Lucide icon component.
 */
export const services = [
  {
    id: 'xerox',
    title: 'Xerox Copy / Photocopy',
    description:
      'Fast and clear black & white photocopies on our high-speed machines. Ideal for documents, forms, and study material at affordable rates.',
    icon: Copy,
  },
  {
    id: 'color-print',
    title: 'Color Print',
    description:
      'Vibrant color printing for presentations, reports, certificates, and photos. High-quality output on quality paper for a professional look.',
    icon: Palette,
  },
  {
    id: 'bw-print',
    title: 'Black & White Print',
    description:
      'Cost-effective B&W printing for assignments, notes, and official documents. Quick turnaround and crisp text every time.',
    icon: FileText,
  },
  {
    id: 'scanning',
    title: 'Document Scanning',
    description:
      'Get your documents scanned and saved in digital format. We support PDF and image outputs for records and submissions.',
    icon: Scan,
  },
  {
    id: 'lamination',
    title: 'Lamination',
    description:
      'Protect your ID cards, certificates, photos, and important documents with our lamination service. Multiple sizes available.',
    icon: Layers,
  },
  {
    id: 'binding',
    title: 'Spiral Binding',
    description:
      'Neat spiral binding for project reports, thesis, manuals, and booklets. Choose from different spine sizes and covers.',
    icon: BookOpen,
  },
  {
    id: 'stamp',
    title: 'Rubber Stamp Making',
    description:
      'Custom rubber stamps for office and personal use. Quick delivery and durable stamps for signatures and approvals.',
    icon: Stamp,
  },
  {
    id: 'bulk',
    title: 'Bulk Printing',
    description:
      'We handle large-volume printing for offices, events, and institutions. Competitive rates and on-time delivery for bulk orders.',
    icon: Package,
  },
  {
    id: 'student',
    title: 'Student Printing',
    description:
      'Student-friendly prices on photocopy, print, and binding. Perfect for notes, assignments, and project reports. Ask for student discount.',
    icon: GraduationCap,
  },
  {
    id: 'office',
    title: 'Office Printing Solutions',
    description:
      'Complete printing solutions for nearby companies: letterheads, forms, brochures, and regular office stationery. Reliable and fast.',
    icon: Building2,
  },
]
