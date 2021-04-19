
// Handling Products AppState

import ProductModel from "../Models/ProductModel";

// Products AppState - המידע ברמת האפליקציה הקשור למוצרים - אלו בעצם כל המוצרים:
export class ProductsState {
    public products: ProductModel[] = []; // We're going to create initial object
}

// ----------------------------------------------------------------------------------

// Products Action Types - אלו פעולות ניתן לבצע על המידע ברמת האפליקציה:
export enum ProductsActionType {
    ProductsDownloaded = "ProductsDownloaded",
    ProductAdded = "ProductAdded",
    ProductUpdated = "ProductUpdated",
    ProductDeleted = "ProductDeleted"
}

// ----------------------------------------------------------------------------------

// Product Action - אובייקט המכיל את המידע עבור הפעולה שאנו מבצעים על המידע ברמת הפליקציה
export interface ProductAction {
    type: ProductsActionType;
    payload: any; // payload?: any; if the payload can be empty.
}

// ----------------------------------------------------------------------------------

// Products Action Creators - מתאים עבור כל פעולה Action ומחזירות אובייקט payload-פונקציות המקבלות את ה

export function productsDownloadedAction(products: ProductModel[]): ProductAction {
    return { type: ProductsActionType.ProductsDownloaded, payload: products };
}
export function productAddedAction(product: ProductModel): ProductAction {
    return { type: ProductsActionType.ProductAdded, payload: product };
}
export function productUpdatedAction(product: ProductModel): ProductAction {
    return { type: ProductsActionType.ProductUpdated, payload: product };
}
export function productDeletedAction(id: number): ProductAction {
    return { type: ProductsActionType.ProductDeleted, payload: id };
}

// ----------------------------------------------------------------------------------

// Products Reducer - פונקציה המבצעת את הפעולה בפועל
export function productsReducer(currentState: ProductsState = new ProductsState(), action: ProductAction): ProductsState {
    
    const newState = {...currentState}; // Spread Operator - שכפול אובייקט

    switch(action.type) {
        case ProductsActionType.ProductsDownloaded:
            newState.products = action.payload; // Here payload is all products!
            break;
        case ProductsActionType.ProductAdded:
            newState.products.push(action.payload); // Here payload is the added product!
            break;
        case ProductsActionType.ProductUpdated: 
            // Do the correct action...
            break;
        case ProductsActionType.ProductDeleted: 
            // Do the correct action...
            break;
    }

    return newState;
}

