import AudiencePage from '../components/AudiencePage'

export default function PublicProjects() {
  return (
    <AudiencePage
      title="ICF Foundations for Public Projects in Montana | Crown Construction"
      description="ICF foundations for schools, libraries, and municipal buildings in Anaconda, Butte, and Southwest Montana. Crown Construction builds to the project specs."
      path="/public-projects/"
      h1="ICF Foundations for Public Projects in Montana"
      intro="Crown Construction builds ICF foundations for schools, libraries, and municipal buildings in Anaconda, Butte, and Southwest Montana. The work follows the project specs, and the wall is inspected before backfill."
      points={[
        {
          title: 'Specs and inspections',
          text: 'The foundation is built to the specs in the project documents, and the wall is inspected before backfill.',
        },
        {
          title: 'Documentation',
          text: 'Records for the foundation follow what that project’s spec asks for.',
        },
        {
          title: 'Safety',
          text: 'The site is kept so our crew and the other trades can work it.',
        },
      ]}
      placeholder="[PLACEHOLDER: public project photo and case study. Add Hearst Library or Lookout Pass here if that is the job you want shown.]"
    />
  )
}
