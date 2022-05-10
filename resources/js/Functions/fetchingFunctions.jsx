import axios from "axios";

//function that fetches products of a specific category
export const fetchProducts = async (setData) => {
    //getting category ID
    let categoryId = null;
    const categoryName = location.pathname.split("/")[location.pathname.split("/").length - 1];
    switch(categoryName) {
        case "stoly":
            categoryId = 1;
            break;
        case "stolky":
            categoryId = 2;
            break;
        case "kvetinace":
            categoryId = 3;
            break;
        case "doplnky":
            categoryId = 4;
            break;
    }

    const response = await axios.get(`/api/products/${categoryId}`);;
    
    setData(response.data);
};

//function that fetches a specific product
export const fetchProduct = async (setData) => {
   
    //getting productId
    let productId = null;
    const productName = location.pathname.split("/")[location.pathname.split("/").length - 1];
    switch(productName) {
        case "kjoto":
            productId = 1;
            break;
        case "berlin":
            productId = 2;
            break;
        case "pariz_ocel":
            productId = 3;
            break;
        case "pariz_drevo":
            productId = 4;
            break;
        case "bauhaus":
            productId = 5;
            break;
        case "oslo":
            productId = 6;
            break;
        case "lisabon":
            productId = 7;
            break;
    }

    const response = await axios.get(`/api/product/${productId}`);
    
    setData(response.data);
};