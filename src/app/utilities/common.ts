import { Metadata } from 'next';
import { MetadataParams } from '../interfaces/MetadataProps';
import { metadata } from './metadata/metadata';
import { LANGUAGES, LOCALE, META_KEY, SITE_NAME } from './constants';

type RegulatorPropFn = (...args: unknown[]) => unknown;

export const debounce = (
  fn: RegulatorPropFn,
  threshold: number = 500,
  context: object | null = null
) => {
  let timer: ReturnType<typeof setTimeout>;
  return function (...args: unknown[]) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, threshold);
  };
};

export const throttle = (
  fn: RegulatorPropFn,
  threshold: number = 500,
  context: object | null = null
) => {
  let last: number = -1,
    timer: ReturnType<typeof setTimeout>;

  return function (...args: unknown[]) {
    const now = Date.now();

    if (last && now < last + threshold) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
};

export const createMetadata = (key: META_KEY, params?: MetadataParams) => {
  const config = { ...metadata[key], ...params };
  const { title, description, keywords, canonical, type, images } = config;

  const metadataObj: Metadata = {
    title,
    keywords,
    description,
    alternates: {
      canonical,
      languages: LANGUAGES,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      images,
      type,
      siteName: SITE_NAME,
      locale: LOCALE,
    },
  };

  return metadataObj;
};
