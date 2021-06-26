import { IMembers, IUserGitHub } from "interfaces/IMembers";
import {
  Container,
  Avatar,
  Oranization,
  Username,
  LinkGitHub,
  ButtonView,
  UserDetail,
  BoxLeft,
  BoxRight,
} from "./styles";
import { BsPersonFill } from "react-icons/bs";
import CustomModal from "../CustomModal/index";
import { useState } from "react";
import { apiConfig } from "utils/constants";
import GiHubService from "services/GitHubService";
import dayjs from "dayjs";
import Loading from "components/Loading";

interface IProps {
  members: IMembers[];
  oranization: string;
}
const MemberList = ({ members, oranization }: IProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [memberIndex, setMemberIndex] = useState<number>(0);
  const [user, setUser] = useState<IUserGitHub>({} as IUserGitHub);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChangeModal = (isShow: boolean, index: number) => {
    setShowModal(isShow);
    setMemberIndex(index);
  };

  const handleShowDatailUser = async (
    isShow: boolean,
    index: number,
    username: string
  ) => {
    try {
      setLoading(true);
      const { data } = await GiHubService.getUserByUsername(username);
      setUser(data);
      setShowModal(isShow);
      setMemberIndex(index);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <Container>
        {members.length > 0
          ? members.map((member, index) => (
              <li key={`${member.id}-${member.login}`}>
                <Avatar>
                  <img src={member.avatar_url} alt="Foto do perfil" />
                </Avatar>
                <Oranization>
                  <p>{member.login}</p>
                </Oranization>
                <Username> {oranization} </Username>
                <LinkGitHub
                  target="_blank"
                  href={`${apiConfig.URL_GITHUB}/${member.login}`}
                >
                  Ver perfil no GitHub
                </LinkGitHub>

                <ButtonView>
                  <button
                    type="button"
                    onClick={() =>
                      handleShowDatailUser(true, index, member.login)
                    }
                  >
                    <BsPersonFill />
                  </button>
                </ButtonView>
              </li>
            ))
          : ""}
      </Container>
      <CustomModal
        index={memberIndex}
        handleModal={handleChangeModal}
        showModal={showModal}
      >
        {/* {members.length > 0 ? members[memberIndex].login : ""} */}

        {Object.keys(user).length > 0 ? (
          <UserDetail>
            <BoxLeft>
              <img src={user.avatar_url} alt={user.name} />
            </BoxLeft>
            <BoxRight>
              <span>
                Nome: <span>{user.name}</span>
              </span>
              <span>
                Seguirdor: <span>{user.followers}</span>
              </span>
              <span>
                Seguirdor: <span>{user.public_repos}</span>
              </span>
              <span>
                Usuário desde:{" "}
                <span>{dayjs(user.created_at).format("DD/MM/YYYY")}</span>
              </span>
              <span></span>
            </BoxRight>
          </UserDetail>
        ) : (
          ""
        )}
      </CustomModal>
    </>
  );
};
export default MemberList;
