const STRAPI_URL = process.env.STRAPI_API_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

interface StrapiImage {
  id: number;
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
  formats?: {
    thumbnail?: { url: string };
    small?: { url: string };
    medium?: { url: string };
    large?: { url: string };
  };
}

export interface Article {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  coverImage: StrapiImage | null;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

async function fetchWithTimeout(url: string, options: RequestInit = {}, timeout = 5000): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (STRAPI_TOKEN) {
    headers.Authorization = `Bearer ${STRAPI_TOKEN}`;
  }

  const response = await fetchWithTimeout(
    `${STRAPI_URL}/api${endpoint}`,
    {
      ...options,
      headers: {
        ...headers,
        ...options.headers,
      },
    },
    5000
  );

  if (!response.ok) {
    throw new Error(`Strapi API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export async function getArticles(
  page = 1,
  pageSize = 10
): Promise<{ articles: Article[]; pagination: { page: number; pageCount: number; total: number } }> {
  try {
    const response = await fetchAPI<StrapiResponse<Article[]>>(
      `/articles?populate=coverImage&sort=publishedAt:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}&publicationState=live`,
      { next: { revalidate: 60 } }
    );

    return {
      articles: response.data || [],
      pagination: {
        page: response.meta?.pagination?.page || 1,
        pageCount: response.meta?.pagination?.pageCount || 1,
        total: response.meta?.pagination?.total || 0,
      },
    };
  } catch (error) {
    console.error('Error fetching articles:', error);
    return {
      articles: [],
      pagination: { page: 1, pageCount: 1, total: 0 },
    };
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const response = await fetchAPI<StrapiResponse<Article[]>>(
      `/articles?filters[slug][$eq]=${slug}&populate=coverImage&publicationState=live`,
      { next: { revalidate: 60 } }
    );

    return response.data?.[0] || null;
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}

export async function getAllArticleSlugs(): Promise<string[]> {
  try {
    const response = await fetchAPI<StrapiResponse<Article[]>>(
      '/articles?fields[0]=slug&publicationState=live',
      { next: { revalidate: 60 } }
    );

    return response.data?.map((article) => article.slug) || [];
  } catch (error) {
    console.error('Error fetching article slugs:', error);
    return [];
  }
}

export function getStrapiMediaUrl(url: string | undefined): string {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
}
