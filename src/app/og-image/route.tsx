import { ImageResponse } from 'next/og';
import { SITE_METADATA } from '@/config';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          backgroundImage: 'radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)',
          backgroundSize: '100px 100px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderRadius: '20px',
            border: '2px solid #10b981',
            boxShadow: '0 0 100px rgba(16, 185, 129, 0.3)',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              marginBottom: '20px',
              lineHeight: 1.2,
            }}
          >
            {SITE_METADATA.author}
          </h1>
          <p
            style={{
              fontSize: '36px',
              color: '#10b981',
              textAlign: 'center',
              marginBottom: '30px',
              fontWeight: '600',
            }}
          >
            Développeur Full Stack
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '15px',
            }}
          >
            {['React', 'Next.js', 'Node.js', 'TypeScript'].map((tech) => (
              <span
                key={tech}
                style={{
                  padding: '8px 16px',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid #10b981',
                  borderRadius: '25px',
                  color: '#10b981',
                  fontSize: '20px',
                  fontWeight: '500',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
          <p
            style={{
              fontSize: '24px',
              color: '#9ca3af',
              textAlign: 'center',
              marginTop: '30px',
            }}
          >
            📍 Ardèche, France • Remote friendly
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
