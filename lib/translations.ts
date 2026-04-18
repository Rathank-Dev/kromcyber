export const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    community: 'Community',
    resources: 'Resources',
    contact: 'Contact',
    
    // Header
    title: 'Krom Cyber',
    subtitle: 'Cybersecurity Community',
    description: 'A community of cybersecurity professionals, researchers, and practitioners dedicated to advancing digital security.',
    
    // Common
    language: 'Language',
    english: 'English',
    khmer: 'ខ្មែរ',
    welcome: 'Welcome',
    logout: 'Logout',
    login: 'Login',
    register: 'Register',
  },
  km: {
    // Navigation
    home: 'ទំព័រដើម',
    about: 'អំពីយើងខ្ញុំ',
    community: 'សហគមន៍',
    resources: 'ធនធាន',
    contact: 'ទាក់ទងយើងខ្ញុំ',
    
    // Header
    title: 'ក្រូម ស៊ីបើ',
    subtitle: 'សហគមន៍សន្តិសុខក្នុងលោហៈ',
    description: 'សហគមន៍នៃអ្នកឯកទេសផ្នែកសន្តិសុខក្នុងលោហៈ អ្នកស្រាវស្រាវ និងអ្នកអនុវត្តដែលលះបង់ដល់ការរីកចម្រើននៃសន្តិសុខឌីជីថល។',
    
    // Common
    language: 'ភាសា',
    english: 'English',
    khmer: 'ខ្មែរ',
    welcome: 'សូមស្វាគមន៍',
    logout: 'ចេញ',
    login: 'ចូល',
    register: 'ចុះឈ្មោះ',
  },
} as const;

export type Language = 'en' | 'km';
export type TranslationKey = keyof typeof translations['en'];

export const getTranslation = (language: Language, key: TranslationKey): string => {
  return translations[language][key] || translations['en'][key];
};
