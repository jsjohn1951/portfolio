export interface useExp
{
	name: string,
	msg: string,
	img: string[],
	ico: string[],
	date: string,
	repo: string,
	link?: string,
	liveUrl?: string,           // URL to deployed/live project
	metrics?: string[],         // Quantifiable achievements (e.g., "95+ Lighthouse score")
	techStack?: string[],       // Technologies used (e.g., ["React", "Next.js"])
	role?: string,              // Role in project (e.g., "Lead Developer")
	teamSize?: number           // Team size (e.g., 1 for solo, 4 for team)
}