var storage={
    set(key,value){
        localStorage.setItem(key, JSON.stringify(value));
    },
    get(key){
        return JSON.parse(localStorage.getItem(key));
    },remove(key){
        localStorage.removeItem(key);
    }
}
export default storage;
// 使用storage检测本地代码中有没有本地存储数据 可在applacation中本地查看存储的数据
// localhost.getItem(key)
// localhost.setItem(key)