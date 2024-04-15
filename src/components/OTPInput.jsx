import React, { useState, useRef } from "react";
import { View, TextInput } from "react-native";

const OTPInput = () => {
  const maxLength = 1;
  const inputsRef = useRef([]);
  const [inputValues, setInputValues] = useState(new Array(6).fill(""));

  const handleOnChangeText = (text, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = text;
    setInputValues(newInputValues);

    // Move to next input
    if (text && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleOnKeyPress = ({ nativeEvent: { key } }, index) => {
    if (key === "Backspace" && !inputValues[index] && index > 0) {
      // Focus previous input
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <View className="flex flex-row items-center justify-between w-full">
      {inputValues.map((value, index) => (
        <TextInput
          key={index}
          className="border-b border-b-[#FD9139] flex-1 text-center text-black text-sm mr-4"
          value={value}
          onChangeText={(text) => handleOnChangeText(text, index)}
          onKeyPress={(event) => handleOnKeyPress(event, index)}
          maxLength={maxLength}
          ref={(el) => (inputsRef.current[index] = el)}
          keyboardType="number-pad"
        />
      ))}
    </View>
  );
};

export default OTPInput;
