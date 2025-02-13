import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['ucarecdn.com',  'cdn.sanity.io'],
    },
};
 
export default withNextIntl(nextConfig);