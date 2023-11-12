const canonicalUrl = 'https://techwhizabdul.com';
const metaImage =
  'https://res.cloudinary.com/dldu47br2/image/upload/v1699713003/abdul23lm/techwhizabdul.com.png';
const metaDescription =
  'Experienced Software Engineer with 5+ years of expertise, specializing in frontend development. I excel in crafting pixel-perfect web annd mobile applications';

const defaultSEOConfig = {
  defaultTitle: 'Abdull Latif Munjiat - Personal Website',
  description: metaDescription,
  canonical: canonicalUrl,
  openGraph: {
    canonical: canonicalUrl,
    title: 'Abdull Latif Munjiat - Personal Website',
    description: metaDescription,
    type: 'website',
    images: [
      {
        url: metaImage,
        alt: 'techwhizabdul.com og-image',
        width: 800,
        height: 600,
      },
      {
        url: metaImage,
        alt: 'techwhizabdul.com og-image',
        width: 1200,
        height: 630,
      },
      {
        url: metaImage,
        alt: 'techwhizabdul.com og-image',
        width: 1600,
        height: 900,
      },
    ],
    site_name: 'techwhizabdul.com',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
