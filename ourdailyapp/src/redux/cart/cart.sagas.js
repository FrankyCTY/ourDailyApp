import {takeLeading, select, call, put, all, fork, cancel, take, cancelled} from "redux-saga/effects";

import CartActionTypes from "./cart.types";
import {
    addAppToCartSuccess,
    addAppToCartFailure,
    addItem,
    getAppsInCartSuccess,
    getAppsInCartFailure,
    setIsGettingCartAppsTrue,
    setIsGettingCartAppsFalse,
    populateCartApps,
    removeItem,
    minusItemPriceToTotal,
    addWishListItem,
    addAppToWishListSuccess,
    addAppToWishListFailure,
    removeWishListItem,
    removeAppToWishListSuccess,
    removeAppToWishListFailure,
    setIsTogglingWishlistAppTrue,
    setIsTogglingWishlistAppFalse,
    removeAppFromCartStart,
} from "./cart.actions";

import {selectCartItemExist, selectWishlistItemExist} from "./cart.selectors";

import {addAppToCartBackEnd, getCartApps, deleteAppFromCart, addAppToWishlistBackEnd
, deleteAppFromWishlist} from "./cart.requests";

// ================= Sagas ==================
function* onAddAppToCartStart() {
    while(true) {
        // 1) wait for add app start
        const {appId} = yield take(CartActionTypes.ADD_APP_START);
        
        // 2) implement add app logic
        const addAppToCartTask = yield fork(addAppToCartStart, {appId});
        
        // 3) check if add app to checklist started
        const action = yield take([CartActionTypes.ADD_APP_WISHLIST_START]);
        // 4) cancel the add app logic if user clciked add app to checklist
        if(action.type === CartActionTypes.ADD_APP_WISHLIST_START) {
            console.log("cancelling addAppToCartTask");
            yield cancel(addAppToCartTask);
        }
    }
}

function* onGetCartAppsStart() {
    yield takeLeading(
        CartActionTypes.GET_CART_APPS_START,
        getCartAppsStart
    )
}

function* onRemoveAppFromCartStart() {
    yield takeLeading(
        CartActionTypes.REMOVE_APP_FROM_CART_START,
        gf_removeAppFromCartStart,
    )
}

function* onAddAppToWishlistStart() {
    yield takeLeading(
        CartActionTypes.ADD_APP_WISHLIST_START,
        addAppToWishlistStart,
    )
}

function* onRemoveAppFromWishlistStart() {
    yield takeLeading(
        CartActionTypes.REMOVE_APP_WISHLIST_START,
        deleteAppFromWishlistStart,
    )
}



export default function* cartSaga() {
    yield all([call(onAddAppToCartStart), call(onGetCartAppsStart), 
        call(onRemoveAppFromCartStart), call(onAddAppToWishlistStart),
    call(onRemoveAppFromWishlistStart)]);
}

// ================= other generator functions ==================

function* addAppToCartStart({appId}) {
    try {
        // 1) Check local wishlist state if target app has been added to the cart b4
        // then we need to remove that from the state and the database
        const isAppInWishlist = yield select(selectWishlistItemExist(appId));
        if(isAppInWishlist) {
            // remove wishlist app from state and the database
            yield call(deleteAppFromWishlist, appId);
        }
        // 2) add app to user cart via backend
        const appDetailsRes = yield call(addAppToCartBackEnd, appId);
        // 3) Add app to cart within react state
        yield put(addItem(appDetailsRes.data.data.app));
        yield put(addAppToCartSuccess());
    } catch (error) {
        yield put(addAppToCartFailure());
    } finally {
        // 4) clear react state and backend for add app to cart
        // if this task is cancelled
        if(yield cancelled()) {
            console.log("TASK add app to cart CANCELLED!");
            yield call(deleteAppFromCart, appId);
            // Remove app from react cart state
            yield put(removeItem(appId));
        }
    }
}

function* getCartAppsStart() {
    try {
        // Start Spinner
        yield put(setIsGettingCartAppsTrue());
        // 1) Get Cart Apps from backend
        const getCartAppsRes = yield call(getCartApps);
        // 2) Populate Cart Apps to react state
        yield put(populateCartApps(getCartAppsRes.data.data.apps));
        // Stop Spinner
        yield put(setIsGettingCartAppsFalse());
        yield put(getAppsInCartSuccess());
    } catch (error) {
        // @error
        yield put(setIsGettingCartAppsFalse());
        yield put(getAppsInCartFailure());
    }
}

function* gf_removeAppFromCartStart({appId, appPrice}) {
    try {
        // 1) Modify the Database for deleting app from cart
        yield call(deleteAppFromCart, appId);

        // 2) Remove app from react cart state
        yield put(removeItem(appId));

        // 3) Recalculate the total price for the apps in cart
        yield put(minusItemPriceToTotal(appPrice));
    } catch (error) {
        
    }
}

function* addAppToWishlistStart({appId}) {
    try {
        // START SPINNER
        yield put(setIsTogglingWishlistAppTrue());
        // 1) Check local cart state if target app has been added to the cart b4
        // then we need to remove that from the state and the database
        const isAppInCart = yield select(selectCartItemExist(appId));
        if(isAppInCart) {
            // remove cart app from state and the database
            yield put(removeAppFromCartStart(appId));
        }
        // 2) add app to user wishlist via backend
        const appDetailsRes = yield call(addAppToWishlistBackEnd, appId);
        // 3) Add app to wishlist within react state and
        // remove cart app from cart if it exists
        yield put(addWishListItem(appDetailsRes.data.data.app));
        yield put(addAppToWishListSuccess());

        // STOP SPINNER
        yield put(setIsTogglingWishlistAppFalse());
    } catch (error) {
        // STOP SPINNER
        yield put(setIsTogglingWishlistAppFalse());
        yield put(addAppToWishListFailure());
    }
}

function* deleteAppFromWishlistStart({appId}) {
    try {
        // START SPINNER
        yield put(setIsTogglingWishlistAppTrue());
        // 1) remove app to user wishlist via backend
         yield call(deleteAppFromWishlist, appId);
        // 2) remove app to wishlist within react state
        yield put(removeWishListItem(appId));
        yield put(removeAppToWishListSuccess());
        // STOP SPINNER
        yield put(setIsTogglingWishlistAppFalse());
    } catch (error) {
        // STOP SPINNER
        yield put(setIsTogglingWishlistAppFalse());
        yield put(removeAppToWishListFailure());
    }
}