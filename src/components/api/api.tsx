import {useState, useEffect, createContext, useContext} from 'react';

type Category = {
    name: string;
    image: string;
    hero: string;
};
type Data = {
    id: string;
    name: string;
    artist: string;
    year: string;
    value: string;
    type: string;
    dimensions: string;
    location: string;
    provenence: string;
    image: string;
    dimension: string;
    story: string;
    height: string;
    width: string;
}

type ApiContextType = {
    categories: Category[];
    data:Data[];
    setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
    setData: React.Dispatch<React.SetStateAction<Data[]>>;
};

const ApiContext = createContext<ApiContextType | null>(null);

export function ApiProvider({ children }: { children: React.ReactNode }){
    
    //create all useState and functions here to be exported via API Provider 
   const [categories, setCategories] = useState<Category[]>([]);
    useEffect(() => {
        async function getCat(){
            const response = await fetch('/categories.json');
            const result = await response.json();
            //console.log(result);
            setCategories(result.categories)
        }
        getCat()
    },[]);

    const [data, setData] = useState<Data[]>([]);
    useEffect(() => {
        async function getData(){
            const response = await fetch('/data.json');
            const result = await response.json();
            //console.log(result.data);
            setData(result.data)
        }
        getData()
    }, []);

    return(
        <ApiContext.Provider
            value={{categories, setCategories, data, setData}}// pass all useState in here so outside components can use
        >
            {children}
        </ApiContext.Provider>
    )
}

export function useApi(){
    const context = useContext(ApiContext);

    if (!context) {
        throw new Error("useApi must be used within ApiProvider");
    }

    return context;
}