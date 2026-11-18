import AudiencePage from '../components/AudiencePage'

export default function Commercial() {
  return (
    <AudiencePage
      title="ICF Foundations for Commercial Projects in Montana | Crown Construction"
      description="Large ICF foundations for commercial and multi-family projects in Anaconda, Butte, and Southwest Montana. Crown Construction coordinates with the GC."
      path="/commercial/"
      h1="ICF Foundations for Commercial and Multi-Family Projects in Montana"
      intro="Crown Construction builds large ICF foundations for commercial and multi-family projects in Anaconda, Butte, and Southwest Montana. The pour stays coordinated with the general contractor."
      points={[
        {
          title: 'Large pours',
          text: 'Commercial and multi-family foundations are poured as large ICF walls.',
        },
        {
          title: 'Crew capacity',
          text: 'The crew stays on the foundation from the excavation through the pour and backfill.',
        },
        {
          title: 'Coordination with the GC',
          text: 'The sequence is set with the general contractor so the next trade can get on the building.',
        },
      ]}
      placeholder="[PLACEHOLDER: project photo and case study for a commercial or multi-family ICF foundation.]"
    />
  )
}
