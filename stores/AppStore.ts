import { defineStore } from "pinia";
import { piniaInstance } from "@/globals";
import _rawSkills from "~/data/skills.json";
import type { AppStore, Product, Skill } from "~/types";
import axios from "axios";

// const { data: products } = useFetch("https://fakestoreapi.com/products", {
// 	lazy: true,
// 	transform: (products: Product[]) => {
// 		return products.map((product) => ({
// 			id: product.id,
// 			title: product.title,
// 			image: product.image,
// 		}));
// 	},
// });
// console.log("products", products);

// const _skills: Skill[] = [];
// for (const _rawSkill of _rawSkills) {
// 	const _skill: Skill = {
// 		idCode: _rawSkill.idCode,
// 		name: _rawSkill.name,
// 		url: _rawSkill.url,
// 		description: _rawSkill.description,
// 		importance: "somewhatUseful",
// 	};
// 	_skills.push(_skill);
// }

// const skills = ref<Skill[]>(_skills);

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
