import eslintPluginReact from 'eslint-plugin-react';
import compat from 'eslint-config-flatCompat';

const eslintConfig = [
  // Spread Next.js and TypeScript compatibility configs
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // Your custom config for react-three-fiber
  {
    plugins: {
      react: eslintPluginReact,
    },
    rules: {
      'react/jsx-pascal-case': [
        'error',
        {
          allowAllCaps: true,
          ignore: [
            'ambientLight',
            'pointLight',
            'directionalLight',
            'spotLight',
            'mesh',
            'meshStandardMaterial',
            'boxGeometry',
            'sphereGeometry',
            'group',
          ],
        },
      ],
    },
  },
];

export default eslintConfig;
