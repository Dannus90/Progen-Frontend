export interface GetSkillsResponse {
  skill: {
    getSkills: {
      skills: Array<Skill>;
      statusCode: number;
    };
  };
}

export interface GetUserSkillsResponse {
  userSkill: {
    getUserSkills: {
      userSkills: Array<UserSkillData>;
      statusCode: number;
    };
  };
}

export type UserSkillData = {
  skill: Skill;
  userSkill: UserSkill;
};

type Skill = {
  id: string;
  skillName: string;
};

type UserSkill = {
  id: string;
  userId: string;
  skillId: string;
  skillLevel: number;
};

export interface CreateSkillResponse {
  createSkill: {
    skillId: string;
    statusCode: number;
  };
}

export interface CreateSkillInput {
  skillName: string;
}
