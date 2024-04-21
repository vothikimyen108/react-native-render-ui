import {
    View,
    StyleSheet,
    SafeAreaView,
    FlatList,
    Platform,
    UIManager,
    Text,
} from "react-native";
import { DataProcess } from "../data/data";
import ProcessCard from "./ProcessCard";
import { AccordionItem } from "react-native-accordion-list-view";
import { iconArrowDown, iconCheckDone, iconHashSign, iconStartBlue } from "../icon";
import { useCallback, useEffect, useState } from "react";
import Process from "./Process";

const InfoTask = () => {
    const [listAccordion, setListAccordion] = useState<Accordion[]>([]);
    const data: Note[] = [
        {
            id: 0,
            subTitle: "Người đề xuất nhập thông tin vào mục này",
            mainTitle: "Mô tả",
        },
        {
            id: 1,
            subTitle: "Người đề xuất nhập thông tin vào mục này",
            mainTitle: "1. Thông tin người đề xuất",
        },
        {
            id: 2,
            subTitle: "Người đề xuất nhập thông tin vào mục này",
            mainTitle: "2. Thông tin người đề xuất",
        },
        {
            id: 3,
            subTitle: "Người đề xuất nhập thông tin vào mục này",
            mainTitle: "3. Thông tin người đề xuất",
        },
        {
            id: 4,
            subTitle: "Người đề xuất nhập thông tin vào mục này",
            mainTitle: "4. Thông tin người đề xuất",
        },
    ];

    useEffect(() => {
        if (Platform.OS === "android") {
            if (UIManager.setLayoutAnimationEnabledExperimental) {
                UIManager.setLayoutAnimationEnabledExperimental(true);
            }
        }
        // Map through the data array and create a new array with default values
        const newListAccordion = data.map((item) => ({
            id: item.id,
            isOpen: false,
        }));

        // Set the state of listAccordion to the new array
        setListAccordion(newListAccordion);
    }, [Platform.OS]);

    const customTitle = ({ listProcess, subTitle, mainTitle }: Process) => {
        const isListProcess = listProcess && listProcess.length > 0;
    
        return (
            <View style={stylesAccordion.viewTitle}>
                <View>
                    {isListProcess ? (
                        iconHashSign({ width: 20, height: 20 })
                    ) : (
                        iconStartBlue({ width: 24, height: 24 })
                    )}
                </View>
                <View>
                    <Text style={stylesAccordion.subTitle}>{subTitle}</Text>
                    <Text style={stylesAccordion.mainTitle}>{mainTitle}</Text>
                </View>
            </View>
        );
    };
    

    const customBody = (item: Process) => {
        const { user, mainTitle, listProcess } = item;
        const isListProcess = listProcess && listProcess?.length > 0;
        return (
            <View
                style={[
                    stylesAccordion.viewBody,
                    {
                        backgroundColor: `${isListProcess ? "rgba(234, 236, 240, 1)" : "white"
                            }`,
                    },
                ]}
            >
                {isListProcess ? (
                    <View>
                        <View style={styles.div}></View>
                        <Process data={listProcess}></Process>
                    </View>
                ) : (
                    <View style={stylesAccordion.viewBottom}>
                        <Text style={stylesAccordion.textMain}>{mainTitle}</Text>
                        {user && <Text style={stylesAccordion.textUser}>{user}</Text>}
                    </View>
                )}
            </View>
        );
    };

    const customIcon = (item: Process) => {
        const isItem = listAccordion.find((i) => i.id === item.id);
        return (
            <View
                style={{
                    ...stylesAccordion.viewIcon,
                    transform: `${isItem && isItem?.isOpen ? "rotate(90deg)" : "rotate(0deg)"
                        }`,
                }}
            >
                {iconArrowDown({ width: "20", height: "20" })}
            </View>
        );
    };

    const handleOnPressItem = useCallback(
        (isOpen: boolean, item: Process) => {
            setListAccordion((prevListAccordion) => {
                const updatedList = prevListAccordion.map((i) =>
                    i.id === item.id ? { ...i, isOpen } : i
                );
                return updatedList;
            });
        },
        [setListAccordion]
    );

    return (
        <View style={{ height: '100%', backgroundColor: 'rgba(245, 247, 250, 1)' }}>
            <SafeAreaView>
                <FlatList
                    data={DataProcess}
                    renderItem={({ item, index }) => {
                        const { listProcess } = item;
                        const isItem = listAccordion.find((i) => i.id === item.id);
                        const isListProcess = listProcess?.length > 0 && isItem?.isOpen;
                        const widthBorderRadius = isItem?.isOpen ? (listProcess?.length > 0 ? 10 : 0) : 10;
                        return (
                            <View
                                style={isListProcess ? styles.container1 : styles.container}
                            >
                                {index > 0 && (
                                    <View style={styles.div}></View>
                                )}
                                <AccordionItem
                                    key={item.id.toString()}
                                    customTitle={() => customTitle(item)}
                                    customBody={() => customBody(item)}
                                    customIcon={() => customIcon(item)}
                                    animationDuration={400}
                                    isOpen={false}
                                    onPress={(isOpen) => {
                                        handleOnPressItem(isOpen, item);
                                    }}
                                    containerStyle={stylesAccordion.viewContainerStyle}
                                    pressableProps={{
                                        style: ({ pressed }) => [
                                            {
                                                // marginVertical: 10,
                                                // marginHorizontal: 16,
                                                paddingVertical: 10,
                                                paddingHorizontal: 16,
                                                borderTopEndRadius: 10,
                                                borderTopStartRadius: 10,
                                                borderBottomEndRadius: widthBorderRadius,
                                                borderBottomStartRadius: widthBorderRadius,
                                                backgroundColor: "white",
                                            },
                                        ],
                                    }}
                                />
                                {/* {index < DataProcess.length - 1 && !item.listProcess && (
                  <View style={styles.div}></View>
                )} */}
                            </View>
                        );
                    }}
                    keyExtractor={(item) => item.id.toString()}
                />
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(245, 247, 250, 1)",
        paddingHorizontal: 16,
    },
    container1: {
        backgroundColor: "rgba(234, 236, 240, 1)",
        paddingHorizontal: 16,
        paddingVertical: 13,
    },
    div: {
        backgroundColor: "rgba(208, 213, 221, 1)",
        width: 2,
        height: 42,
        marginLeft: 12,
        marginVertical: 5,
    },
});

const stylesAccordion = StyleSheet.create({
    titleStyle: {
        color: "#000",
    },
    viewContainerStyle: {
        backgroundColor: "transparent",
        borderRadius: 0,
        padding: 0,
        marginBottom: 0,
    },
    viewTitle: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        paddingVertical: 5,
    },
    mainTitle: {
        fontSize: 14,
        fontWeight: "600",
        lineHeight: 20,
    },
    subTitle: {
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 18,
        color: "rgba(16, 24, 40, 0.6)",
    },
    viewBody: {
        height: "auto",
        flex: 1,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
    },
    div: {
        width: "100%",
        height: 2,
        backgroundColor: "rgba(242, 244, 247, 1)",
    },
    viewContent: {
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    styleDot: {
        color: "red",
    },
    input: {
        marginVertical: 10,
    },
    viewIcon: {
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
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
});

export default InfoTask;
