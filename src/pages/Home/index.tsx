import { useState } from "react";
import MemberList from "components/MemberList";
import { oranizations as _org } from "utils/constants";
import {
  Container,
  HomeHeader,
  HomeContent,
  SelectSearch,
  InputSearch,
} from "pages/Home/styles";
import GiHubService from "services/GitHubService";
import { useEffect } from "react";
import { IMembers } from "interfaces/IMembers";
import { reduceMemberObject } from "utils/utils";

const Home = () => {
  const [members, setMembers] = useState<IMembers[]>([]);

  const getAllOranization = async () => {
    try {
      const { data } = await GiHubService.getAll("facebook");
      setMembers(reduceMemberObject(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllOranization();
  }, []);

  return (
    <Container>
      <HomeHeader>
        <SelectSearch>
          <select name="">
            <option value="">Selecione</option>
            {_org.map((org) => (
              <option key={org.id} value={org.value}>
                {org.label}
              </option>
            ))}
          </select>
        </SelectSearch>
        <InputSearch>
          <input type="text" />
        </InputSearch>
      </HomeHeader>

      <HomeContent>
        {members.length > 0 ? (
          <MemberList members={members} oranization="Facebook" />
        ) : (
          ""
        )}
      </HomeContent>
    </Container>
  );
};

export default Home;
