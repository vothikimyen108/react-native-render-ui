import { View, StyleSheet, SafeAreaView, FlatList } from "react-native";
import ProcessCard from "./ProcessCard";
import { DataProcess } from "../data/data";

const Process = () => {
    return <View style={styles.container}>
        <SafeAreaView>
            <FlatList
                data={DataProcess}
                renderItem={({ item, index }) => (
                    <View>
                        <ProcessCard item={item} />
                        {index < DataProcess.length - 1 && <View style={styles.div}></View>}
                    </View>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </SafeAreaView>
    </View>
};

const styles = StyleSheet.create({
    container: {
        height: '85%',
        paddingTop: 10,
        backgroundColor: 'rgba(245, 247, 250, 1)',
    },
    div: {
        backgroundColor: 'rgba(208, 213, 221, 1)',
        width: 2,
        height: 42,
        marginLeft: 12,
        marginVertical: 5
    }

});
export default Process;