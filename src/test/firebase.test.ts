import { User } from "firebase/auth";
import { describe, expect, test } from "vitest";
import { authDelete, authSignUp } from "../firebase";

describe("firebase.test", () => {
    let testUser: User;
    test("subscribe user", async () => {
        const [email, password] = ["__automated__@mail.net", "__test12?*"];
        const cred = await authSignUp(email, password);
        testUser = cred.user;
    });

    test("unsubscribe created user", async () => {
        await authDelete(testUser);
    });
});