module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
      styled: true,
      base: true,
      utils: true,
      themes: [
        {
            'origin': {
                'primary' : '#4F46E5',
                'primary-focus' : '#4338CA',
                'primary-content' : '#ffffff',
                'secondary' : '#EF4444',
                'secondary-focus' : '#DC2626',
                'secondary-content' : '#ffffff',
                'accent' : '#34D399',
                'accent-focus' : '#2EBD89',
                'accent-content' : '#ffffff',
                'neutral' : '#3d4451',
                'neutral-focus' : '#2a2e37',
                'neutral-content' : '#ffffff',
                'base-100' : '#ffffff',
                'base-200' : '#f9fafb',
                'base-300' : '#d1d5db',
                'base-content' : '#1f2937',
                'info' : '#2094f3',
                'success' : '#45f775',
                'warning' : '#FBBF24',
                'error' : '#EF4444',
            }
        }
      ]}
}
