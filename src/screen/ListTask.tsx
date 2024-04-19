import { View, StyleSheet, TextInput, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { iconSearch } from "../icon";
import { useEffect, useState } from "react";
import { DataTasksAll } from "../data/data";
import { MyTabBar, Tasks } from "../component";
const Tab = createMaterialTopTabNavigator();

const ListTask = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState<Task[]>(DataTasksAll);

  const searchTasks = (searchTerm: string): Task[] => {
    searchTerm = searchTerm.toLowerCase().trim();
    return DataTasksAll.filter(
      (task) =>
        task.title.toLowerCase().includes(searchTerm) ||
        task.subTitle.toLowerCase().includes(searchTerm)
    );
  };

  useEffect(() => {
    if (text) {
      setData(searchTasks(text));
    } else {
      setData(DataTasksAll);
    }
  }, [text]);

  return (
    <View style={styles.container}>
      <View style={styles.sectionStyle}>
        <View style={styles.imageStyle}>{iconSearch({ size: 20 })}</View>
        <TextInput
          style={{ flex: 1, fontSize: 14, color: "rgba(16, 24, 40, 0.6)" }}
          placeholder="Tìm kiếm"
          underlineColorAndroid="transparent"
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />
      </View>
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen name="normal" options={{ title: "Thường dùng" }}>
          {() => <Tasks listTask={data}></Tasks>}
        </Tab.Screen>
        <Tab.Screen name="All" options={{ title: "Tất cả quy trình" }}>
          {() => <Tasks listTask={data}></Tasks>}
        </Tab.Screen>
      </Tab.Navigator>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(245, 247, 250, 1)",
    width: "100%",
    height: "100%",
    paddingHorizontal: 16,
  },
  sectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 36,
    borderRadius: 100,
    paddingLeft: 10,
    marginVertical: 12,
    width: "100%",
  },
  imageStyle: {
    marginRight: 3,
  },
});

export default ListTask;
