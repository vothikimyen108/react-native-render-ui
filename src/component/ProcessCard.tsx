import { View, StyleSheet, Text } from "react-native";
import { iconStart, iconUserCheck } from "../icon";

interface ProcessCardProps {
  item: Process;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ item }) => {
  const { subTitle, mainTitle, user, topTitle } = item;
  return (
    <View style={styles.container}>
      <View style={styles.viewTop}>
        <View>
          {topTitle
            ? iconUserCheck({ width: 24, height: 24 })
            : iconStart({ width: 21, height: 22 })}
        </View>
        <View>
          {topTitle && <Text style={styles.topTitle}>{topTitle}</Text>}
          <Text>{subTitle} </Text>
        </View>
      </View>
      <View style={styles.div}></View>
      <View style={styles.viewBottom}>
        <Text style={styles.textMain}>{mainTitle}</Text>
        {user && <Text style={styles.textUser}>{user}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    color: "#000",
    backgroundColor: "white",
    paddingVertical: 8,
    borderRadius: 10,
  },
  viewTop: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingVertical: 10,
    paddingLeft: 12,
  },
  div: {
    backgroundColor: "rgba(245, 247, 250, 1)",
    width: "100%",
    height: 2,
  },
  viewBottom: {
    paddingLeft: 12,
    paddingVertical: 16,
    flexDirection: "row",
    gap: 5,
  },
  textMain: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
  },
  textSub: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20,
  },
  textUser: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20,
    color: "rgba(0, 94, 217, 1)",
  },
  topTitle: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 18,
    color: "rgba(16, 24, 40, 0.6)",
  },
});

export default ProcessCard;
