import { defineStore, acceptHMRUpdate } from "pinia";
import { piniaInstance } from "@/globals";
import _rawSkills from "~/data/skills.json";
import type { AppStore, FrontendJob, Skill } from "~/types";
import * as AppModel from "./AppModel";

export const useAuth = defineStore("auth", {});

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useAuth, import.meta.hot));
}

export const appStore = defineStore("appStore", {
	state: (): AppStore => ({
		skills: [],
		notes: ["note one", "note two", "note three"],
		appMessage: "this is the default app message",
		frontendJobs: [],
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
		getFrontendJobs() {
			return () => this.frontendJobs;
		},
	},
	actions: {
		async fill() {
			this.frontendJobs = await AppModel.getFrontendJobs();
			this.skills = await AppModel.getSkills();
		},
		async deleteJob(frontendJob: FrontendJob) {
			frontendJob.isProcessing = true;
			const response = await AppModel.deleteJob(frontendJob);
			frontendJob.isProcessing = false;
		},
		deleteSkill(skill: Skill) {
			this.skills = this.skills.filter((m) => m.idCode !== skill.idCode);
		},
		setAppMessage(text: string) {
			this.appMessage = text;
		},
	},
})(piniaInstance);
