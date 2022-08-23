import React from "react";
import SuperButton from "../../super-components/SuperButton/SuperButton";
import SuperCheckbox from "../../super-components/SuperCheckbox/SuperCheckbox";
import SuperInputText from "../../super-components/SuperInputText/SuperInputText";

type PropsType = {

}

export const Test: React.FC<PropsType> = (props) => {
   const {

   } = props;

   const onClickHandler = () => {
      alert('test')
   }

   return <>
      <SuperButton onClick={onClickHandler}>test</SuperButton>
      <SuperInputText />
      <SuperCheckbox />
   </>
}