import { Feather } from "@expo/vector-icons";
import { View } from "react-native";

import { globalStyles } from "@/global-styles";

import { styles } from "./styles";

interface Props {
  isDone: boolean;
}

export const Checkbox: React.FC<Props> = ({ isDone }) => {
  const styleKey = isDone ? "isDone" : "base";
  const style = styles[styleKey];

  return (
    <View style={style.container}>
      {isDone && (
        <Feather
          color={globalStyles.colors.gray[100]}
          name="check"
          size={7.31}
        />
      )}
    </View>
  );
};
