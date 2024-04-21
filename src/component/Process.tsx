import { View, StyleSheet, SafeAreaView, FlatList } from "react-native";
import ProcessCard from "./ProcessCard";

interface ProcessProps {
  data: Process[];
}

const Process: React.FC<ProcessProps> = ({ data }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <View>
              <ProcessCard item={item} />
              {index < data.length - 1 && <View style={styles.div}></View>}
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
  },
  div: {
    backgroundColor: "rgba(208, 213, 221, 1)",
    width: 2,
    height: 42,
    marginLeft: 12,
    marginVertical: 5,
  },
});
export default Process;
