import { IModelGitHub } from "interfaces/IMembers";

export const reduceMemberObject = (data: IModelGitHub[]) => {
  return data.map(
    (member) => ({
      id: member.id,
      avatar_url: member.avatar_url,
      login: member.login,
    }),
    []
  );
};