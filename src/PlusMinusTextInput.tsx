import { ReactElement, MouseEvent } from "react";
import * as Color from "./ColorModule";
import styled from "styled-components"

type PMTextInputProps = {
    id: string;
    value: number;
    handleChange: (value: string, id: string) => void;
}

const BtnTopRight = styled.button`
    display: block;
    height: 17px;
    background-color: white;
    border-style:none;
    padding-left: 5px;
    padding-right: 3px;
`;

const BtnBottomLeft = styled.button`
    display: block;
    height: 16px;
    background-color: white;
    border-style: none;
    padding: 0px 5px 2px 7px;
`;

const BtnContainer = styled.div`
    display: inline-block;
    vertical-align: bottom;
    border-color: #989898;
    border-style: solid solid solid none;
    border-width: 1px;
    width: 16px;
    border-top-right-radius: 3px;
    border-bottom-right-radius:3px;
`;

const TextInput = styled.input`
    display: inline-block;
    width: 50px;
    font-size: 26px;
    border-color: #989898;
    border-style: solid none solid solid;
    background-color: white;
    border-width: 1px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
`;


function PlusMinusTextInput(props: PMTextInputProps): ReactElement {

    const plusBtnCallback = (event: MouseEvent<HTMLButtonElement>) => {
        let newValue = props.value+1;
        let newValueStr = newValue.toString();
        
        props.handleChange(newValueStr, props.id);
    }
    
      const minusBtnCallback = (event: MouseEvent<HTMLButtonElement>) => {
        let newValue = props.value-1;
        let newValueStr = newValue.toString();
        
        props.handleChange(newValueStr, props.id);
      }
    
      const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        let id = event.target.id as Color.RGB;
    
        props.handleChange(value, id);
      }

    return(
        <>
            <TextInput type="text" id={props.id} value={props.value} onChange={handleTextChange}></TextInput>
            <BtnContainer>
                <BtnTopRight onClick={plusBtnCallback}>+</BtnTopRight>
                <BtnBottomLeft onClick={minusBtnCallback}>-</BtnBottomLeft>
            </BtnContainer>      
        </>  
    );
}

export default PlusMinusTextInput;