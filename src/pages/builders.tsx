import AudiencePage from '../components/AudiencePage'

const caseStudy = '' // [PLACEHOLDER: project photo and case study for a home-builder or general-contractor ICF foundation.]

export default function Builders() {
  return (
    <AudiencePage
      title="ICF Foundations for Builders in Montana | Crown Construction"
      description="ICF foundations for home builders and general contractors in Anaconda, Butte, and Southwest Montana. Crown Construction works to your plans."
      path="/builders/"
      h1="ICF Foundations for Builders in Montana"
      intro="Crown Construction builds ICF foundations for home builders and general contractors in Anaconda, Butte, and Southwest Montana. The walls follow your plans, and the site is left ready for the next trade."
      points={[
        {
          title: 'Dependable schedule',
          text: 'The foundation is scheduled so the rest of the build has a date to follow.',
        },
        {
          title: 'Clean handoff',
          text: 'Forms, spoil, and trash come off the pad so the next trade is not cleaning up before they can start.',
        },
        {
          title: 'Working to your plans',
          text: 'The walls are built to the plans you send. The quote comes from those plans and a look at the ground.',
        },
      ]}
      placeholder={caseStudy}
    />
  )
}
