import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



const CalendarPage = () => {
  return <div className="min-h-screen bg-background">
      <SEO title="Book a Demo" description="Schedule a demo to see how Repeadly's loyalty program can help grow your small business." canonical="/calendar" />
      <Navbar />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Book a Demo
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            See how Repeadly can help grow your business. Pick a time that works for you.
          </p>
        </div>
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="rounded-2xl border border-border bg-card overflow-hidden min-h-[700px]">
            {/* Replace the Calendly URL below with your own */}
            <iframe src="https://cal.com/repeadly/demo" title="Schedule a demo" width="100%" height="700" frameBorder="0" className="w-full" />
          </div>
        </div>
      </section>
      <Footer />
    </div>;
};

export default CalendarPage;