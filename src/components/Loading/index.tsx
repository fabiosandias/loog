import IconLoading from "../../assets/images/loading.svg";
import { FullLoading } from "components/Loading/styles";

const Loading = () => (
  <FullLoading>
    <img src={IconLoading} alt="loading" />
  </FullLoading>
);

export default Loading;
