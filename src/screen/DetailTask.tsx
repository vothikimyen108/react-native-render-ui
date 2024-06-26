import { View, StyleSheet, Pressable, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { DataProcess, DataTasksAll } from "../data/data";
import { ItemTask, MyTabBar, Process } from "../component";

const Tab = createMaterialTopTabNavigator();

const DetailTask = ({ route, navigation }) => {
  const { itemId } = route.params;
  const item: Task = DataTasksAll.find((item) => item.id === itemId);

  const handleOnPress = () => {
    navigation.navigate("CreateTask");
  };

  return (
    <View style={styles.container}>
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen name="info" options={{ title: "Thông tin" }}>
          {() => <ItemTask item={item}/>}
        </Tab.Screen>
        <Tab.Screen name="pro" options={{ title: "Quy trình xử lý" }}>
          {() => <View style={styles.viewProcess}><Process data={DataProcess}/></View>}
        </Tab.Screen>
      </Tab.Navigator>
      <View style={styles.viewButton}>
        <Pressable style={styles.createBtn} onPress={handleOnPress}>
          <Text style={styles.textBtn}>Tạo Phiếu</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(245, 247, 250, 1)",
    width: "100%",
    height: "100%",
    paddingHorizontal: 16,
    position: "relative",
  },
  viewProcess: {
    backgroundColor: "rgba(245, 247, 250, 1)",
    // height: '100%',
    marginBottom: 70,
  },
  viewButton: {
    position: "absolute",
    bottom: 5,
    left: 16,
    right: 16,
  },
  createBtn: {
    backgroundColor: "rgba(16, 24, 40, 1)",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    color: "white",
    width: "100%",
    borderRadius: 24,
  },
  textBtn: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
  },
});

export default DetailTask;
