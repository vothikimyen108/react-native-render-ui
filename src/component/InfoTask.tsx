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
import { iconArrowDown, iconCheckDone, iconStartBlue } from "../icon";
import { useEffect, useState } from "react";

const InfoTask = () => {
  const [text, setText] = useState("");
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

  const customTitle = (item: Process) => {
    return (
      <View style={stylesAccordion.viewTitle}>
        <View>{iconStartBlue({ width: 24, height: 24 })}</View>
        <View>
          <Text style={stylesAccordion.subTitle}>{item.subTitle}</Text>
          <Text style={stylesAccordion.mainTitle}>{item.mainTitle}</Text>
        </View>
      </View>
    );
  };

  const customBody = (item: Process) => {
    const { user, mainTitle } = item;
    return (
      <View style={stylesAccordion.viewBody}>
        <View style={stylesAccordion.viewBottom}>
          <Text style={stylesAccordion.textMain}>{mainTitle}</Text>
          {user && <Text style={stylesAccordion.textUser}>{user}</Text>}
        </View>
      </View>
    );
  };

  const customIcon = (item: Process) => {
    const isItem = listAccordion.find((i) => i.id === item.id);
    return (
      <View
        style={{
          ...stylesAccordion.viewIcon,
          transform: `${
            isItem && isItem?.isOpen ? "rotate(90deg)" : "rotate(0deg)"
          }`,
        }}
      >
        {iconArrowDown({ width: "20", height: "20" })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={DataProcess}
          renderItem={({ item, index }) => (
            <View>
              <AccordionItem
                key={item.id.toString()}
                customTitle={() => customTitle(item)}
                customBody={() => customBody(item)}
                customIcon={() => customIcon(item)}
                animationDuration={400}
                isOpen={false}
                onPress={(isOpen) => {
                  const openAccordionItem = listAccordion;
                  const index = openAccordionItem.findIndex(
                    (i) => i.id === item.id
                  );
                  openAccordionItem[index].isOpen = isOpen;
                  setListAccordion(openAccordionItem);
                }}
                containerStyle={stylesAccordion.viewContainerStyle}
                pressableProps={{
                  style: ({ pressed }) => [
                    {
                      marginVertical: 10,
                      marginHorizontal: 16,
                    },
                  ],
                }}
              />
              {index < DataProcess.length - 1 && (
                <View style={styles.div}></View>
              )}
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
    backgroundColor: "rgba(245, 247, 250, 1)",
    width: "100%",
    height: "85%",
    paddingTop: 20,
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
    borderBottomEndRadius: 12,
    padding: 0,
    marginBottom: 0,
    shadowColor: "rgba(16, 24, 40, 0.2)", // Adjusted shadow color
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2, // For Android shadow effect
    backgroundColor: "rgba(235, 248, 255, 1)",
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
    backgroundColor: "white",
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
