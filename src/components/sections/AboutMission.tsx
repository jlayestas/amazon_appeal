interface ValueItem {
  title: string;
  description: string;
}

interface MissionStrings {
  visionLabel: string;
  vision: string;
  missionLabel: string;
  mission: string;
  valuesLabel: string;
  values: readonly ValueItem[];
}

interface AboutMissionProps {
  mission: MissionStrings;
}

export function AboutMission({ mission }: AboutMissionProps) {
  return (
    <section className="bg-[#f9f7f4] px-5 py-16">
      <div className="mx-auto max-w-4xl space-y-14">
        {/* Vision & Mission */}
        <div className="space-y-8">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#8a7560]">
              {mission.visionLabel}
            </p>
            <p className="text-xl font-semibold leading-snug text-[#1a2e4a] sm:text-2xl">
              {mission.vision}
            </p>
          </div>

          <div className="border-t border-slate-200" aria-hidden="true" />

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#8a7560]">
              {mission.missionLabel}
            </p>
            <p className="text-xl font-semibold leading-snug text-[#1a2e4a] sm:text-2xl">
              {mission.mission}
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-[#8a7560]">
            {mission.valuesLabel}
          </p>
          <div className="grid gap-5 sm:grid-cols-3">
            {mission.values.map((v) => (
              <div
                key={v.title}
                className="rounded-xl border border-slate-200 bg-white px-5 py-6 shadow-sm"
              >
                <p className="mb-2 font-semibold text-[#1a2e4a]">{v.title}</p>
                <p className="text-sm leading-relaxed text-slate-500">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
