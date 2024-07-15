import { Option, Select } from "./LanguageToggle.style";
import '../../i18n/i18n';
import { useTranslation } from 'react-i18next';
import { ChangeEvent } from "react";

interface Props {
  isinitialcolor: number;
}

export default function LanguageToggle({isinitialcolor}:Props) {
  const { i18n } = useTranslation();

  function handleChangeLanguage(e: ChangeEvent<HTMLSelectElement>) {
    const newLanguage = i18n.language = e.target.value || 'uk';
    i18n.changeLanguage(newLanguage);
  }

  return (
    <Select onChange={handleChangeLanguage} defaultValue={i18n.language}>
      <Option isinitialcolor={isinitialcolor} value="en">EN</Option>
      <Option isinitialcolor={isinitialcolor} value="uk">UA</Option>
    </Select>
  );
}
