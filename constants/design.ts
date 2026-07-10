export const colors = {
  background: '#0f172a',
  surface: '#172033',
  surfaceMuted: '#1e293b',
  surfacePressed: '#253348',
  border: '#263449',
  text: '#ffffff',
  textSecondary: '#cbd5e1',
  textMuted: '#94a3b8',
  primary: '#22c55e',
  warning: '#facc15',
  danger: '#ef4444',
  selected: '#2563eb',
  actionSecondary: '#334155',
  tabBar: '#101827',
  accents: {
    singlePlayer: '#22c55e',
    multiplayer: '#38bdf8',
    league: '#facc15',
    statistics: '#fb7185',
    profile: '#a78bfa',
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 28,
  xxxl: 40,
};

export const radius = {
  sm: 8,
  md: 12,
  pill: 999,
};

export const typography = {
  hero: {
    fontSize: 34,
    fontWeight: '900' as const,
    letterSpacing: 0,
  },
  title: {
    fontSize: 26,
    fontWeight: '800' as const,
    lineHeight: 34,
  },
  question: {
    fontSize: 24,
    fontWeight: '800' as const,
    lineHeight: 32,
  },
  body: {
    fontSize: 18,
    lineHeight: 26,
  },
  meta: {
    fontSize: 16,
    fontWeight: '600' as const,
  },
  button: {
    fontSize: 18,
    fontWeight: '800' as const,
  },
};
