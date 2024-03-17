import { defineStore } from "pinia";
import { piniaInstance } from "@/globals";
import _rawSkills from "~/data/skills.json";
import type { AppStore, Skill } from "~/types";
import * as AppModel from "./AppModel";

export const appStore = defineStore("appStore", {
	state: (): AppStore => ({
		skills: [],
		notes: ["note one", "note two", "note three"],
		appMessage: "this is the default app message",
		jobs: [],
	}),
	getters: {
		numberOfSkills: (state): number => {
			return state.skills.length;
		},
		numberOfNotes: (state): number => {
			return state.notes.length;
		},
		getSkillsByRank() {
			return (rank: number) => this.skills.filter((m) => m.rank === rank);
		},
	},
	actions: {
		async fill() {
			this.jobs = await AppModel.getJobs();
			this.skills = await AppModel.getSkills();
		},
		deleteSkill(skill: Skill) {
			this.skills = this.skills.filter((m) => m.idCode !== skill.idCode);
		},
		setAppMessage(text: string) {
			this.appMessage = text;
		},
	},
})(piniaInstance);
