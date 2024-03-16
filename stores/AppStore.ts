import { defineStore } from "pinia";
import { piniaInstance } from "@/globals";
import _rawSkills from "~/data/skills.json";
import type { AppStore, Skill } from "~/types";
import * as AppModel from "./AppModel";

export const appStore = defineStore("appStore", {
	state: (): AppStore => ({
		skills: [],
		notes: ["note one", "note two", "note three"],
		appMessage: "this is the default app message"
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
		deleteSkill(skill: Skill) {
			this.skills = this.skills.filter((m) => m.idCode !== skill.idCode);
		},
		async fill() {
			this.skills = await AppModel.getSkills();
		},
		setAppMessage(text: string) {
			this.appMessage = text;
		}
	},
})(piniaInstance);
