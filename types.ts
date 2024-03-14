type Importance = "veryUseful" | "somewhatUseful" | "notVeryUseful";

export type Skill = {
	idCode: string;
	name: string;
	url: string;
	description: string;
	importance: Importance;
};

export type Product = {
	id: number;
	title: string;
	image: string;
}

export type Noun = {
	article: string;
	singular: string;
	plural: string;
}

export type AppStore = {
	skills: Skill[];
	notes: string[];
}