import { PageHero, Section } from '../../components/Section';
import StartupsClient from './StartupsClient';

export const metadata = {
  title: 'Startups',
  description: 'Funded ventures from the SIE ecosystem — ₹150 Cr+ raised across spacetech, construction tech, healthcare and climate — plus the full MS(E) scholar directory.',
};

export default function Startups() {
  return (
    <>
      <PageHero
        kicker="Startups"
        title="Ventures built here, funded out there"
        lead="₹150 Cr+ in external funding raised by student and alumni ventures supported by the SIE ecosystem — led by Modulus Housing's ₹70 Cr and GalaxEye's ₹58 Cr Series A rounds."
      />
      <Section>
        <StartupsClient />
      </Section>
    </>
  );
}
