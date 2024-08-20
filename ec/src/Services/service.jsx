import axios from "axios";

const api =[

    "https://api.company1/products",
    "https://api.company2/products",
    "https://api.company3/products",
    "https://api.company4/products",
    "https://api.company5/products"
];

export const getProducts = async () => {
    try{
        const request = api.map(async (url) =>axios.get(url)); 
        const response = await Promise.all(request);
        const products = response.map((res) => res.data);
            return products;
        }catch(error){
            console.log("error",error);
            return [];
    }
};