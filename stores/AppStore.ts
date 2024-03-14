import { defineStore } from "pinia";
import { piniaInstance } from "@/globals";
import _rawSkills from "~/data/skills.json";
import type { AppStore, Skill } from "~/types";
import axios from "axios";

export const appStore = defineStore("appStore", {
	state: (): AppStore => ({
		skills: [],
		notes: ["note one", "note two", "note three"],
	}),
	getters: {
		numberOfSkills: (state): number => {
			return state.skills.length;
		},
		numberOfNotes: (state): number => {
			return state.notes.length;
		},
	},
	actions: {
		deleteSkill(skill: Skill) {
			this.skills = this.skills.filter((m) => m.idCode !== skill.idCode);
		},
		async fill() {
			setTimeout(async () => {
				const response = await axios.get(
					"https://edwardtanguay.vercel.app/share/skills.json"
				);
				this.skills = response.data;
			}, 3000);
		},
	},
})(piniaInstance);
