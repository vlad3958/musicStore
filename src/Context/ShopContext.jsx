import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { 
  getCurrentUser, 
  fetchAuthSession, 
  signOut as amplifySignOut 
} from 'aws-amplify/auth';
import all_products from "../Components/Assets/all_products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_products.length+1; index++) {
       cart[index] = 0
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [userSession, setUserSession] = useState(null);

    // Comprehensive authentication check
    const checkAuthStatus = async () => {
        try {
            // Retrieve current user
            const { username, userId, signInDetails } = await getCurrentUser();
            
            // Fetch session details
            const session = await fetchAuthSession();

            setCurrentUser({
                username,
                userId,
                signInDetails,
                email: session.tokens.idToken?.payload?.email
            });
            setUserSession(session);
            setIsAuthenticated(true);

            console.log("User authenticated:", {
                username,
                userId,
                sessionValid: !!session.tokens.accessToken
            });

            return true;
        } catch (error) {
            console.log("No active user session:", error);
            setIsAuthenticated(false);
            setCurrentUser(null);
            setUserSession(null);
            return false;
        }
    }

    // Session refresh method
    const refreshSession = async () => {
        try {
            const freshSession = await fetchAuthSession({ forceRefresh: true });
            setUserSession(freshSession);
            console.log("Session refreshed successfully");
            return true;
        } catch (error) {
            console.error("Session refresh failed", error);
            await checkAuthStatus();
            return false;
        }
    }

    // Check auth status on component mount
    useEffect(() => {
        checkAuthStatus();

        // Set up periodic session refresh
        const sessionRefreshInterval = setInterval(() => {
            if (isAuthenticated) {
                refreshSession();
            }
        }, 30 * 60 * 1000); // Every 30 minutes

        return () => clearInterval(sessionRefreshInterval);
    }, []);

    const addToCart = async (itemId) => {
        if (!isAuthenticated) {
            alert('Please sign in to add items to cart');
            return;
        }

        try {
            // Optional: Add additional session validation
            await refreshSession();

            setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
            console.log('Item added to cart by', currentUser.username);
        } catch (error) {
            console.error('Error adding to cart', error);
            alert('Authentication failed. Please sign in again.');
        }
    }

    const removeFromCart = async (itemId) => {
        if (!isAuthenticated) {
            alert('Please sign in to modify cart');
            return;
        }

        try {
            // Optional session refresh
            await refreshSession();

            setCartItems((prev) => ({...prev, [itemId]: Math.max(0, prev[itemId] - 1)}));
        } catch (error) {
            console.error('Error removing from cart', error);
            alert('Authentication failed. Please sign in again.');
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = all_products.find((product) => product.id === Number(item))
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    // Sign out method with session cleanup
    const signOut = async () => {
        try {
            await amplifySignOut();
            setIsAuthenticated(false);
            setCurrentUser(null);
            setUserSession(null);
            // Reset cart on sign out
            setCartItems(getDefaultCart());
        } catch (error) {
            console.error('Error signing out', error);
        }
    }

    const contextValue = {
        // Existing methods
        getTotalCartItems,
        getTotalCartAmount,
        all_products,
        cartItems,
        addToCart,
        removeFromCart,

        // Authentication-related methods and states
        isAuthenticated,
        currentUser,
        userSession,
        signOut,
        checkAuthStatus,
        refreshSession
    };

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;