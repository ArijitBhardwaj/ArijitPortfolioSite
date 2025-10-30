import resumePdf from "@assets/Arijit_Bhardwaj_Resume_FullStackDeveloper-30_10_1761848178012.pdf";

export default function Resume() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-primary/10 via-background to-background border-b border-border">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resume</h1>
          <p className="text-lg text-muted-foreground">
            Full Stack Developer | XR Specialist | AI Enthusiast
          </p>
        </div>
      </section>

      {/* PDF Viewer Section */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-lg border border-border overflow-hidden shadow-lg">
            <iframe
              src={resumePdf}
              className="w-full"
              style={{ height: "calc(100vh - 250px)", minHeight: "600px" }}
              title="Arijit Bhardwaj Resume"
              data-testid="iframe-resume"
            />
          </div>
          <div className="text-center mt-6">
            <a
              href={resumePdf}
              download="Arijit_Bhardwaj_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
              data-testid="link-download-resume"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
