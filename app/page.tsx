import Link from 'next/link';
import { getArtigos } from '@/lib/api';

export default function Home() {
  const artigos = getArtigos();

  return (
    <main className="container">
      <header style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
        <h1 className="titulo-principal">Meu Blog</h1>
        <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>
          Explorando o Next.js, Server Components e muito mais.
        </p>
      </header>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {artigos.map((artigo) => (
          <Link href={`/artigos/${artigo.slug}`} key={artigo.id}>
            <article className="card">
              <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#2563eb', marginBottom: '0.5rem' }}>
                {artigo.title}
              </h2>
              <p style={{ color: '#4b5563', marginBottom: '1rem' }}>
                {artigo.description}
              </p>
              <span style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
                {artigo.date} &bull; Por {artigo.author}
              </span>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}