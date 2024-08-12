import {
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    orderBy,
    query,
    Timestamp,
    updateDoc,
    where,
} from "firebase/firestore";
import { useCallback, useState } from "react";
import { db } from "../../firebase";

const useHook = (collectionName) => {
    const [error, setError] = useState("");
    const [items, setItems] = useState([]);
    const [itemDetail, setItemDetail] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const getItems = useCallback(async () => {
        const arr = [];
        const q = query(
            collection(db, collectionName),
            orderBy("createdAt", "desc") // Сортировка по времени создания в порядке убывания
        );
        
        const data = await getDocs(q);
        data.forEach((doc) => {
            const docData = doc.data();
            
            // Преобразование переносов строк в текстовом поле
            if (docData.ans) {
                docData.ans = docData.ans.replace(/\\n/g, '\n');
            }
            
            arr.push({ tid: doc.id, ...docData });
        });
    
        setItems(arr.reverse());
        setLoading(false);
    }, [collectionName]);
    const getItemsWhere = useCallback(async (category) => {
        const arr = [];
        const q = query(collection(db, collectionName), orderBy("createdAt", "desc"), where("type", "==", category));
        const data = await getDocs(q);
        data.forEach((doc) => {
            arr.push({ tid: doc.id, ...doc.data() });
        });
        setItems(arr);
        console.log(arr)
        setLoading(false);
    }, [collectionName]);

    const getItemDetail = async (id) => {
        const docRef = doc(db, collectionName, id);
        const res = await getDoc(docRef);
        setLoading(false);
        if (res.exists()) {
            setItemDetail(res.data());
            console.log(res.data())
        } else {
            setError("Данный отзыв не найден!");
        }
    };

    const handleSearch = async (searchValue, title) => {
        if (!searchValue?.trim()) return;

        const dataQuery = query(
            collection(db, collectionName),
            where('category', '==', title),
            where(
                'searchWords',
                'array-contains-any',
                [searchValue.toLowerCase(), searchValue.toLowerCase() + '\uf8ff']
            ),
        );

        const querySnapshot = await getDocs(dataQuery);
        const dataItems = [];
        querySnapshot.forEach((doc) => {
            dataItems.push({ id: doc.id, ...doc.data() });
        });
        console.log(dataItems)
        setItems(dataItems);
    };

    return {
        isLoading,
        items,
        getItems,
        itemDetail,
        getItemDetail,
        getItemsWhere,
        error,
        handleSearch
    };
};

export default useHook;
