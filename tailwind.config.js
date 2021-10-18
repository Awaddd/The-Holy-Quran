module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        spacing: {
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.666667%',
            '2/6': '33.333333%',
            '3/6': '50%',
            '4/6': '66.666667%',
            '5/6': '83.333333%',
            '1/12': '8.333333%',
            '2/12': '16.666667%',
            '3/12': '25%',
            '4/12': '33.333333%',
            '5/12': '41.666667%',
            '6/12': '50%',
            '7/12': '58.333333%',
            '8/12': '66.666667%',
            '9/12': '75%',
            '10/12': '83.333333%',
            '11/12': '91.666667%',
        }
      },
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
