import React from 'react';
import { View, ScrollView, Text, StyleSheet, FlatList } from 'react-native';

const Table = () => {
  const columns: Columns[] = [
    {
      title: 'STT',
      dataIndex: 'id',
      key: '1',
      widthCol: '15%',
      isCus: false,
      textAlign: 'center'
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      key: '2',
      widthCol: '40%',
      isCus: true,
      renderCol: (title) => { return <Text>{title}<Text style={{ color: 'red' }}> *</Text></Text> },
      textAlign: 'left'
    },
    {
      title: 'Mã vạch',
      dataIndex: 'code',
      key: '3',
      widthCol: '45%',
      isCus: true,
      renderCol: (title) => { return <Text>{title}<Text style={{ color: 'red' }}> *</Text></Text> },
      textAlign: 'left'
    },
  ];

  const tableData: Product[] = [
    {
      id: '1', name: "Sách Đắc Nhân Tâm", code: "123456784",
    },
    {
      id: '2', name: "Sách Đắc Nhân Tâm", code: "123456785",
    },
    {
      id: '3', name: "Sách Đắc Nhân Tâm", code: "123456786",
    },
  ];

  const renderHeader = () => (
    <View style={[styles.row, styles.header]}>
      {columns.map((item, index) => {
        const width: any = item?.widthCol || 'auto'
        const borderRight = index === columns.length - 1 ? 1 : 0
        return <View style={[{ flexBasis: width, borderRightWidth: borderRight }, styles.cell, styles.cellTop]} key={item.dataIndex}>{!item.isCus ? <Text style={{ textAlign: item.textAlign }}>{item.title}</Text> : item.renderCol(item.title)}</View>
      })}
    </View>
  );

  const renderItem = (item: Product) => (
    <View style={styles.row} key={item.code}>
      {Object.keys(item).map((key, index) => {
        const col = columns.find(col => col.dataIndex === key)
        const width = col?.widthCol || 'auto';
        const textAlign = col?.textAlign || 'left'
        const borderRight = index === Object.keys(item).length - 1 ? 1 : 0
        return <Text key={item[`${key}`]} style={[{ flexBasis: width, textAlign: textAlign, borderRightWidth: borderRight }, styles.cell,]}>{item[`${key}`]}</Text>
      })}
    </View>
  );

  const renderList = (data: Product[]) => {
    return (data.map(item => {
      return renderItem(item);
    }))
  }
  
  return (<ScrollView style={styles.container} nestedScrollEnabled>
    <ScrollView horizontal>
      <View style={styles.table}>
        {renderHeader()}
        {renderList(tableData)}
      </View>
    </ScrollView>
  </ScrollView>)
};

const styles = StyleSheet.create({
  container: {
    height: 150,
  },
  table: {
    width: 500,
    backgroundColor: 'white'
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    borderColor: '#ccc',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderLeftWidth: 1,
    borderBottomWidth: 1
  },
  cellTop: {
    borderTopWidth: 1,
  },
  cellRight: {
    borderRightWidth: 1
  },
  header: {
    backgroundColor: 'rgba(249, 250, 251, 1)',
  },
  headerText: {
    fontWeight: 'bold',
  },
});

export default Table;
