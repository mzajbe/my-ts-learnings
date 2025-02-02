"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchUserData(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const user = yield response.json();
            return user;
        }
        catch (error) {
            console.error("Error fetching user data:", error);
            throw error;
        }
    });
}
function displayUserData(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield fetchUserData(userId);
            console.log('User Data:', user);
        }
        catch (error) {
            console.error('Failed to display user data:', error);
        }
    });
}
// Fetch and display user data for user with ID 1
displayUserData(1);
