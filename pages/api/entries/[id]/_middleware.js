import { NextResponse } from "next/server";

export function middleware (req, ev) {
  const id = req.page.params.id || ' ';
  const checkMongoIDRegExp = new RegExp("^[0-9a-fA-F]{24}$");

  if (!checkMongoIDRegExp.test(id)) {
    return new Response( JSON.stringify({ message: 'El id no es valido' + id}), {
      status: 400,
      headers: {
        'Content-Type':'applicatio/json',
      }
    });
  }

  return NextResponse.next()
};