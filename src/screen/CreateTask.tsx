import { View, Text, StyleSheet, Pressable } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ContentCreate, InfoTask, MyTabBar } from "../component";

const Tab = createMaterialTopTabNavigator();

const CreateTask = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.subHeader}>
        Quy trình đề xuất tuyển dụng - Khối bán hàng
      </Text>
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen name="content" options={{ title: "Nội dung đề xuất" }}>
          {() => <ContentCreate></ContentCreate>}
        </Tab.Screen>
        <Tab.Screen name="info" options={{ title: "Thông tin phiếu" }}>
          {() => <InfoTask></InfoTask>}
        </Tab.Screen>
      </Tab.Navigator>
      <View style={styles.viewButton}>
        <Pressable style={styles.createBtn}>
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
  subHeader: {
    color: "rgba(16, 24, 40, 0.6)",
    marginBottom: 10,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "400",
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

export default CreateTask;
