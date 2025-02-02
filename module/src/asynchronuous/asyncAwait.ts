interface User {
  id: number;
  name: string;
  email: string;
}

async function fetchUserData(userId: number): Promise<User> {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const user = await response.json() as User;
    return user;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
}


async function displayUserData(userId:number){
    try{
        const user = await fetchUserData(userId);
        console.log('User Data:', user);
    }catch (error) {
        console.error('Failed to display user data:', error);
    }
}

// Fetch and display user data for user with ID 1
displayUserData(1);
