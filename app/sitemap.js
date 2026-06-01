import { SITE_URL } from './lib/seo';
import { SLUG_MAP } from './lib/translations';

export default function sitemap() {
  const now = new Date().toISOString();

  const homepage = {
    url: `${SITE_URL}/`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 1.0,
  };

  const servicePages = Object.keys(SLUG_MAP).map(key => ({
    url: `${SITE_URL}/${key}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  return [homepage, ...servicePages];
}
