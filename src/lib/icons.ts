// Icon mappings using Lucide React icons
import { 
  Code2, 
  FileText, 
  Zap, 
  Shield, 
  Coffee, 
  Waves, 
  Gem,
  Cloud,
  Home,
  Cpu,
  Apple,
  MonitorSpeaker,
  Terminal,
  Link,
  Palette,
  Globe,
  TestTube as Flask,
  BarChart,
  MessageCircle,
  Database,
  TrendingUp,
  Truck,
  Wrench,
  PieChart,
  Settings,
  Folder,
  DollarSign,
  Gamepad2,
  Brain,
  MapPin,
  Activity,
  Music,
  Search,
  Smartphone,
  Trophy,
  Headphones,
  Languages,
  Volume2,
  Plane,
  GitBranch,
  Briefcase,
  Cog
} from 'lucide-react'

// Language icon mapping
export const languageIcons = {
  python: Code2,
  typescript: FileText,
  javascript: FileText,
  go: Zap,
  rust: Shield,
  csharp: FileText,
  java: Coffee,
  cpp: Waves,
  ruby: Gem
}

// Language text mapping (removing emojis)
export const languageLabels: Record<string, string> = {
  python: 'Python',
  typescript: 'TypeScript',
  javascript: 'JavaScript', 
  go: 'Go',
  rust: 'Rust',
  csharp: 'C#',
  java: 'Java',
  cpp: 'C++',
  ruby: 'Ruby'
}

// Platform icon mapping
export const platformIcons = {
  cloud: Cloud,
  local: Home,
  embedded: Cpu
}

// Platform text mapping
export const platformLabels: Record<string, string> = {
  cloud: 'Cloud',
  local: 'Local',
  embedded: 'Embedded'
}

// OS icon mapping  
export const osIcons = {
  macos: Apple,
  windows: MonitorSpeaker,
  linux: Terminal
}

// OS text mapping
export const osLabels: Record<string, string> = {
  macos: 'macOS',
  windows: 'Windows',
  linux: 'Linux'
}

// Category icon mapping
export const categoryIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  link: Link,
  palette: Palette,
  globe: Globe,
  flask: Flask,
  cloud: Cloud,
  code: Code2,
  terminal: Terminal,
  'message-circle': MessageCircle,
  'bar-chart': BarChart,
  database: Database,
  'trending-up': TrendingUp,
  truck: Truck,
  wrench: Wrench,
  'pie-chart': PieChart,
  settings: Settings,
  folder: Folder,
  'dollar-sign': DollarSign,
  'gamepad-2': Gamepad2,
  brain: Brain,
  'map-pin': MapPin,
  activity: Activity,
  music: Music,
  search: Search,
  shield: Shield,
  smartphone: Smartphone,
  trophy: Trophy,
  headphones: Headphones,
  languages: Languages,
  'volume-2': Volume2,
  plane: Plane,
  'git-branch': GitBranch,
  briefcase: Briefcase,
  cog: Cog
}