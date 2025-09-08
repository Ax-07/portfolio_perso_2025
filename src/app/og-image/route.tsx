import { ImageResponse } from "next/og";
import { SITE_METADATA } from "@/config";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0, 20px 20px",
          position: "relative",
          zIndex: 0,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 824"
          fill="none"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            opacity: 0.3,
          }}
        >
          <g clip-path="url(#clip0_413_217)">
            <line y1="74.5" x2="1200" y2="74.5" stroke="#00A9FC" />
            <line y1="149.5" x2="1200" y2="149.5" stroke="#00A9FC" />
            <line y1="224.5" x2="1200" y2="224.5" stroke="#00A9FC" />
            <line y1="299.5" x2="1200" y2="299.5" stroke="#00A9FC" />
            <line y1="374.5" x2="1200" y2="374.5" stroke="#00A9FC" />
            <line y1="449.5" x2="1200" y2="449.5" stroke="#00A9FC" />
            <line y1="524.5" x2="1200" y2="524.5" stroke="#00A9FC" />
            <line y1="599.5" x2="1200" y2="599.5" stroke="#00A9FC" />
            <line
              y1="-0.5"
              x2="1200"
              y2="-0.5"
              transform="matrix(1 0.00080921 -0.00129996 0.999999 0.000244141 675)"
              stroke="#00A9FC"
            />
            <line
              y1="-0.5"
              x2="1200"
              y2="-0.5"
              transform="matrix(1 0.00080921 -0.00129996 0.999999 0.000244141 750.971)"
              stroke="#00A9FC"
            />
            <line x1="75.5" x2="75.5" y2="825" stroke="#00A9FC" />
            <line x1="150.5" x2="150.5" y2="825" stroke="#00A9FC" />
            <line x1="225.5" x2="225.5" y2="825" stroke="#00A9FC" />
            <line x1="300.5" x2="300.5" y2="825" stroke="#00A9FC" />
            <line x1="375.5" x2="375.5" y2="825" stroke="#00A9FC" />
            <line x1="450.5" x2="450.5" y2="825" stroke="#00A9FC" />
            <line x1="525.5" x2="525.5" y2="825" stroke="#00A9FC" />
            <line x1="600.5" x2="600.5" y2="825" stroke="#00A9FC" />
            <line x1="675.5" x2="675.5" y2="825" stroke="#00A9FC" />
            <line x1="750.5" x2="750.5" y2="825" stroke="#00A9FC" />
            <line x1="825.5" x2="825.5" y2="825" stroke="#00A9FC" />
            <line x1="900.5" x2="900.5" y2="825" stroke="#00A9FC" />
            <line x1="975.5" x2="975.5" y2="825" stroke="#00A9FC" />
            <line x1="1050.5" x2="1050.5" y2="825" stroke="#00A9FC" />
            <line x1="1125.5" x2="1125.5" y2="825" stroke="#00A9FC" />
            <rect width="1200" height="825" fill="url(#paint0_radial_413_217)" />
          </g>
          <defs>
            <radialGradient
              id="paint0_radial_413_217"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(600 412.5) rotate(90) scale(412.5 600)"
            >
              <stop stop-opacity="0" />
              <stop offset="1" />
            </radialGradient>
            <clipPath id="clip0_413_217">
              <rect width="1200" height="824" fill="white" />
            </clipPath>
          </defs>
        </svg>
        {/* Gradient overlay similaire au hero */}
        {/* <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 10,
            backgroundImage: "radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.9) 70%)",
          }}
        /> */}

        {/* Éléments flottants comme dans le hero */}
        <div
          style={{
            position: "absolute",
            top: "50px",
            left: "50px",
            width: "200px",
            height: "200px",
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "50px",
            right: "50px",
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Contenu principal */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px",
            position: "relative",
            zIndex: 10,
          }}
        >
          <h1
            style={{
              fontSize: "80px",
              fontWeight: "black",
              color: "white",
              textAlign: "center",
              marginBottom: "20px",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              background: "linear-gradient(135deg, #ffffff 10%, #10b981 50%, #00a9fc 80%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
            }}
          >
            {SITE_METADATA.author}
          </h1>{" "}
          <p
            style={{
              fontSize: "42px",
              color: "#10b981",
              textAlign: "center",
              marginBottom: "40px",
              fontWeight: "600",
            }}
          >
            Développeur Full Stack
          </p>
          <p
            style={{
              fontSize: "28px",
              color: "#9ca3af",
              textAlign: "center",
              marginBottom: "40px",
              maxWidth: "800px",
              lineHeight: 1.3,
            }}
          >
            Créateur d'expériences numériques modernes et performantes
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            {["React", "Next.js", "Node.js", "TypeScript", "Tailwind"].map((tech) => (
              <span
                key={tech}
                style={{
                  padding: "12px 24px",
                  backgroundColor: "rgba(16, 185, 129, 0.1)",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                  borderRadius: "30px",
                  color: "#10b981",
                  fontSize: "22px",
                  fontWeight: "500",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              fontSize: "24px",
              color: "#6b7280",
            }}
          >
            <span>📍</span>
            <span>Ardèche, France</span>
            <span>•</span>
            <span>Remote friendly</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
