import { View, StyleSheet, Text, Image } from "react-native";
import { iconHome, iconStroke, iconUser } from "../icon";

interface ItemTaskProps {
    item: Task
}

const ItemTask: React.FC<ItemTaskProps> = ({ item }) => {
    const { bu, userBu, des } = item
    return (<View style={styles.container}>
        <View style={styles.viewList}>
            {iconHome({ width: 20, height: 20 })}
            <View><Text style={styles.textSub}>Đơn vị phụ trách</Text></View>
            <View><Text style={styles.textMain}>{bu}</Text></View>
        </View>

        <View style={styles.viewList}>
            {iconUser({ width: 21, height: 22 })}
            <View><Text style={styles.textSub}>Người phụ trách</Text></View>
            <View><Text style={styles.textMain}>{bu}</Text></View>
        </View>

        <View style={styles.viewList}>
            {iconHome({ width: 20, height: 20 })}
            <View><Text style={styles.textSub}>Đơn vị phụ trách</Text></View>
            <View style={styles.viewUser}>
                <View>
                    <Image style={{ marginTop: 3 }} source={require('../../assets/img/Avatar.png')} />
                </View>
                <View>
                    <Text style={styles.textMain}>{userBu.name}</Text>
                    <Text style={styles.textSub}>{userBu.email}</Text>
                </View>
            </View>
        </View>

        <View style={styles.viewList}>
            {iconStroke({ width: 22, height: 22 })}
            <View><Text style={styles.textSub}>Mô tả</Text></View>
            <View><Text style={styles.textMain}>{des}</Text></View>
        </View>
    </View>)
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 12,
        paddingVertical: 16,
        borderRadius: 10,
        flexDirection: 'column',
        gap: 15
    },
    viewList: {
        borderBottomColor: 'rgba(245, 247, 250, 1)',
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    textSub: {
        fontSize: 12,
        lineHeight: 28,
        fontWeight: '400',
        color: "rgba(16, 24, 40, 0.6)"
    },
    textMain: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400'
    },
    viewUser: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    }
});

export default ItemTask