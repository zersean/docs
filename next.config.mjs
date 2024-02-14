import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  flexsearch: {
    codeblocks: true,
  },
  codeHighlight: true,
  latex: true,
});

const nextConfig = withNextra({
  reactStrictMode: true,
  output: 'export',
  cleanDistDir: true,
  images: {
    unoptimized: true,
  },
});

export default nextConfig;
