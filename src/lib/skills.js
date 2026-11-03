const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Whole-token, case-sensitive match so "Go" does not hit "Google" and ".NET" does not hit "ASP.NET".
const matcher = (term) => new RegExp(`(?<![A-Za-z0-9])${escapeRe(term)}(?![A-Za-z0-9])`);

// Element ids used by Experience.astro and Projects.astro
export const pointId = (jobIndex, pointIndex) => `p-${jobIndex}-${pointIndex}`;
export const projectId = (index) => `pr-${index}`;

// Turns skill items into { name, hits } where hits are the ids of bullets/projects that mention it.
export function linkSkills(skills, experience, projects) {
  const sources = [
    ...experience.flatMap((job, j) => job.points.map((p, i) => ({ id: pointId(j, i), text: p.text }))),
    ...projects.map((p, i) => ({ id: projectId(i), text: p.text })),
  ];

  return skills.map((group) => {
    if (!group.items) return group;
    const items = group.items.map((item) => {
      const name = typeof item === 'string' ? item : item.name;
      const terms = typeof item === 'string' ? [item] : (item.match ?? [item.name]);
      const regexes = terms.map(matcher);
      const hits = sources.filter((s) => regexes.some((re) => re.test(s.text))).map((s) => s.id);
      return { name, hits };
    });
    return { ...group, items };
  });
}
