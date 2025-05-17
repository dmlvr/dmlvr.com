import { CVs } from "./cvs";
import { Setting } from "./setting";

export type MainProps = Setting & {
  cvs: CVs[];
  darkTheme: boolean;
  ruLang: boolean;
};
