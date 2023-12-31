import { useContext } from "react";
import { LanguageContext } from "../globals/language/language";
import { FrontPageBtnCard } from "../components/FrontPageBtnCard";
import { ThemeContext } from "../globals/theme";
import { useMediaQuery } from "react-responsive";
import { variables } from "../globals/variables";
import { BreadCrumbs } from "./layout/BreadCrumbs";

export const AboutProject = () => {
  const isDesktop = useMediaQuery({ query: variables.breakpoints.desktop });
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className="d-flex justify-content-between align-items-start">
        <h2>{language.lang_code.about_about_project}</h2>
        <BreadCrumbs pageParam="about" />
      </div>
      <div
        id="about-container"
        className={isDesktop ? "row my-1" : "column my-1"}
      >
        <FrontPageBtnCard bkcolor={`${theme.primaryColors.cardBackground.hex}`}>
          <h5 id="about-card-examprj-header">
            {language.lang_code.about_exam}
          </h5>
          <p>{language.lang_code.about_description_exam}</p>
        </FrontPageBtnCard>
        <FrontPageBtnCard bkcolor={`${theme.primaryColors.cardBackground.hex}`}>
          <h5 id="about-card-purpose-header">
            {language.lang_code.word_purpose}
          </h5>
          <p>{language.lang_code.about_description_purpose}</p>
        </FrontPageBtnCard>
        <FrontPageBtnCard bkcolor={`${theme.primaryColors.cardBackground.hex}`}>
          <h5 id="about-card-goal-header">{language.lang_code.word_goal}</h5>
          <p className="m-0">{language.lang_code.about_description_goal}</p>
        </FrontPageBtnCard>
      </div>
    </>
  );
};
