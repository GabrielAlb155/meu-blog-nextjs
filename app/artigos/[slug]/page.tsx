import { notFound } from 'next/navigation';
import { getArtigos, getArtigoBySlug } from '@/lib/api';
import Link from 'next/link';

// Adicione esta linha para remover o aviso de "slower user experience"
export const instant = false;

type Props = {
  params: Promise<{ slug: string }>;
};
export async function generateStaticParams() {
  const artigos = getArtigos();
  return artigos.map((artigo) => ({
    slug: artigo.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const artigo = getArtigoBySlug(resolvedParams.slug);
  
  if (!artigo) return { title: 'Artigo não encontrado' };
  return { title: `${artigo.title} | Meu Blog`, description: artigo.description };
}

export default async function ArtigoPage({ params }: Props) {
  const resolvedParams = await params;
  const artigo = getArtigoBySlug(resolvedParams.slug);

  if (!artigo) notFound(); 

  return (
    <main className="container">
      <Link href="/" style={{ 
        display: 'inline-block', 
        marginBottom: '1.5rem', 
        color: '#2563eb', 
        fontWeight: '500' 
      }}>
        &larr; Voltar para o início
      </Link>
      
      <article className="card">
        <h1 className="titulo-principal" style={{ textAlign: 'left', lineHeight: '1.2' }}>
          {artigo.title}
        </h1>
        
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', color: '#6b7280', fontSize: '0.9rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #e5e7eb' }}>
          <strong>{artigo.author}</strong>
          <span>&bull;</span>
          <time>{artigo.date}</time>
        </div>
        
        <div style={{ fontSize: '1.125rem', color: '#374151', lineHeight: '1.8' }}>
          {artigo.content}
        </div>
      </article>
    </main>
  );
}