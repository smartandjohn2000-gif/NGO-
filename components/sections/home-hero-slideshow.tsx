import { ButtonLink } from "@/components/ui/button";

const HERO_IMAGE = "/images/main_uploads/main-4.jpg";

export function HomeHeroSlideshow() {
  return (
    <section className="wii-hero" aria-label="World Impact Initiative hero">
      <div className="wii-hero__image" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
      <div className="wii-hero__overlay" />

      <div className="container-shell wii-hero__content">
        <p className="wii-hero__eyebrow">World Impact Initiative</p>
        <h1 className="wii-hero__title">
          Creating Lasting Impact Through Compassion, Protection, and Opportunity
        </h1>
        <div className="wii-hero__actions">
          <ButtonLink href="#impact-areas" variant="secondary" size="lg">
            Discover Our Work
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
