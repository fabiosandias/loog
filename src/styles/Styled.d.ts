import { IDefaultTheme } from "interfaces/IDefaultTheme";
import "styled-components";

declare module "styled-components" {
  export const DefaultTheme: IDefaultTheme;
}
