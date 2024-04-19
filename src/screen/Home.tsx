import { View, Button, StyleSheet } from "react-native";
import Table from "../component/Table";

const Home = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Create"
        onPress={() => navigation.navigate("CreateTask")}
      />
      <Button
        title="Go to List task"
        onPress={() => navigation.navigate("ListTask")}
      />
      <Table></Table>
    </View>
  );
};

export default Home;
