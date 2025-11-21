'use client';

import { useEffect, useState } from 'react';
import { Send } from 'lucide-react';

interface TallyEmbedProps {
  embedUrl: string;
  fallbackUrl: string;
  fallbackButtonText: string;
}

export default function TallyEmbed({ embedUrl, fallbackUrl, fallbackButtonText }: TallyEmbedProps) {
  const [src, setSrc] = useState('');
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!embedUrl) {
      setHasError(true);
      return;
    }

    // Capture UTM params and ref from current window URL
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get('utm_source');
    const utmMedium = params.get('utm_medium');
    const utmCampaign = params.get('utm_campaign');
    const ref = params.get('ref');

    // Construct new URL with params
    const url = new URL(embedUrl);
    if (utmSource) url.searchParams.set('utm_source', utmSource);
    if (utmMedium) url.searchParams.set('utm_medium', utmMedium);
    if (utmCampaign) url.searchParams.set('utm_campaign', utmCampaign);
    if (ref) url.searchParams.set('ref', ref);

    setSrc(url.toString());
  }, [embedUrl]);

  if (hasError || !src) {
    return (
      <div className="flex justify-center">
        <a
          href={fallbackUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-xl bg-white text-primary-900 font-bold hover:bg-primary-50 transition-colors shadow-lg flex items-center justify-center gap-2"
        >
          {fallbackButtonText}
          <Send className="w-4 h-4" />
        </a>
      </div>
    );
  }

  return (
    <div className="w-full h-[500px] md:h-[600px] bg-transparent">
      <iframe
        src={src}
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="DailySpark Waitlist"
        className="w-full h-full bg-transparent"
        onError={() => setHasError(true)}
      />
    </div>
  );
}
