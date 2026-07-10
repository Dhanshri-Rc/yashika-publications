import { Helmet } from "react-helmet-async";

const SITE_URL = "https://yashikapublications.com";

const SEO = ({
  title,
  description,
  path = "/",
  keywords = "",
  image = "/favicon.webp",
}) => {
  const canonicalUrl = `${SITE_URL}${path}`;
  const imageUrl = image.startsWith("http")
    ? image
    : `${SITE_URL}${image}`;

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      {keywords && <meta name="keywords" content={keywords} />}

      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Yashika Publications" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default SEO;