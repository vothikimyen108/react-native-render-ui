

interface Task {
    id: Number,
    title: string,
    subTitle: string,
    bu: string,
    userBu: {
        name: string,
        email: string,
    }
    des: string
}

interface Process {
    id: Number,
    subTitle: string,
    mainTitle: string,
    user: string,
    topTitle: string,
}

interface Note {
    id: Number,
    subTitle: string,
    mainTitle: string,
}

interface Accordion {
    id: Number,
    isOpen: boolean
}

interface col {
    id: string,
    title: string,
}

interface Product {
    id: string,
    name: string,
    code: string
}

interface Columns {
    title: string,
    dataIndex: string,
    key: string
    widthCol: any;
    renderCol?: (title: string) => React.ReactNode;
    isCus: boolean,
    textAlign: 'center' | 'left' | 'right'
}