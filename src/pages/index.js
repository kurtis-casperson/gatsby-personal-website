import React from 'react'
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from 'gatsby-theme-portfolio-minimal'

export default function IndexPage() {
  return (
    <>
      <Seo title="Software Developer Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="Who am I !?" />
        <InterestsSection sectionId="details" heading="Skills" />
        <ProjectsSection sectionId="features" heading="Project Experience" />
        <ContactSection sectionId="contact" heading="Contact" />
      </Page>
    </>
  )
}
