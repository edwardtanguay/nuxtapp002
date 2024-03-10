export type Skill = {
	idCode: string;
	name: string;
	url: string;
	description: string
	importance: Importance
}

type Importance = "veryUseful" | "somewhatUseful" | "notVeryUseful";