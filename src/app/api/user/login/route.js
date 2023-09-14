import jwt from "jsonwebtoken";

import { DB, readDB } from "@/app/libs/DB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  readDB();
//(if)check username or passwor dcorrect or not
//find variables from DB.user
//after that create token and send back to display
if ((!username && !password))
return NextResponse.json(
    {
      ok: false,
      message: "Username or Password is incorrect",
    },
    { status: 400 }
  );

  const token = "Replace this with token creation";

  return NextResponse.json({ ok: true, token });
};
