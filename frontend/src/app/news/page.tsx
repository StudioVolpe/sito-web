import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getArticles, getStrapiMediaUrl } from '@/lib/strapi';
import Card, { CardContent } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'News',
  description:
    'Le ultime novità fiscali, normative e aggiornamenti dallo Studio Volpe.',
};

export const revalidate = 60;

export default async function NewsPage() {
  const { articles } = await getArticles(1, 12);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary-dark py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">News</h1>
          <p className="text-primary-light text-lg max-w-2xl mx-auto">
            Rimani aggiornato sulle ultime novità fiscali, normative e approfondimenti
            dal mondo della consulenza.
          </p>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-16 bg-primary-light/30">
        <div className="container-custom">
          {articles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link key={article.id} href={`/news/${article.slug}`}>
                  <Card hover className="h-full">
                    {/* Cover Image */}
                    <div className="aspect-video bg-secondary-light rounded-lg mb-4 overflow-hidden -mx-6 -mt-6">
                      {article.coverImage ? (
                        <Image
                          src={getStrapiMediaUrl(article.coverImage.url)}
                          alt={article.coverImage.alternativeText || article.title}
                          width={400}
                          height={225}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-secondary">
                          <svg
                            className="w-12 h-12 opacity-30"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                            />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Date */}
                    <p className="text-sm text-primary mb-2">
                      {new Date(article.publishedAt).toLocaleDateString('it-IT', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>

                    {/* Title */}
                    <h2 className="text-xl font-semibold text-secondary-dark mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>

                    {/* Excerpt */}
                    <CardContent>
                      <p className="text-sm line-clamp-3">
                        {article.excerpt || 'Leggi l\'articolo per saperne di più...'}
                      </p>
                    </CardContent>

                    {/* Read More */}
                    <div className="mt-4 text-primary font-medium text-sm flex items-center">
                      Leggi di più
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-secondary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-secondary opacity-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-secondary-dark mb-2">
                Nessun articolo disponibile
              </h2>
              <p className="text-secondary">
                Gli articoli saranno pubblicati a breve. Torna a trovarci!
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
