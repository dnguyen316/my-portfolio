import { child, get, ref, set } from "firebase/database";
import { db } from "../configs/firebase";

const UserServices = {
  getUser: async (userId: string) => {
    const dbRef = ref(db);
    console.log(dbRef);
    return get(child(dbRef, `users/${userId}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          return snapshot.val();
        } else {
          console.log("No data available");
        }
      })
      .catch((error: Error) => {
        console.log(error);
      });
  },
  submitMessage: async ({
    userId,
    name,
    email,
    message,
  }: {
    userId: string;
    name: string;
    email: string;
    message: string;
  }) => {
    return set(ref(db, "users/" + userId), {
      name,
      email,
      message,
    })
      .then(() => {
        return {
          status: 200,
          message: "successfully",
        };
      })
      .catch((error: Error) => {
        console.log(error);
      });
  },
};

export default UserServices;
