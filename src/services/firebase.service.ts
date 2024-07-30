import admin from "firebase-admin";

admin.initializeApp({
  databaseURL: "https://social-media-content-gen-e83ef.firebaseio.com",
  credential: admin.credential.cert({
    type: "service_account",
    project_id: "social-media-content-gen-e83ef",
    private_key_id: "1aa7b3d082d49be4e9630fe66914e4528c9d39f5",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQC96fL3mI3W7n6q\n+yAOmlWXQpUfw5Nl4/iUGUYcMwyiZEbAsxu5CmxP494R+YLkeEHc2iL1EsPlO726\n075S4L57Y3i5G7i0ewnre7U5K9gjz/9SRLg/niCAzIz0kvO6jmmKhrOhedrzm3zG\nORsDOPaAQCioxjxR/PWxqC5dfe3DSQ6e0KscnBu4bBiu0N1ztFZI/Qv1wwnAFx+m\nBQsK9p688XVryCSAvBIRm+WXvXHcIBYzbv1LtDODf4lcYvy0r5IpcQzjOKNqTC+J\nlhXZaXgP7cLN+5MhluY5GZXwDXpopZY/WTXG8VHxXe0yDOTFzD+lT8PVZWE07Tno\n5R/N/OphAgMBAAECgf9G4GkCaWIw32amqSeYS5Zl5+jU/J37XiQHduc+NE8izAnG\ndmcs8pbkZJvHBDe1d1bH9cvWFYrGoo/MifnIidfidN05OFSsBr9NAyjp4qhntS4J\n+1udYoZUNgLlGXLyIkmBSYRWCgQ3pm/gCq/qI/gwemwHkPQyJRYM7Oy2N6k57VrK\nTqoos7b77wU3C1Nn2HDR+btZNfJrqmEgjeMXxeiA/EVjUdBMhSZJ/UwnVRdvOeCh\nF87yu+ITuEW9Q+v5OfkguL+A1qy1/vG5YLOlf8CwebgCr2CP7f+zFd5AjQyAoYxX\nFH/3nq6wSC1HZlCswKQL5F956mr3OPUGKTeahmECgYEA4OtGM4FHCfHrdatB3RKL\n1lyCH7R3+CP4gPjNeRPRdkGQ2cLhpOqJJ1HRMWMzqjHmnpX6HEPOElnn5uOZsf9P\nZa+fvMoNFfxf4b6HS5HD/Y6xiKLziOVzGc4l0zErLi0sq1mBbkKuI0DVsYP4wVow\ny2NDkd7bu4hBkVoTmydGkFECgYEA2ChVVWwhC+rygHPPpUzwMjjYkIIzY9/rzKvU\n80KFujePNWXk9AyKXFsptGFLYj8zKS6PuqBnMhSpkPEJnSG4Ssl0we5KOXO33KqZ\nigUD3V0CaxsZweWTKtt8raIvTqgtpTKImxEr5PWftDRLCeCnAD1+ZleQhJxUVg/l\nv8iPxRECgYBECcftsrC7qGvy54CAEKkuikNutdgIv1DgKuN1OfKGFGVuCk7Z5Xzh\n4RUoHHs3g+rglDvZqwU+deX56WXH+5SYDR2ELZbxzKtwjYM97/Va0XyQ+cIz6jz8\nVGkKzvfh+xZlKylFInStA2LhVSu9ybuy+u8oxEKyIxC6mIYPzDzDUQKBgGUINRqA\nN9ICNuajOuLgW0SeHVsuACcmemhnyFkLNsYbQeyLe8A2PFV+preQ4lNBhwAwqy1n\n29QkpD0C7KNtJ16NWu1qG3dPBxk1BB7myS+mUYMOX7OpQmg9vsDJlaMGKI+WVxNj\nq0iRJdxstMYhIu2R0Iq1Uu8owqKXO6OwcsKBAoGBAIa+ZIH8c+b7EjOLlOpw1Deq\nA5Yj+m4bWdVZCe+ltG1zYZjQ1QgwlSgpZLSTNiMhPKeYdsjhSVuGlLJz0mtMnxhx\nTYV4sZ1h14l61GRGN3S8YQYgq5WQQflTTQg8vIQyG5RRH+MOZDvit9uNpc/6GXj9\nzbl89UXI52U4VGmiPmBX\n-----END PRIVATE KEY-----\n",
    client_email:
      "firebase-adminsdk-y43gp@social-media-content-gen-e83ef.iam.gserviceaccount.com",
    client_id: "104267337612978399029",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-y43gp%40social-media-content-gen-e83ef.iam.gserviceaccount.com",
    universe_domain: "googleapis.com",
  } as admin.ServiceAccount),
});

const db = admin.firestore();

export default db;
