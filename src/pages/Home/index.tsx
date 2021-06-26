import { useState } from "react";
import MemberList from "components/MemberList";
import { oranizations as _org } from "utils/constants";
import {
  Container,
  HomeHeader,
  HomeContent,
  SelectSearch,
  InputSearch,
  HomeContentButton,
} from "pages/Home/styles";
import GiHubService from "services/GitHubService";
import { useEffect } from "react";
import { IMembers } from "interfaces/IMembers";
import { reduceMemberObject } from "utils/utils";
import Loading from "components/Loading";

const Home = () => {
  const [members, setMembers] = useState<IMembers[]>([]);
  const [copyMembers, setCopyMembers] = useState<IMembers[]>([]);
  const [perPage, setPerPerge] = useState<number>(5);
  const [loading, setLoading] = useState<boolean>(true);
  const [restartLoading, setRestartLoading] = useState<boolean>(false);
  const [organization, setOrganization] = useState<string>("facebook");

  const getAllMembers = async (
    organization: string,
    numberPerPage?: number,
    isChangeRestartLoading?: boolean
  ) => {
    let sumNumberPage = perPage;
    if (numberPerPage) {
      sumNumberPage = sumNumberPage + numberPerPage;
      setPerPerge(sumNumberPage);
    }

    if (isChangeRestartLoading) {
      setRestartLoading(true);
    }

    try {
      const { data } = await GiHubService.getAll(organization, sumNumberPage);
      const reducedObject = reduceMemberObject(data);
      setMembers(reducedObject);
      setCopyMembers(reducedObject);
      setLoading(false);
      setRestartLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeOrganization = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setOrganization(event.target.value);
    getAllMembers(event.target.value, undefined, true);
  };

  const filterMembersByUsername = (value: string) => {
    setMembers(
      copyMembers.filter((member) =>
        member.login.toUpperCase().includes(value.toUpperCase())
      )
    );
  };

  useEffect(() => {
    getAllMembers(organization);
  }, []);

  return (
    <>
      {restartLoading && <Loading />}
      {!loading ? (
        <>
          <Container>
            <HomeHeader>
              <SelectSearch>
                <select
                  value={organization}
                  onChange={handleChangeOrganization}
                >
                  {_org.map((org) => (
                    <option key={org.id} value={org.value}>
                      {org.label}
                    </option>
                  ))}
                </select>
              </SelectSearch>
              <InputSearch>
                <input
                  onChange={(event) =>
                    filterMembersByUsername(event.target.value)
                  }
                  type="text"
                />
              </InputSearch>
            </HomeHeader>

            <HomeContent>
              {members.length > 0 ? (
                <MemberList members={members} oranization={organization} />
              ) : (
                ""
              )}
            </HomeContent>
          </Container>
          <HomeContentButton>
            <button
              type="button"
              onClick={() => getAllMembers(organization, 5, true)}
            >
              Carregar mais
            </button>
          </HomeContentButton>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;
