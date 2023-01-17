
// import { Container } from "./styles.ts"

import { ActivityIndicator, View } from "react-native";

const Loading = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator color="#7c3aed"/>
    </View>
  )
};

export default Loading;
