import {
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
} from "react-native";
import Task from "./Task";

type TasksProps = {
  listTask: Task[];
};

const Tasks = ({ listTask }: TasksProps) => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={listTask}
          renderItem={({ item }) => (
            <Task id={item.id} title={item.title} subtitle={item.subTitle} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: "rgba(245, 247, 250, 1)",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
  },
  title: {
    fontSize: 24,
  },
});

export default Tasks;
