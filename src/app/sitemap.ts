import { MetadataRoute } from 'next';
import { supabase } from '../../lib/supabase';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const BASE_URL = 'https://profile-mirza.my.id/';
  const { data: daftarProyek } = await supabase
    .from('projects')
    .select('id');

  const halamanProyek = (daftarProyek ?? []).map((item) => ({
    url: `${BASE_URL}/projects/${item.id}`,
    lastModified: new Date(),
  }));

  return [
    { url: BASE_URL, lastModified: new Date() },
    { url: `${BASE_URL}/projects`, lastModified: new Date() },
    { url: `${BASE_URL}/about`, lastModified: new Date() },
    ...halamanProyek,
  ];
}