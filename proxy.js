import { NextResponse } from 'next/server';

const SUPPORTED = ['es', 'en', 'fr'];
const DEFAULT = 'es';
const COOKIE = 'atable_lang';

function detect(acceptLanguage) {
  if (!acceptLanguage) return DEFAULT;
  const langs = acceptLanguage
    .split(',')
    .map(part => {
      const [tag, q] = part.trim().split(';q=');
      return { code: tag.split('-')[0].toLowerCase(), q: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { code } of langs) {
    if (SUPPORTED.includes(code)) return code;
  }
  return DEFAULT;
}

export function proxy(request) {
  const response = NextResponse.next();
  const existing = request.cookies.get(COOKIE)?.value;

  if (!existing || !SUPPORTED.includes(existing)) {
    const lang = detect(request.headers.get('accept-language') || '');
    response.cookies.set(COOKIE, lang, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
    });
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon\\.ico|.*\\..*).*)'],
};
