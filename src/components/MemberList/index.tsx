import { IMembers } from "interfaces/IMembers";
import {
  Container,
  Avatar,
  Oranization,
  Username,
  LinkGitHub,
  ButtonView,
} from "./styles";
import { BsPersonFill } from "react-icons/bs";
import CustomModal from "../CustomModal/index";
import { useState } from "react";
import { apiConfig } from "utils/constants";

interface IProps {
  members: IMembers[];
  oranization: string;
}
const MemberList = ({ members, oranization }: IProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [memberIndex, setMemberIndex] = useState<number>(0);

  const handleChangeModal = (isShow: boolean, index: number) => {
    setShowModal(isShow);
    setMemberIndex(index);
  };

  return (
    <>
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
                    onClick={() => handleChangeModal(true, index)}
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
        {members[memberIndex].login}
      </CustomModal>
    </>
  );
};
export default MemberList;
