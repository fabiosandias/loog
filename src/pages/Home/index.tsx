import { useState } from "react";
import MemberList from "components/MemberList";
import { oranizations as __ } from "utils/constants";
import {
  Container,
  HomeHeader,
  HomeContent,
  SelectSearch,
  InputSearch,
} from "pages/Home/styles";

import instance from "services/Interceptores";

const Home = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const members = [
    {
      id: 1249083,
      avatar_url: "https://avatars.githubusercontent.com/u/1249083?v=4",
      login: "fabiosandias",
    },

    {
      id: 1249083,
      avatar_url: "https://avatars.githubusercontent.com/u/1249083?v=4",
      login: "SanderElias",
    },
  ];

  const getAllOranization = async () => {
    try {
      const { data } = await instance.get();
    } catch (error) {}
  };

  return (
    <Container>
      <HomeHeader>
        <SelectSearch>
          <select name="">
            <option value="">Selecione</option>
            {__.map((org) => (
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
        <MemberList members={members} oranization="Facebook" />
      </HomeContent>
    </Container>
  );
};

export default Home;
