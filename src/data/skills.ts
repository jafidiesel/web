interface ISkills {
  hardSkills?: {
    title: string;
    list: string[];
  };
  softSkill?: {
    title: string;
    list: string[];
  };
}

export const skills: ISkills = {
  hardSkills: {
    /* optional */
    title: "Main Technologies",
    list: ["JS", "React", "Algorand SDK", "Blockchain"]
  },
  softSkill: {
    /* optional */
    title: "Skills",
    list: [
      "Problem-solving oriented.",
      "Business analysis capacity.",
      "Cooperative work.",
      "Active listener."
    ]
  }
};
