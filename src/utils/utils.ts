import { IModelMemberGitHub } from "interfaces/IMembers";

export const reduceMemberObject = (data: IModelMemberGitHub[]) => {
  return data.map(
    (member) => ({
      id: member.id,
      avatar_url: member.avatar_url,
      login: member.login,
    }),
    []
  );
};
