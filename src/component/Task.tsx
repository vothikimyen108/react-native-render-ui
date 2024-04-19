import { View, Text, Image, StyleSheet, Button, Pressable } from "react-native";
import { iconArrow } from "../icon";
import { useNavigation } from "@react-navigation/native";

interface TaskProps {
  title?: string;
  subtitle?: string;
  id;
}

type Nav = {
  navigate: (value: string, p: any) => void;
};

const Task: React.FC<TaskProps> = ({ title, subtitle, id }) => {
  const navigation = useNavigation<Nav>();

  const handleOnPress = () => {
    navigation.navigate("Detail", { itemId: id });
  };

  const handleOnCreateTask = () => {
    navigation.navigate("CreateTask", { itemId: id });
  };

  return (
    <Pressable onPress={handleOnPress}>
      <View style={styles.container}>
        <View style={styles.viewTitle}>
          <Image
            style={{ marginTop: 3 }}
            source={require("../../assets/img/icontask.png")}
          />
          <View style={{ flexShrink: 1 }}>
            <View>
              <Text
                numberOfLines={2}
                style={{ fontWeight: "600", fontSize: 14, lineHeight: 20 }}
              >
                {title}
              </Text>
            </View>
            <View>
              <Text style={{ marginTop: 5, fontWeight: "100", fontSize: 12 }}>
                Phụ trách bởi Nhân Sự Và Phát Triển Tổ Chức
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.viewSubContent}>
          <Text numberOfLines={3} style={{ fontSize: 12, lineHeight: 18 }}>
            {subtitle}
          </Text>
        </View>
        <View style={styles.viewButton}>
          <Pressable style={styles.createButton} onPress={handleOnCreateTask}>
            <Text style={{ flexShrink: 1, fontWeight: "600", fontSize: 14 }}>
              Tạo Phiếu
            </Text>
            {iconArrow({ size: "20" })}
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
  },
  viewSubContent: {
    marginTop: 10,
  },
  viewTitle: {
    flexDirection: "row",
    gap: 10,
    flexShrink: 1,
  },
  viewButton: {
    marginTop: 15,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  createButton: {
    borderRadius: 20,
    borderColor: "#BDE4FF",
    borderWidth: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 18,
    paddingRight: 18,
    fontSize: 14,
    flexDirection: "row",
    gap: 3,
  },
});

export default Task;
