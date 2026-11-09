import artigosData from '../data/artigos.json';
import slugify from 'slugify';

export function getArtigos() {
  return artigosData.map(artigo => ({
    ...artigo,
    slug: slugify(artigo.title, { lower: true, strict: true })
  }));
}

export function getArtigoBySlug(slug: string) {
  const artigos = getArtigos();
  return artigos.find(artigo => artigo.slug === slug);
}