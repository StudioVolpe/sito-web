import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getArticleBySlug, getAllArticleSlugs, getStrapiMediaUrl } from '@/lib/strapi';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Articolo non trovato',
    };
  }

  return {
    title: article.title,
    description: article.excerpt || `Leggi l'articolo ${article.title} dallo Studio Volpe`,
    openGraph: {
      title: article.title,
      description: article.excerpt || undefined,
      type: 'article',
      publishedTime: article.publishedAt,
      images: article.coverImage
        ? [{ url: getStrapiMediaUrl(article.coverImage.url) }]
        : undefined,
    },
  };
}

export const revalidate = 60;

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary-dark py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Link
              href="/news"
              className="inline-flex items-center text-primary-light hover:text-white transition-colors mb-6"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Torna alle News
            </Link>
            <p className="text-primary mb-4">
              {new Date(article.publishedAt).toLocaleDateString('it-IT', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      {article.coverImage && (
        <section className="bg-primary-light/30">
          <div className="container-custom py-8">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg relative">
                <Image
                  src={getStrapiMediaUrl(article.coverImage.url)}
                  alt={article.coverImage.alternativeText || article.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <article className="max-w-3xl mx-auto">
            {article.excerpt && (
              <p className="text-xl text-secondary leading-relaxed mb-8 font-medium">
                {article.excerpt}
              </p>
            )}

            <div
              className="prose prose-lg prose-secondary max-w-none
                prose-headings:text-secondary-dark prose-headings:font-bold
                prose-p:text-secondary prose-p:leading-relaxed
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-secondary-dark
                prose-ul:text-secondary prose-ol:text-secondary
                prose-blockquote:border-primary prose-blockquote:bg-primary-light/30 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>
        </div>
      </section>

      {/* Share & Back */}
      <section className="py-8 bg-primary-light/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto flex justify-between items-center">
            <Link
              href="/news"
              className="inline-flex items-center text-secondary hover:text-primary transition-colors font-medium"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Torna alle News
            </Link>

            <div className="flex items-center space-x-4">
              <span className="text-secondary text-sm">Condividi:</span>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  `${process.env.NEXT_PUBLIC_SITE_URL}/news/${article.slug}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
                aria-label="Condividi su LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent(
                  article.title
                )}&body=${encodeURIComponent(
                  `Leggi questo articolo: ${process.env.NEXT_PUBLIC_SITE_URL}/news/${article.slug}`
                )}`}
                className="text-secondary hover:text-primary transition-colors"
                aria-label="Condividi via Email"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
